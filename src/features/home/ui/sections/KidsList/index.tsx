import { Kid } from 'features/kids/types/kids.types'
import { FlatList, Text } from 'react-native'
import { KidsCard } from '../HomeWithKids'
import { Container } from 'core/components'
import { View } from 'react-native'

type KidsListProps = {
  kids?: Kid[]
}

export function KidsList({ kids }: KidsListProps) {
  console.log('FlatList', kids)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={kids}
        renderItem={({ item }) => {
          console.log('item', item)
          return <KidsCard kid={item} />
        }}
        keyExtractor={kid => String(kid.id)}
      />
    </View>
  )
}
