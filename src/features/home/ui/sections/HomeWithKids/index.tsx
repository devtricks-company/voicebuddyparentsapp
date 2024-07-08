import { useNavigation } from '@react-navigation/native'
import { AppRoutes, Navigation } from 'app/navigators/types'
import { Button, Container, Icon } from 'core/components'
import { Kid } from 'features/kids/types/kids.types'
import { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ChevronDownIcon, ChevronUpIcon, CubeIcon } from 'react-native-heroicons/outline'

type KidCardProps = {
  kid: Kid
}

export function KidsCard({ kid }: KidCardProps) {
  const navigation = useNavigation<Navigation>()
  const [open, setOpen] = useState<boolean>(false)
  const openHandle = () => {
    setOpen(!open)
  }
  return (
    <Container alignItems={'center'} backgroundColor="#F3F3F3" pt={20}>
      <Container width={'90%'} backgroundColor="#FFF" minHeight={100} borderRadius={15} p={25}>
        <Container flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <TouchableOpacity onPress={openHandle}>
            <Container flexDirection={'row'}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21,
                  marginRight: 10,
                }}>
                {kid.profile.first_name} {kid.profile.last_name}
              </Text>
              {open ? <ChevronUpIcon color={'#000'} /> : <ChevronDownIcon color={'#000'} />}
            </Container>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ellipsis" color={'#000'} width={30} height={30} />
          </TouchableOpacity>
        </Container>
        <Container>
          <Container mt={15} width={'100%'} height={10} backgroundColor="#D9D9D9" borderRadius={10}>
            <Container
              width={kid.statistics.progress}
              backgroundColor="#FF8E34"
              height={10}
              borderRadius={10}></Container>
          </Container>
        </Container>
        {open ? (
          <Container mt={45}>
            <Container>
              <Container
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
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
                    Progress
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
                    {kid.statistics.progress} %
                  </Text>
                </Container>
              </Container>
              <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
            </Container>
            <Container mt={3}>
              <Container
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
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
                    Current Level
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
                    {kid.statistics.max_level}
                  </Text>
                </Container>
              </Container>
              <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
            </Container>
            <Container mt={3}>
              <Container
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
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
                    Remaining Level
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
                    {kid.statistics.remain_levels}
                  </Text>
                </Container>
              </Container>
              <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
            </Container>
            <Container mt={3}>
              <Container
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
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
                    Total Time Spent
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
                    {kid.statistics.durations} s
                  </Text>
                </Container>
              </Container>
              <Container backgroundColor="#e5e5e5" height={1} width={'100%'} mt={3} />
            </Container>
            <Container mt={3}>
              <Container
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
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
                    Total Score
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
                    {kid.statistics.level_scores}
                  </Text>
                </Container>
              </Container>
            </Container>

            <Container mt={4} flexDirection={'row'} justifyContent={'space-around'}>
              <Button
                width={'60%'}
                label="Details"
                onPress={() => {
                  navigation.navigate(AppRoutes.KIDDETAILS, {
                    fullName: kid.profile.first_name + ' ' + kid.profile.last_name,
                    kidId: kid.id,
                  })
                }}
              />
              <Button width={'30%'} label="Chart" variant="outlined" color="#000" />
            </Container>
          </Container>
        ) : null}
      </Container>
    </Container>
  )
}
