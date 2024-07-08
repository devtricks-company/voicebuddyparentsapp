import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userIdAtom } from 'core/atoms/auth'
import { kidSubscription } from 'features/kids/apis'
import { useAtomValue } from 'jotai'

export function useSubscriptionMutation() {
  const userId = useAtomValue(userIdAtom)
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['subscription'],
    mutationFn: async (uuid: string) => await kidSubscription(uuid),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['subscriptions'],
      })
    },
    onError: error => {
      console.log('errrrrrooooooor', error)
    },
  })
}
