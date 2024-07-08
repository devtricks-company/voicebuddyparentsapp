import { QueryClient } from '@tanstack/react-query'
import { queryClientAtom } from 'jotai-tanstack-query'
import { useHydrateAtoms } from 'jotai/react/utils'

type HydrateAtomsProps = {
  children: JSX.Element
}

export const queryClient = new QueryClient()

export function HaydreateAtoms({ children }: HydrateAtomsProps) {
  useHydrateAtoms([[queryClientAtom, queryClient]])
  return children
}
