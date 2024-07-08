import {Touchable, TouchableProps} from '../../Touchable';
import {Colors} from 'core/styles/colors';
import {BaseIcon, IconName} from '../BaseIcon';

export type IconButtonProps = Omit<
  TouchableProps,
  'width' | 'height' | 'borderRadius'
> & {
  name: IconName;
  iconSize?: number;
  size?: number;
  fill?: keyof Colors | string;
};

export function IconButton(props: IconButtonProps) {
  const {
    name,
    size = 40,
    iconSize = 20,
    backgroundColor = 'primary',
    fill = 'light',
    ...rest
  } = props;

  return (
    <Touchable
      width={size}
      backgroundColor={backgroundColor}
      height={size}
      alignItems="center"
      justifyContent="center"
      borderRadius={size}
      {...rest}>
      <BaseIcon name={name} width={iconSize} fill={fill} height={iconSize} />
    </Touchable>
  );
}
