import { atomWithStorage } from 'jotai/utils'
import { Atom, atom } from 'jotai'
import * as Sentry from '@sentry/react-native'
import { createAtomStorage } from 'core/helpers'
import { TOKEN_KEY, USER_KEY, PROFILE_KEY, USER_ID } from 'core/constants'
import { authStageAtom } from './authStage'
import { IBaseUser, AuthStage, IBaseProfile } from '../types'
import { loadingAtom } from './loading'

const userStorageAtom = atomWithStorage<null | IBaseUser>(USER_KEY, null, createAtomStorage())

export const userAtom = atom(
  get => get(userStorageAtom),
  (get, set, update: IBaseUser | 'singOut' | null) => {
    function clear() {
      set(loadingAtom, true)
      void set(userStorageAtom, null)
      void set(profileAtom, null)
      void set(tokenAtom, null)
      set(loadingAtom, false)
      set(authStageAtom, AuthStage.SingIn)
      Sentry.setUser(null)
    }

    function hydrate(user: IBaseUser) {
      Sentry.setUser({ email: user.email })
    }

    if (!update || update === 'singOut') {
      clear()
    } else {
      set(userStorageAtom, update)
      hydrate(update)
    }
  },
)

export const tokenAtom = atomWithStorage<null | {
  access: string
  refresh?: string
}>(TOKEN_KEY, null, createAtomStorage())
export const profileAtom = atomWithStorage<null | IBaseProfile>(
  PROFILE_KEY,
  null,
  createAtomStorage(),
)

export const userIdAtom = atomWithStorage<null | number>(USER_ID, null, createAtomStorage())
