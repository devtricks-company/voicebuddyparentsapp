import styled from 'styled-components';
import {border, flexbox, layout, opacity, position, space} from 'styled-system';
import {TouchableOpacity} from 'react-native';
import {css} from 'styled-components/native';
import {getColor} from 'core/helpers/color';
import {TouchableProps} from './index';

export const Touchable = styled(TouchableOpacity)<TouchableProps>`
  background-color: ${({theme, backgroundColor}) =>
    getColor(theme, backgroundColor)};
  ${border}
  ${space}
  ${flexbox}
  ${layout}
  ${position}
  ${opacity}
  ${({theme, borderColor}) =>
    borderColor
      ? css`
          border-color: ${getColor(theme, borderColor)};
        `
      : undefined}
`;
