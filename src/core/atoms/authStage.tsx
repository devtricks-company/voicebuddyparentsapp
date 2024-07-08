import {BackHandler} from 'react-native';
import {atom} from 'jotai';
import {AuthStage} from '../types';

export const BACK_PRESS = Symbol();

export const baseAuthStageAtom = atom(AuthStage.SingIn);

export const authStageAtom = atom(
  get => get(baseAuthStageAtom),
  (get, set, arg: AuthStage | typeof BACK_PRESS) => {
    if (arg === BACK_PRESS) {
      switch (get(baseAuthStageAtom)) {
        case AuthStage.Verification:
          set(baseAuthStageAtom, AuthStage.SingIn);
          break;
        default:
          BackHandler.exitApp();
      }
    } else {
      set(baseAuthStageAtom, arg);
    }
  },
);
