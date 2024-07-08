import { RouteProp, useRoute } from '@react-navigation/native'
import { AppRoutes, AppRoutesParams } from 'app/navigators/types'
import { Container } from 'core/components'
import { DropDown } from 'core/components/Input/DropDown'
import { FormInputItem } from 'core/schemas/form.schemas'
import { getLevelsAtom, kidIdAtom, selectdLevelAtom } from 'features/kids/atoms/subscription'
import { useAtom, useSetAtom } from 'jotai'
import { useState } from 'react'
import { Text } from 'react-native'
import { CubeIcon } from 'react-native-heroicons/outline'
import { KidLevelDetails } from '../../components/KidLevelDetails'

export function KidDetails() {
  const route = useRoute<RouteProp<AppRoutesParams, AppRoutes.KIDDETAILS>>()
  const params = route.params
  const setkidIdAtom = useSetAtom(kidIdAtom)
  const setLevelIdAtom = useSetAtom(selectdLevelAtom)

  setkidIdAtom(params.kidId)
  const [{ data, isError, isPending }] = useAtom(getLevelsAtom)
  const [level, setLevel] = useState<{ id: string; name: string } | undefined>(undefined)

  const LevelOption: FormInputItem[] = data!
  return (
    <Container flex={1} backgroundColor="#F3F3F3" alignItems={'center'}>
      <Container mt={30} width={'80%'}>
        <DropDown
          placeholder="Selected Level"
          value={level}
          items={LevelOption ?? []}
          onChange={e => {
            setLevel({
              id: e?.id as string,
              name: `Selected Level                                      ${e?.name!}`,
            })
            setLevelIdAtom(Number(e?.id))
          }}
          itemToString={item => item?.name ?? ''}
          backgroundColor="#A55BDE"
          placeholderTextColor="#FFF"
          color="#FFF"
        />

        <KidLevelDetails />
      </Container>
    </Container>
  )
}
