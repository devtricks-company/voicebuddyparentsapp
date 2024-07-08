import {Dimensions} from 'react-native';
import {Container} from '../Container';
import {Text} from '../Text';
import {Touchable} from '../Touchable';
import {Icon} from '../Icon';
import {Divider} from '../Layout/Divider';
import {Button} from '../Button';
import {ModalComponentProps, ModalStacks} from 'core/providers/ModalProvider';

export function Alert(props: ModalComponentProps<ModalStacks.Alert>) {
  const {
    modal: {closeModal, getParam},
  } = props;
  const title = getParam('title');
  const text = getParam('text');
  const description = getParam('description');
  const onAccept = getParam('onAccept');
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
        <Text color="label" font="normal" size="xr">
          {title}
        </Text>
        <Touchable onPress={() => closeModal(ModalStacks.Alert)}>
          <Icon width={15} height={15} name="arrow-left" />
        </Touchable>
      </Container.HStack>
      <Divider />
      <Text>{description}</Text>
      <Divider />
      <Container.HStack gap={10} centerSpace>
        <Button
          label="Cancel"
          onPress={() => closeModal(ModalStacks.Alert)}
          flex={1}
          variant="outlined"
          color="text"
        />
        <Button
          onPress={() => closeModal(ModalStacks.Alert, () => onAccept())}
          color="error"
          label={text}
          flex={2}
        />
      </Container.HStack>
    </Container>
  );
}
