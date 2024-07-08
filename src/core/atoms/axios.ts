import {Setter, atom} from 'jotai';
import {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {tokenAtom, userAtom} from 'core/atoms/auth';
import axios from 'core/configs/axios';
import {authStageAtom} from './authStage';
import {AuthStage} from 'core/types';
import {refreshAccessToken} from 'core/basicApis';

interface FailedRequests {
  resolve: (value: AxiosResponse) => void;
  reject: (value: AxiosError) => void;
  config: AxiosRequestConfig;
  error: AxiosError;
}

export const setupAxiosAtom = atom(false, (get, set, update) => {
  axios.interceptors.request.use(request => {
    const token = get(tokenAtom);
    console.log('req', token);
    if (request.headers && token?.access) {
      request.headers.Authorization = `Bearer ${token.access}`;
    }
    return request;
  });

  // Create a list to hold the request queue
  let failedRequests: FailedRequests[] = [];
  let isTokenRefreshing = false;

  axios.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
      const token = get(tokenAtom);
      const status = error.response?.status;
      const originalRequestConfig = error.config;
      console.log('res', status);
      if (status !== 401) {
        return Promise.reject(error);
      }

      if (!token?.refresh) {
        handleLogout(set);
        return Promise.reject('no refresh token');
      }

      if (isTokenRefreshing && originalRequestConfig) {
        if (originalRequestConfig.url === '/auth/refresh/') {
          failedRequests.forEach(({reject, error}) => reject(error));
          handleLogout(set);
          throw new Error('Refresh token is expired!');
        } else {
          return new Promise((resolve, reject) => {
            failedRequests.push({
              resolve,
              reject,
              config: originalRequestConfig,
              error: error,
            });
          });
        }
      }

      isTokenRefreshing = true;

      try {
        if (token?.refresh) {
          const response = await refreshAccessToken(token?.refresh);

          if (!response.access) {
            throw new Error(
              'Something went wrong while refreshing your access token',
            );
          }

          set(tokenAtom, {access: response.access});

          failedRequests.forEach(({resolve, reject, config}) => {
            if (config.headers) {
              config.headers.Authorization = `Bearer ${response.access}`;
            }
            axios(config)
              .then(response => resolve(response))
              .catch(error => reject(error));
          });
        }
      } catch (refreshError: unknown) {
        failedRequests.forEach(({reject, error}) => reject(error));
        return Promise.reject(error);
      } finally {
        failedRequests = [];
        isTokenRefreshing = false;
      }
      if (!isTokenRefreshing && originalRequestConfig)
        return axios(originalRequestConfig);
    },
  );
  set(setupAxiosAtom, true);
});

function handleLogout(set: Setter) {
  set(userAtom, null);
  set(authStageAtom, AuthStage.SingIn);
  delete axios.defaults.headers.common['Authorization'];
}

setupAxiosAtom.onMount = setAtom => setAtom(false);
