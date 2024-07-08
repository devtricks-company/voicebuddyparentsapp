import {Dimensions, ScrollView} from 'react-native';
import {Container} from '../Container';
import {List} from '../List';
import {ModalComponentProps, ModalStacks} from 'core/providers/ModalProvider';

export function Picker(props: ModalComponentProps<ModalStacks.Picker>) {
  const {
    modal: {closeModal, getParam},
  } = props;
  const items = getParam('items');
  const onSelect = getParam('onSelect');

  return (
    <Container
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      pb="20px"
      width={Dimensions.get('window').width}
      bg="container.bg">
      <ScrollView contentContainerStyle={{padding: 20}}>
        {items?.map(item => (
          <List.Item
            key={item.id}
            title={item.title}
            icon={item.icon}
            onPress={() => {
              closeModal(ModalStacks.Picker, () => {
                onSelect(item);
              });
            }}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
