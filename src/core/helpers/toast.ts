import AppToast from 'react-native-toast-message';
import {ToastOptions} from 'react-native-toast-message/lib/src/types';

export enum ToastType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Notification = 'notification',
}

export default class Toast {
  static show(
    description: string,
    type: ToastType = ToastType.Success,
    title?: string,
  ) {
    AppToast.show(<ToastOptions>{
      text2: description,
      visibilityTime: 5000,
      type: type,
      text1:
        title ??
        (type === ToastType.Success
          ? 'Success'
          : type === ToastType.Error
          ? 'Failed'
          : 'Warning'),
    });
  }
}
