import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Container, Text } from 'core/components'
import { ControlledInput } from 'core/components/Input/ControlledInput'
import { subscriptionAtom } from 'features/kids/atoms/subscription'
import { addKidCodeSchema } from 'features/kids/schemas'
import { useAtom, useAtomValue } from 'jotai'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { KidModal } from '../../components/Modal'
import { BaseIcon } from 'core/components/Icon/BaseIcon'
import { InformationCircleIcon } from 'react-native-heroicons/outline'
import { useState } from 'react'
import { useSetAtom } from 'jotai'
import { homeAtom } from 'features/home/atoms/homeAtom'
import { useNavigation } from '@react-navigation/native'
import { AppRoutes, Navigation } from 'app/navigators/types'

import { userIdAtom } from 'core/atoms/auth'
import { useQueryClient } from '@tanstack/react-query'
import { useSubscriptionMutation } from 'features/kids/hooks/useSubscriptionMutation'
export function AddKids() {
  const queryClient = useQueryClient()
  const navigation = useNavigation<Navigation>()
  const setHomeAtom = useSetAtom(homeAtom)
  const IdAtom = useAtomValue(userIdAtom)
  const [open, setOpen] = useState<boolean>(false)
  const { mutate, status, error } = useSubscriptionMutation()
  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof addKidCodeSchema>>({
    resolver: zodResolver(addKidCodeSchema),
  })

  const handleSubmit = async (form: z.infer<typeof addKidCodeSchema>) => {
    mutate(form.uuid, {
      onSuccess: () => {
        setOpen(true)
      },
      onError: () => {
        setOpen(true)
      },
    })
  }
  return (
    <Container backgroundColor="#f3f3f3" flex={1} justifyContent={'center'} alignItems={'center'}>
      <Container width={'74%'}>
        <Text font="normal" textAlign="left" fontWeight={400} fontSize={15} color="#222">
          Enter kid's id
        </Text>
        <ControlledInput
          control={control}
          name="uuid"
          placeholder="Sample code xxxx-xxxx-xxxx-xxxx"
          // error={error ? error.message : undefined}
        />

        <Button
          label="Submit"
          isLoading={status === 'pending'}
          onPress={onSubmit(handleSubmit)}
          disabled={status === 'pending'}
          backgroundColor="#8F32D6"
          mt={20}
        />
      </Container>
      <Container height={'70%'}></Container>
      {error ? (
        <KidModal
          open={open}
          title="Failed"
          description={error.message}
          status="fail"
          onClose={() => setOpen(false)}
        />
      ) : (
        <KidModal
          open={open}
          title="Done Successfuly"
          description="Your kid has been added successfuly"
          status="success"
          onClose={() => {
            setOpen(false)
            setHomeAtom(true)
            navigation.navigate(AppRoutes.HOME)
          }}
        />
      )}
    </Container>
  )
}
