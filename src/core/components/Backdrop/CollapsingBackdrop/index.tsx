import {createContext} from 'react';
import {OnScroll} from 'react-native-reanimated';
import {useCollapseAnimation} from '../../../hooks/useCollapseAnimation';
import {BaseContainer} from '../../Container/BaseContainer';
import {AnimationFactory} from 'core/helpers/animations';
import {HStack} from '../../Container/HStack';
import {Container} from '../../Container';
import {Information} from '../Information';
import {StyledTitle} from '../SimpleBackdrop/styles';
import {BackIconButton} from '../Icons/BackIcon';
import {BackdropProps, headerHeights} from '../types';

const {Consumer, Provider} = createContext<
  {handleScroll: OnScroll} | undefined
>(undefined);

export const Collapse = Consumer;

const AnimatedInformation = AnimationFactory(Information);

const AnimatedText = AnimationFactory(StyledTitle);

const AnimatedHeader = AnimationFactory(BaseContainer);

export function CollapsingBackdrop(
  props: BackdropProps & {title: string; caption: string; hideBack?: boolean},
) {
  const {
    rightIcon,
    headerSize,
    title,
    caption,
    hideBack,
    children,
    _content,
    ...rest
  } = props;
  const {headerStyle, opacityStyle, reverseOpacityStyle, handleScroll} =
    useCollapseAnimation();
  return (
    <BaseContainer flex={1} backgroundColor="container.overlay">
      <AnimatedHeader
        px="20px"
        pt="5px"
        pb="10px"
        justifyContent="space-between"
        backgroundColor="transparent"
        height={headerHeights[headerSize ?? 'xxl']}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        style={headerStyle}
        {...rest}>
        <HStack centerSpace>
          <Container opacity={hideBack ? 0 : 1}>
            <BackIconButton backgroundColor="transparent" />
          </Container>
          <AnimatedText
            style={opacityStyle}
            size="xr"
            font="normal"
            color="light">
            {title}
          </AnimatedText>
        </HStack>
        <AnimatedInformation
          style={reverseOpacityStyle}
          title={title}
          caption={caption}
        />
        {rightIcon}
      </AnimatedHeader>
      <BaseContainer backgroundColor="container.bg" flex={1} {..._content}>
        <Provider value={{handleScroll}}>{children}</Provider>
      </BaseContainer>
    </BaseContainer>
  );
}
