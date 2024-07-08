import React from 'react';
import Animated from 'react-native-reanimated';

export function AnimationFactory<T extends object>(
  Component: React.ComponentType<T>,
) {
  return Animated.createAnimatedComponent(
    class extends React.Component<T> {
      render() {
        return <Component {...this.props} />;
      }
    },
  );
}
