import {ScrollView, ScrollViewProps} from 'react-native';
import {Collapse} from '../Backdrop/CollapsingBackdrop';
import {AnimationFactory} from 'core/helpers/animations';
import {Factory} from 'core/helpers/styles';
import {StyledSystemProps} from 'core/types';

const common = {showsVerticalScrollIndicator: false};

const StyledScrollView = Factory(ScrollView);

const AnimatedScrollView = AnimationFactory(StyledScrollView);

export function BaseScroll(
  props: ScrollViewProps & StyledSystemProps & {animated?: boolean},
) {
  if (props?.animated)
    return (
      <Collapse>
        {value => (
          <AnimatedScrollView
            onScroll={value?.handleScroll}
            scrollEventThrottle={15}
            {...common}
            {...props}
          />
        )}
      </Collapse>
    );

  return <StyledScrollView {...common} {...props} />;
}
