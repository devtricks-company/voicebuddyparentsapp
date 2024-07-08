import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum AppRoutes {
  Unauthorized = 'unauthorized',
  Authorized = 'authorized',
  HOME = 'home',
  ADDKID = 'addkid',
  KIDDETAILS = 'kiddetails',
}

export type AppRoutesParams = {
  [AppRoutes.Unauthorized]: undefined
  [AppRoutes.Authorized]: undefined
  [AppRoutes.HOME]: undefined
  [AppRoutes.ADDKID]: undefined
  [AppRoutes.KIDDETAILS]: {
    fullName: string
    kidId: number
  }
}

export enum AuthRoutes {
  SignIn = 'signin',
  EmailVerification = 'emailVerfication',
}

export type AuthRoutesParams = {
  [AuthRoutes.SignIn]: undefined
  [AuthRoutes.EmailVerification]: undefined
}

export type Navigation<T extends 'auth' | 'home' | undefined = undefined> =
  NativeStackNavigationProp<T extends 'auth' ? AuthRoutesParams : AppRoutesParams>
