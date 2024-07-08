import {atom} from 'jotai';
import {RESET} from 'jotai/utils';

export const loadingAtom = atom(false);
export const loadingReason = atom('');

export const loadingWithReason = atom(
  get => get(loadingAtom),
  (get, set, update: {reason: string; state: boolean} | typeof RESET) => {
    if (update !== RESET) {
      set(loadingReason, update.reason);
      set(loadingAtom, update.state);
    } else {
      set(loadingReason, '');
      set(loadingAtom, false);
    }
  },
);
