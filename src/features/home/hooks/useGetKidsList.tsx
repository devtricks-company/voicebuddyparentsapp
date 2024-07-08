import { useAtom, useAtomValue } from 'jotai'
import { getSubscriptionsAtom } from '../atoms/getSubscriptionAtom'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getSubcriptions } from '../apis'
import { userIdAtom } from 'core/atoms/auth'
import { useEffect } from 'react'
export function useKidsList(parentId: number) {
  return useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => await getSubcriptions(parentId),
    placeholderData: keepPreviousData,
  })
}
