import {Text} from '../../Text';
import {Badge} from '../../Badge';
import {Colors} from 'core/styles/colors';
import {HStack} from '../../Container/HStack';
import {Touchable} from '../../Touchable';
import {BaseContainer, ContainerProps} from '../BaseContainer';
import * as Styled from './styles';

export type BoxProps = ContainerProps & {
  title: string | JSX.Element;
  badge?: string;
  icon?: JSX.Element;
  badgeVariant?: keyof Colors;
  opacity?: number;
  subTitle?: string;
  onBadgePress?: () => void;
};

export function Box(props: BoxProps) {
  const {
    title,
    badge,
    children,
    badgeVariant,
    opacity,
    icon,
    subTitle,
    onBadgePress,
    ...rest
  } = props;
  return (
    <Styled.Container width="100%" {...rest}>
      <Styled.HeaderContainer>
        <HStack center flex={1}>
          {icon}
          <BaseContainer flex={1}>
            <Text color="label" font="normal">
              {title}
            </Text>
            {subTitle && <Text color="text">{subTitle}</Text>}
          </BaseContainer>
        </HStack>
        {badge && (
          <Touchable onPress={onBadgePress}>
            <Badge label={badge} opacity={opacity} variant={badgeVariant} />
          </Touchable>
        )}
      </Styled.HeaderContainer>
      <BaseContainer p="10px">{children}</BaseContainer>
    </Styled.Container>
  );
}
