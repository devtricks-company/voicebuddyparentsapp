import {atom} from 'jotai';
import {authStageAtom, BACK_PRESS} from 'core/atoms';
import {BackHandler} from 'react-native';

export const authorizingUserEmailAtom = atom<string | undefined>(undefined);
export const tempUserAtom = atom<{email: string; token?: string} | null>(null);

authStageAtom.onMount = set => {
  const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    set(BACK_PRESS);
    return true;
  });
  return () => backHandler.remove();
};
