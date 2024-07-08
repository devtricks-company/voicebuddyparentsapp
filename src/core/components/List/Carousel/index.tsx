import {FlatListProps} from 'react-native';
import {BaseList} from '../BaseList';

export function Carousel<T>(props: FlatListProps<T> & {animated?: boolean}) {
  return (
    <BaseList
      {...props}
      horizontal
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
    />
  );
}
