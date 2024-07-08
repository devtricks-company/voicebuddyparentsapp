import {Button, Container, Text} from 'core/components';
import {BaseIcon} from 'core/components/Icon/BaseIcon';
import Modal from 'react-native-modal';
import {InformationCircleIcon} from 'react-native-heroicons/outline';
type KidModalProps = {
  status: 'success' | 'fail';
  title: string;
  description: string;
  open: boolean;
  onClose?: () => void;
};
export function KidModal({
  status,
  title,
  description,
  open,
  onClose,
}: KidModalProps) {
  return (
    <Modal isVisible={open} hideModalContentWhileAnimating>
      <Container flex={1} justifyContent={'center'} alignItems={'center'}>
        <Container
          backgroundColor="#fff"
          width={'90%'}
          height={'30%'}
          borderRadius={15}
          justifyContent={'center'}
          alignItems={'center'}>
          {status === 'success' ? (
            <BaseIcon name="success" />
          ) : (
            <InformationCircleIcon color={'red'} size={35} />
          )}

          <Text fontSize={16} color="#000" fontWeight={'bold'} mt={2}>
            {title}
          </Text>
          <Text mt={2} fontSize={14} fontWeight={400}>
            {description}
          </Text>
          <Button
            label={status === 'success' ? "Kid's List" : 'Close'}
            mt={4}
            width={'80%'}
            onPress={onClose}
          />
        </Container>
      </Container>
    </Modal>
  );
}
