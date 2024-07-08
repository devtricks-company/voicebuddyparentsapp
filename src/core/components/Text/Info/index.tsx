import {HStack} from '../../Container/HStack';
import {ContainerProps} from '../../Container';
import {BaseText, TextProps} from '../BaseText';

type Info = ContainerProps & {
  label: string;
  value: string;
  _label?: TextProps;
  _value?: TextProps;
};

export function Info(props: Info) {
  const {label, value, _label, _value, ...rest} = props;
  return (
    <HStack my="5px" centerSpace {...rest}>
      <BaseText flex={1.5} {..._label}>
        {label}
      </BaseText>
      <BaseText
        textAlign="right"
        flex={2}
        font="normal"
        color="label"
        {..._value}>
        {value}
      </BaseText>
    </HStack>
  );
}
