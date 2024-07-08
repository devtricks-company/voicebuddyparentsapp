import { zodResolver } from '@hookform/resolvers/zod'
import { authStageAtom } from 'core/atoms'
import { profileAtom, tokenAtom, userIdAtom } from 'core/atoms/auth'
import { Button, Input, Text } from 'core/components'
import { otp_code_count } from 'core/constants/generals'
import { AxiosError, getAxiosError } from 'core/helpers/axios'
import Toast, { ToastType } from 'core/helpers/toast'
import { sleep } from 'core/helpers/tools'
import { AuthStage } from 'core/types'
import { login, verifyEmail } from 'features/auth/apis'
import { authorizingUserEmailAtom, tempUserAtom } from 'features/auth/atoms/auth'
import { useAtom, useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { useTheme } from 'styled-components'
import { z } from 'zod'

const formSchema = z.object({
  code: z.string({ required_error: 'otp code is required' }),
})

export default function Verification() {
  const [userEmail, setUserEmail] = useAtom(authorizingUserEmailAtom)
  const [, setTempUser] = useAtom(tempUserAtom)
  const setAuthStage = useSetAtom(authStageAtom)
  const setToken = useSetAtom(tokenAtom)
  const setProfile = useSetAtom(profileAtom)
  const setUserId = useSetAtom(userIdAtom)
  const { palette } = useTheme()

  const {
    control,
    handleSubmit: onSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = useCallback(
    async (params: { code: string }) => {
      try {
        if (userEmail) {
          const response = await verifyEmail(userEmail, params.code)
          await sleep(1000)

          setToken({
            access: response.data.access,
            refresh: response.data.refresh,
          })
          if (response.data.profile.first_name) {
            setProfile(response.data.profile)
            setUserId(response.data.id)
            // navigation.navigate(AppRoutes.HOME)
          } else {
            setUserId(response.data.id)
            setAuthStage(AuthStage.Information)
          }
        }
      } catch (e) {
        Toast.show(getAxiosError(e as Error | AxiosError), ToastType.Error)
      }
    },
    [setAuthStage, setToken, setProfile, userEmail],
  )

  const handleResend = useCallback(async () => {
    const response = await login(userEmail!)

    if (response) {
      setTempUser({ email: userEmail! })
      setUserEmail(response.data.email)
    }
    reset()
  }, [setAuthStage, setToken, setProfile, userEmail])
  return (
    <>
      <Controller
        control={control}
        name="code"
        render={({ field: { onChange, value } }) => (
          <Input.CodeInput
            value={value}
            count={otp_code_count}
            // error={errors.otp?.message}
            onChangeText={value => {
              onChange(value)
              if (value.length === otp_code_count) {
                void onSubmit(handleSubmit)()
                Keyboard.dismiss()
              }
            }}
          />
        )}
      />

      {errors.code?.message ? (
        <Text mt="10px" color={palette.error} size="t">
          {errors.code?.message}
        </Text>
      ) : null}

      <Button
        width={'74%'}
        isLoading={isSubmitting}
        onPress={onSubmit(handleSubmit)}
        label="Submit"
        mt="10px"
      />

      <Button width={'74%'} variant="text" onPress={handleResend} label="Resend Code" mt="10px" />
    </>
  )
}
