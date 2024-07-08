import {Touchable} from 'core/components/Touchable';
import {BaseText, TextProps} from 'core/components/Text/BaseText';
import {HStack} from 'core/components/Container/HStack';
import {Text} from 'core/components/Text';
import {ContainerProps} from 'core/components/Container';

export type NumberPickerProps = ContainerProps & {
  value: number;
  onChange: (value: number) => void;
};

const containerProps = {
  backgroundColor: 'primary',
  width: 30,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
};

const textProps: TextProps = {
  color: 'light',
  textAlign: 'center',
  size: 'l',
};

export function NumberPicker(props: NumberPickerProps) {
  const {value, onChange, ...rest} = props;
  return (
    <HStack center {...rest}>
      <Touchable
        onPress={() => value > 0 && onChange(value - 1)}
        {...containerProps}>
        <BaseText {...textProps}>-</BaseText>
      </Touchable>
      <Text mx="15px" color="label" font="normal">
        {value}
      </Text>
      <Touchable onPress={() => onChange(value + 1)} {...containerProps}>
        <BaseText {...textProps}>+</BaseText>
      </Touchable>
    </HStack>
  );
}
