import {FlatList, FlatListProps} from 'react-native';
import Animated from 'react-native-reanimated';
import {Collapse} from '../Backdrop/CollapsingBackdrop';

const common = {showsVerticalScrollIndicator: false};

export function BaseList<T>(props: FlatListProps<T> & {animated?: boolean}) {
  if (props?.animated)
    return (
      <Collapse>
        {value => (
          <Animated.FlatList
            onScroll={value?.handleScroll}
            scrollEventThrottle={25}
            {...common}
            {...props}
          />
        )}
      </Collapse>
    );

  return <FlatList {...common} {...props} />;
}
