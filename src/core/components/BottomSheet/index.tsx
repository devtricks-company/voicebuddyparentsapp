import {ScrollView} from 'react-native';
import {Container} from '../Container';
import {List} from '../List';
import {IconName} from '../Icon';
import {StyledModal} from '../Input/DropDown/styles';
import {sleep} from 'core/helpers/tools';

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  hideOnSelect?: boolean;
  onSelect: (item: {title: string; id: number | string}) => void;
  items: Array<{title: string; id: number | string; icon?: IconName}>;
};

export function BottomSheet(props: BottomSheetProps) {
  const {open, onClose, onSelect, hideOnSelect = true, items} = props;

  return (
    <StyledModal
      isVisible={open}
      onBackButtonPress={onClose}
      useNativeDriver
      animationOutTiming={300}
      useNativeDriverForBackdrop
      onBackdropPress={onClose}
      hideModalContentWhileAnimating
      onDismiss={onClose}>
      <Container
        borderRadius="20px"
        pb="20px"
        maxHeight="50%"
        width="100%"
        backgroundColor="container.bg">
        <ScrollView contentContainerStyle={{padding: 20}}>
          {items.map(item => (
            <List.Item
              key={item.id}
              title={item.title}
              icon={item.icon}
              onPress={async () => {
                if (hideOnSelect) {
                  onClose();
                  await sleep(800);
                }
                onSelect(item);
              }}
            />
          ))}
        </ScrollView>
      </Container>
    </StyledModal>
  );
}
