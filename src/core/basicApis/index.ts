import axios from 'core/configs/axios';

const REFRESH_TOKEN = '/auth/refresh/';
export function refreshAccessToken(refreshToken: string) {
  return axios
    .post<{access: string}>(REFRESH_TOKEN, {
      refresh: refreshToken,
    })
    .then(res => res.data);
}
