import 'react-native-reanimated';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

declare module 'react-native-reanimated' {
  export type OnScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => void;
}
