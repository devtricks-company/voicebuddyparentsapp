import * as Sentry from '@sentry/react-native';
import {ComponentType} from 'react';

const SENTRY_DNS =
  'https://df571780b8a765eea8da0a68751f1c86@sentry.hamravesh.com/6213';

export function wrapWithSentry(comp: ComponentType) {
  Sentry.init({
    dsn: SENTRY_DNS,
    attachScreenshot: true,
    tracesSampleRate: 1.0,
  });
  return Sentry.wrap(comp);
}
