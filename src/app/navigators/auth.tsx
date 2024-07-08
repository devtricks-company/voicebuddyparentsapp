import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { withScreenOptions } from 'core/helpers/hoc'
import { AppRoutes, AuthRoutes, AuthRoutesParams } from './types'
import { AuthScreen } from 'features/auth/ui/screens/AuthScreen'
import { TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { useAtom } from 'jotai'
import { authStageAtom } from 'core/atoms'
import { AuthStage } from 'core/types'

const { Navigator: N, Screen } = createNativeStackNavigator<AuthRoutesParams>()
const Navigator = withScreenOptions(N)

export function AuthNavigator() {
  const [authStage, setAuthStage] = useAtom(authStageAtom)
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#F3F3F3' },
        headerShadowVisible: false,
      }}>
      <Screen
        name={AuthRoutes.SignIn}
        component={AuthScreen}
        options={({ navigation }) => ({
          headerShown: authStage === AuthStage.Verification,
          headerTitle: '',
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setAuthStage(AuthStage.SingIn)
                  navigation.navigate(AuthRoutes.SignIn)
                }}>
                <ArrowLeftIcon color={'#222'} size={28} />
              </TouchableOpacity>
            )
          },
        })}
      />
    </Navigator>
  )
}
