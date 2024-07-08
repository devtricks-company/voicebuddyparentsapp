import styled from 'styled-components';
import {border, flexbox, layout, opacity, position, space} from 'styled-system';
import {View} from 'react-native';
import {css} from 'styled-components/native';
import {getColor} from '../../../helpers/color';
import {ContainerProps} from './index';

export const StyledContainer = styled(View)<ContainerProps>`
  background-color: ${({theme, backgroundColor, bg}) =>
    getColor(theme, (backgroundColor || bg) as string)};
  ${space}
  ${flexbox}
  ${layout}
  ${border}
  ${position}
  ${opacity}
  
  ${({theme, borderColor}) =>
    borderColor
      ? css`
          border-color: ${getColor(theme, borderColor as string)};
        `
      : undefined}
`;
