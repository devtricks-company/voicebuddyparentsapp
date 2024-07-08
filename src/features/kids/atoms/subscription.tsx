import { atomWithMutation, atomWithQuery, queryClientAtom } from 'jotai-tanstack-query'
import { getLevelDetails, kidLevels, kidSubscription } from '../apis'
import { AxiosError } from 'axios'
import { BaseResponse } from 'core/types/axios'
import { atom } from 'jotai'
import { number } from 'zod'
import { queryClient } from 'core/atoms'

export const kidIdAtom = atom<number | null>(null)
export const selectdLevelAtom = atom<number | null>(null)

export const subscriptionAtom = atomWithMutation(() => ({
  mutationKey: ['subscription'],
  mutationFn: async (uuid: string) => await kidSubscription(uuid),

  onSuccess: (data: BaseResponse, variables: string, context: unknown) => {},
  onError: (error: AxiosError, variables: string, context: unknown) => {
    console.log('eeeeeeeeee', variables)
  },
}))

export const getLevelsAtom = atomWithQuery(get => ({
  queryKey: ['levels', get(kidIdAtom)],
  queryFn: async ({ queryKey: [, id] }) => await kidLevels(Number(id)),
}))

export const getLevelDetailsAtom = atomWithQuery(get => ({
  queryKey: ['levels_details', get(selectdLevelAtom), get(kidIdAtom)],
  queryFn: async ({ queryKey: [, playerId, level] }) =>
    await getLevelDetails(playerId as number, level as number),
}))
