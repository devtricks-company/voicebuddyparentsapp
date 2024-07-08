import {BaseContainer} from '../Container/BaseContainer';
import {BaseText} from '../Text/BaseText';
import {Touchable} from '../Touchable';

type Item = {id: string | number; title: string};

export type SwitchProps = {
  items: Array<Item>;
  value: Item;
  onChange: (item: Item) => void;
};

export function Switch(props: SwitchProps) {
  const {items, value, onChange} = props;
  return (
    <BaseContainer
      flexDirection="row"
      borderColor="border"
      borderWidth="1px"
      p="3px"
      borderRadius="20px">
      {items.map(i => (
        <Touchable
          px="10px"
          py="7.5px"
          borderRadius="20px"
          key={i.id}
          onPress={() => onChange(i)}
          backgroundColor={value.id === i.id ? 'primary' : 'transparent'}>
          <BaseText
            font="normal"
            size="s"
            color={value.id === i.id ? 'light' : 'label'}>
            {i.title}
          </BaseText>
        </Touchable>
      ))}
    </BaseContainer>
  );
}
