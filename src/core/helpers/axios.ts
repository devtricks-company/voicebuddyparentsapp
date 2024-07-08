import axios, {AxiosError as DefaultAxiosError} from 'axios';
import {filter, first, get} from 'lodash';
import * as Sentry from '@sentry/react-native';
import {BaseErrorResponse} from '../types/axios';

export type AxiosError = DefaultAxiosError<BaseErrorResponse>;

const networkError = 'ERR_NETWORK';
const maximumFailedAttemptsCode = 429;

export const getAxiosError = (e: Error | AxiosError) => {
  if (axios.isAxiosError(e)) {
    if (e.code === networkError) return 'No internet connection';
    if (e.response?.status === maximumFailedAttemptsCode)
      return 'Maximum number of failed login attempts exceeded, please try again in 5 minutes.';

    const data = get(e, 'response.data') as unknown;
    return first(
      filter(
        [
          get(data, 'error.messages[0]'),
          get(data, 'data.error'),
          get(data, 'message'),
          get(data, 'detail'),
          'The application has encountered an unknown error',
        ],
        i => (i && typeof i === 'string' ? i : undefined),
      ),
    ) as string;
  } else {
    return e.message;
  }
};

export function logAxiosError(
  e: Error | AxiosError | undefined,
  section?: string,
) {
  Sentry.withScope(function (scope) {
    scope.setContext('Payload', {
      section,
      response: JSON.stringify(get(e, 'response.data')),
      body: JSON.stringify(get(e, 'config.data')),
    });
    Sentry.captureException(e);
  });
}
