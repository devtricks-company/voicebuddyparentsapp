import {FlexboxProps} from 'styled-system';
import {StyledModal} from './styles';

export type ModalProps = FlexboxProps & {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
};

export function Modal(props: ModalProps) {
  const {open, onClose, children, ...rest} = props;

  return (
    <StyledModal
      isVisible={open}
      onBackButtonPress={onClose}
      useNativeDriver
      animationOutTiming={300}
      useNativeDriverForBackdrop
      onBackdropPress={onClose}
      hideModalContentWhileAnimating
      onDismiss={onClose}
      {...rest}>
      {children}
    </StyledModal>
  );
}
