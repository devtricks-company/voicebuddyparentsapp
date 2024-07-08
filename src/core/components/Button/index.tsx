import {TouchableProps} from '../Touchable';
import {Text, TextProps} from '../Text';
import {Icon, IconName} from '../Icon';
import {IconProps} from '../Icon/BaseIcon';
import {Colors} from 'core/styles/colors';
import {StyledButton, StyledIndicator} from './styles';

export type ButtonProps = Omit<TouchableProps, 'size'> & {
  label?: string;
  variant?: 'text' | 'contained' | 'outlined';
  color?: keyof Colors | string;
  isLoading?: boolean;
  icon?: IconName;
  _icon?: Partial<IconProps>;
  isSmall?: boolean;
  _text?: TextProps;
};

export function Button(props: ButtonProps) {
  const {
    label,
    variant = 'contained',
    color = 'primary',
    flexDirection = 'row',
    isLoading,
    children,
    _text,
    icon,
    _icon,
    ...rest
  } = props;
  const elementColor = variant === 'contained' ? 'light' : color;
  const borderProps =
    variant === 'contained'
      ? {
          borderBottomWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderColor:
            color === 'primary'
              ? 'darkPrimary'
              : color === 'secondary'
              ? 'darkSecondary'
              : undefined,
        }
      : {};
  return (
    <StyledButton
      variant={variant}
      opacity={rest.disabled ? 0.7 : 1}
      color={color}
      {...borderProps}
      flexDirection={flexDirection}
      {...rest}>
      {isLoading ? (
        <StyledIndicator color={elementColor} />
      ) : (
        children ?? (
          <>
            {icon ? (
              <Icon
                name={icon}
                width={20}
                fill={elementColor}
                height={20}
                {..._icon}
              />
            ) : null}
            <Text font="normal" color={elementColor} size="xr" {..._text}>
              {label}
            </Text>
          </>
        )
      )}
    </StyledButton>
  );
}
