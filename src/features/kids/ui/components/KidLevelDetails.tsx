import { Container } from 'core/components'
import { Text } from 'react-native'
import { CubeIcon } from 'react-native-heroicons/outline'
import { useSetAtom, useAtomValue, useAtom } from 'jotai'
import { getLevelDetailsAtom, kidIdAtom, selectdLevelAtom } from 'features/kids/atoms/subscription'

export function KidLevelDetails() {
  const kidId = useAtomValue(kidIdAtom)

  const [{ data, isPending, isError, error }] = useAtom(getLevelDetailsAtom)

  return (
    <Container mt={45} border={'3px solid #FFF'} borderRadius={15} padding={20}>
      <Container>
        <Container flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Container flexDirection={'row'} alignItems={'center'}>
            <CubeIcon color="#666" />
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              Number Of Steps
            </Text>
          </Container>
          <Container>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              {data?.total_number_steps}
            </Text>
          </Container>
        </Container>
        <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
      </Container>
      <Container mt={3}>
        <Container flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Container flexDirection={'row'} alignItems={'center'}>
            <CubeIcon color="#666" />
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              Number of occurrence
            </Text>
          </Container>
          <Container>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              {data?.play_level_occurrence}
            </Text>
          </Container>
        </Container>
        <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
      </Container>
      <Container mt={3}>
        <Container flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Container flexDirection={'row'} alignItems={'center'}>
            <CubeIcon color="#666" />
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              Total spent time in level
            </Text>
          </Container>
          <Container>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              {data?.total_level_time.toFixed(2)} S
            </Text>
          </Container>
        </Container>
        <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
      </Container>
      <Container mt={3}>
        <Container flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Container flexDirection={'row'} alignItems={'center'}>
            <CubeIcon color="#666" />
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              Total number mistake
            </Text>
          </Container>
          <Container>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              {data?.total_number_mistakes}
            </Text>
          </Container>
        </Container>
        <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
      </Container>
      <Container mt={3}>
        <Container flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Container flexDirection={'row'} alignItems={'center'}>
            <CubeIcon color="#666" />
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              Score
            </Text>
          </Container>
          <Container>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 15,
                fontWeight: '400',
                color: '#666',
                marginLeft: 10,
              }}>
              {data?.score}
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
