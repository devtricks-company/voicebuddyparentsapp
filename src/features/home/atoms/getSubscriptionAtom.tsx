import { atomWithQuery } from 'jotai-tanstack-query'
import { getSubcriptions } from '../apis'
import { userIdAtom } from 'core/atoms/auth'
import { keepPreviousData } from '@tanstack/query-core'

export const getSubscriptionsAtom = atomWithQuery(get => ({
  queryKey: ['subcriptions', get(userIdAtom)],
  queryFn: async ({ queryKey: [, id] }) => await getSubcriptions(id as number),
  placeholderData: keepPreviousData,
}))
