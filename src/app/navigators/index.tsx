import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { profileAtom } from 'core/atoms/auth'
import { withScreenOptions } from 'core/helpers/hoc'
import { AxiosProvider } from 'core/providers/AxiosProvider'
import { HomeScreen } from 'features/home/ui/screens/HomeScreen'
import { AddKids } from 'features/kids/ui/screens/AddKids'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import BootSplash from 'react-native-bootsplash'
import { PlusCircleIcon, ArrowLeftIcon } from 'react-native-heroicons/outline'
import { AuthNavigator } from './auth'
import { AppRoutes, AppRoutesParams } from './types'
import { KidDetails } from 'features/kids/ui/screens/kidsDetails'
import { Text, TouchableOpacity } from 'react-native'
import { Container } from 'core/components'

const { Navigator: N, Screen } = createNativeStackNavigator<AppRoutesParams>()
const Navigator = withScreenOptions(N)

const headerStyels = {}
function AuthorizedRoutes() {
  const profile = useAtomValue(profileAtom)
  return (
    <AxiosProvider>
      <Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#F3F3F3' },
          headerShadowVisible: false,
        }}>
        <Screen
          name={AppRoutes.HOME}
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Your Kids',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate(AppRoutes.ADDKID)}>
                <PlusCircleIcon color={'#222'} size={28} />
              </TouchableOpacity>
            ),
          })}
        />
        <Screen
          name={AppRoutes.ADDKID}
          component={AddKids}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Add a Kids',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate(AppRoutes.HOME)}>
                <ArrowLeftIcon color={'#222'} size={28} />
              </TouchableOpacity>
            ),
          })}
        />
        <Screen
          name={AppRoutes.KIDDETAILS}
          component={KidDetails}
          options={({ route, navigation }) => ({
            headerShown: true,
            headerTitle(props) {
              return (
                <>
                  <Container justifyContent={'center'} alignItems={'center'}>
                    <Text style={{ fontWeight: '500', fontSize: 20, color: '#222' }}>
                      {route.params.fullName}
                    </Text>
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 14,
                        lineHeight: 20,
                        color: '#999',
                      }}>
                      Level Detailed Report
                    </Text>
                  </Container>
                </>
              )
            },

            headerLeft: () => (
              <ArrowLeftIcon
                color={'#222'}
                size={28}
                onPress={() => navigation.navigate(AppRoutes.HOME)}
              />
            ),
          })}
        />
      </Navigator>
    </AxiosProvider>
  )
}

export default () => {
  const profile = useAtomValue(profileAtom)

  useEffect(() => {
    console.log('profile', profile)
  }, [profile])

  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <Navigator>
        {profile ? (
          <Screen name={AppRoutes.Authorized} component={AuthorizedRoutes} />
        ) : (
          <Screen name={AppRoutes.Unauthorized} component={AuthNavigator} />
        )}
      </Navigator>
    </NavigationContainer>
  )
}
