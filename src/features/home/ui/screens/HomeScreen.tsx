import { Text } from 'core/components/Text'
import { getSubscriptionsAtom } from 'features/home/atoms/getSubscriptionAtom'
import { homeAtom } from 'features/home/atoms/homeAtom'
import { useAtom, useAtomValue } from 'jotai'
import { KidsCard } from '../sections/HomeWithKids'
import HomeWithoutKids from '../sections/HomeWithoutKids'
import { useEffect } from 'react'
import { KidsList } from '../sections/KidsList'
import { View } from 'react-native'
import { Container } from 'core/components'
import { userIdAtom } from 'core/atoms/auth'
import { useKidsList } from 'features/home/hooks/useGetKidsList'
import { HomeContainer } from 'features/home/component/HomeContainer'
export function HomeScreen() {
  const parentId = useAtomValue(userIdAtom)
  return <>{parentId && <HomeContainer parentId={parentId} />}</>
}
