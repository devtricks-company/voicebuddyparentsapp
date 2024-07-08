import {Dimensions, NativeScrollEvent} from 'react-native';
import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {height} = Dimensions.get('screen');
const extended = height * 0.2;
const collapsed = height * 0.07;
const duration = 60;
const configs = {
  inputRange: [0, 140],
  extrapolate: Extrapolate.CLAMP,
};

export function useCollapseAnimation() {
  const scrollPosition = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler(
    ({contentSize, contentOffset}: NativeScrollEvent) => {
      if ((contentSize.height + extended) / height > 1.2)
        scrollPosition.value = withTiming(contentOffset.y, {duration});
    },
  );
  const headerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollPosition.value,
      configs.inputRange,
      [extended, collapsed],
      configs.extrapolate,
    );
    return {height};
  });

  const opacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollPosition.value,
      configs.inputRange,
      [0, 1],
      configs.extrapolate,
    );
    return {opacity};
  });

  const reverseOpacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollPosition.value,
      configs.inputRange,
      [1, 0],
      configs.extrapolate,
    );
    return {opacity};
  });

  return {
    headerStyle,
    opacityStyle,
    reverseOpacityStyle,
    handleScroll,
  };
}
