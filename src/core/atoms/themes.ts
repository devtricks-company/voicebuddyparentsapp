import {atomWithStorage} from 'jotai/utils';
import {createAtomStorage} from '../helpers';

export const themeAtom = atomWithStorage<'dark' | 'light'>(
  'theme',
  'light',
  createAtomStorage(),
);
