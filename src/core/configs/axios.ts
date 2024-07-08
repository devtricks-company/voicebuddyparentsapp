import defaultAxios from 'axios';
import VersionNumber from 'react-native-version-number';
import {Platform} from 'react-native';

export const Urls = {
  api: 'https://voicebuddy-staging.darkube.app/api/v1',
};

const axios = defaultAxios.create({
  responseType: 'json',
  timeout: 100000,
  baseURL: Urls.api,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'app-version': VersionNumber.appVersion,
    platform: Platform.OS,
  },
});

export default axios;
