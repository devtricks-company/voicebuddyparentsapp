import {Dimensions} from 'react-native';
import {Container} from '../Container';
import {Text} from '../Text';
import {Touchable} from '../Touchable';
// import { Icon } from '../Icon'
import {Divider} from '../Layout/Divider';
import {ModalComponentProps, ModalStacks} from 'core/providers/ModalProvider';

export function Sheet(props: ModalComponentProps<ModalStacks.Sheet>) {
  const {
    modal: {closeModal, getParam},
  } = props;
  const title = getParam('title');
  const content = getParam('content');
  const subtitle = getParam('subtitle');
  return (
    <Container
      gap={15}
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      p="20px"
      pb="30px"
      width={Dimensions.get('window').width}
      backgroundColor="container.bg">
      <Container.HStack centerSpace>
        <Container flex={1}>
          <Text color="label" font="normal" size="xr">
            {title}
          </Text>
          {subtitle ? <Text>{subtitle}</Text> : null}
        </Container>

        <Touchable onPress={() => closeModal(ModalStacks.Sheet)}>
          {/* <Icon width={15} height={15} name="remove" /> */}
        </Touchable>
      </Container.HStack>
      <Divider />
      {content}
    </Container>
  );
}
