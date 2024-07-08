import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSetAtom, useAtom, useAtomValue } from 'jotai'
import { Container, Input } from 'core/components'
import { Button } from 'core/components/Button'
import { TextInput } from 'react-native'
import { authStageAtom } from 'core/atoms'
import { tempUserAtom, authorizingUserEmailAtom } from 'features/auth/atoms/auth'
import { AuthStage } from 'core/types'
import { getAxiosError, AxiosError } from 'core/helpers/axios'
import Toast, { ToastType } from 'core/helpers/toast'
import { login } from 'features/auth/apis'
import { tokenAtom } from 'core/atoms/auth'

const formSchema = z.object({
  email: z.string().email({ message: 'Email is invalid' }),
})

export function SingIn() {
  const setAuthStage = useSetAtom(authStageAtom)
  const setUserEmail = useSetAtom(authorizingUserEmailAtom)
  const [, setTempUser] = useAtom(tempUserAtom)
  const token = useAtomValue(tokenAtom)

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = useCallback(
    async (form: z.infer<typeof formSchema>) => {
      try {
        const response = await login(form.email)

        if (response) {
          setTempUser({ email: form.email })
          setUserEmail(response.data.email)
          setAuthStage(AuthStage.Verification)
        }
      } catch (e) {
        Toast.show(getAxiosError(e as Error | AxiosError), ToastType.Error)
      }
    },
    [setAuthStage, setTempUser, setUserEmail],
  )

  return (
    <Container gap={20} width={'74%'}>
      <Input.EmailInput
        control={control}
        name="email"
        error={errors.email?.message}
        placeholder="Email"
        style={{ borderColor: '#FFF', borderWidth: 0 }}
      />

      <Button
        label="Submit"
        onPress={onSubmit(handleSubmit)}
        disabled={false}
        backgroundColor="#8F32D6"
        isLoading={isSubmitting}
      />
    </Container>
  )
}
