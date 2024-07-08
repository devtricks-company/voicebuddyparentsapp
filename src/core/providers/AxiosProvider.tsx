import {useAtomValue} from 'jotai';
import {setupAxiosAtom} from 'core/atoms/axios';

export function AxiosProvider({children}: {children: JSX.Element}) {
  const axios = useAtomValue(setupAxiosAtom);
  if (axios) return children;
  return null;
}
