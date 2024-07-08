import {BaseContainer, ContainerProps} from '../Container/BaseContainer';
import {Text} from '../Text';
import {Colors} from 'core/styles/colors';
import {FontSize} from 'core/styles/fontSizes';

export type BadgeProps = ContainerProps & {
  label: string;
  variant?: keyof Colors;
  element?: JSX.Element | null;
  fontSize?: FontSize;
  opacity?: number;
};

export function Badge(props: BadgeProps) {
  const {
    variant = 'primary',
    fontSize = 'xs',
    opacity = 15,
    element = null,
    label,
    ...rest
  } = props;

  return (
    <BaseContainer
      bg={`${variant}:${opacity}`}
      px="10px"
      py="5px"
      alignItems="center"
      flexDirection="row"
      borderRadius="7px"
      {...rest}>
      <Text
        textAlign="center"
        size={fontSize}
        color={opacity === 100 ? 'light' : variant}
        font="normal">
        {label}
      </Text>
      {element}
    </BaseContainer>
  );
}
