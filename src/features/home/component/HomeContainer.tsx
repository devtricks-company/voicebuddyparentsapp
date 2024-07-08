import { Text } from 'react-native'
import { useKidsList } from '../hooks/useGetKidsList'
import { Container } from 'core/components'
import HomeWithoutKids from '../ui/sections/HomeWithoutKids'
import { KidsList } from '../ui/sections/KidsList'

type HomeContainerProps = {
  parentId: number
}
export function HomeContainer({ parentId }: HomeContainerProps) {
  const { data, isPending, isError, error, refetch } = useKidsList(parentId)

  if (isPending) {
    return <Text>Loading...</Text>
  }

  if (isError) return <Text>{error.message}</Text>
  return (
    <Container flex={1} backgroundColor="#F3F3F3">
      {data!.length < 1 ? <HomeWithoutKids /> : <KidsList kids={data} />}
    </Container>
  )
}
