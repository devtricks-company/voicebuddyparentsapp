import {BaseContainer} from '../../Container/BaseContainer';
import {Icon, IconName} from '../../Icon';
import {Text, TextProps} from '../../Text';
import {Touchable, TouchableProps} from '../../Touchable';
import {Colors} from 'core/styles/colors';
import {IconProps} from '../../Icon/BaseIcon';

export type ListItemProps = TouchableProps & {
  title: string;
  _title?: TextProps;
  description?: string;
  _description?: TextProps;
  icon?: IconName;
  _icon?: Partial<IconProps>;
  iconColor?: keyof Colors;
  reverse?: boolean;
  arrow?: boolean;
  rightContent?: JSX.Element;
  subtitle?: string;
  _subtitle?: TextProps;
};

export function Item(props: ListItemProps) {
  const {
    title,
    _title,
    description,
    _description,
    reverse,
    arrow = true,
    icon,
    _icon,
    iconColor,
    rightContent,
    subtitle,
    _subtitle,
    onPress,
    disabled,
    ...rest
  } = props;

  return (
    <Touchable
      flexDirection="row"
      my="10px"
      alignItems="center"
      disabled={!onPress || disabled}
      onPress={onPress}
      justifyContent="space-between"
      {...rest}>
      {icon && (
        <BaseContainer
          width="40px"
          height="40px"
          alignItems="center"
          justifyContent="center"
          borderRadius="40px"
          backgroundColor={`${(iconColor ?? 'list.item.icon') as string}:10`}>
          <Icon
            width={15}
            fill={iconColor ?? 'list.item.icon'}
            height={15}
            name={icon}
            {..._icon}
          />
        </BaseContainer>
      )}
      <BaseContainer
        flex={1}
        flexDirection={reverse ? 'column-reverse' : 'column'}
        m="10px"
        justifyContent="center">
        <Text color={disabled ? 'text' : 'label'} font="normal" {..._title}>
          {title}
        </Text>
        {description ? (
          <Text
            numberOfLines={1}
            my="3.5px"
            size="s"
            color={disabled ? 'text' : undefined}
            {..._description}>
            {description}
          </Text>
        ) : null}
        {subtitle && (
          <Text my="2.5px" size="xs" {..._subtitle}>
            {subtitle}
          </Text>
        )}
      </BaseContainer>
      {rightContent}
      {arrow && <Icon name="arrow-left" />}
    </Touchable>
  );
}
