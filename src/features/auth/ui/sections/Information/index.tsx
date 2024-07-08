import { useCallback, useState } from 'react'
import { z } from 'zod'
import { useAtomValue, useSetAtom } from 'jotai'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { profileAtom, tokenAtom } from 'core/atoms/auth'
import { Button, Checkbox, Container, Text } from 'core/components'
import { updateNewUser } from 'features/auth/apis'
import { userInformationSchema } from 'features/auth/schemas'
import { UserProfileParams } from 'features/auth/types'
import Toast, { ToastType } from 'core/helpers/toast'
import { getAxiosError } from 'core/helpers/axios'
import { ControlledInput } from 'core/components/Input/ControlledInput'
import { DropDown } from 'core/components/Input/DropDown'
import { FormInputItem } from 'core/schemas/form.schemas'
import { userIdAtom } from 'core/atoms/auth'

const kindOption: FormInputItem[] = [
  { name: 'Parent', id: '1' },
  { name: 'Therapist', id: '2' },
]

export default function InformationSection() {
  const token = useAtomValue(tokenAtom)
  const setProfile = useSetAtom(profileAtom)
  const setUserId = useSetAtom(userIdAtom)
  const {
    control,
    handleSubmit: onSubmit,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof userInformationSchema>>({
    resolver: zodResolver(userInformationSchema),
  })
  const [terms, setTerms] = useState(true)

  const handleSubmit = async (params: UserProfileParams) => {
    try {
      if (token) {
        console.log('this is run')
        /**
         * TODO: we have backend issue: profile created without kind in login stage
         */
        console.log('params', params)
        console.log(token.access)
        const res = await updateNewUser(params, token.access)
        console.log(res)
        setProfile(params)
      }
    } catch (e) {
      console.log(e)
      Toast.show(getAxiosError(e as Error), ToastType.Error)
    }
  }

  return (
    <Container gap={10} width={'74%'}>
      <ControlledInput control={control} name="first_name" placeholder="First Name" />

      <ControlledInput control={control} name="last_name" placeholder="Last Name" />

      <Controller
        control={control}
        name="kind"
        render={({ field: controller, fieldState }) => (
          <DropDown
            placeholder="Are you parent or therapist?"
            error={fieldState.error?.message}
            items={kindOption ?? []}
            value={(controller.value as FormInputItem) ?? undefined}
            onChange={controller.onChange}
            itemToString={item => item?.name ?? ''}
          />
        )}
      />

      <Button isLoading={isSubmitting} onPress={onSubmit(handleSubmit)} label="Submit" mt="10px" />
    </Container>
  )
}
