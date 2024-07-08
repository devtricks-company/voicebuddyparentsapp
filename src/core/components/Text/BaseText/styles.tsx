import styled, {css} from 'styled-components';
import {flexbox, space, typography} from 'styled-system';
import {Platform, Text} from 'react-native';
import {getColor} from '../../../helpers/color';
import fontSizes from 'core/styles/fontSizes';
import fonts from 'core/styles/fonts';
import {TextProps} from './index';

export const StyledText = styled(Text)<TextProps>`
  font-size: ${({size}) => fontSizes[size ?? 'r']}px;
  font-family: ${({font}) => fonts[font ?? 'normal']};
  color: ${({theme, color: textColor}) =>
    getColor(theme, (textColor ?? 'text') as string)};
  ${({size}) =>
    Platform.OS === 'android' &&
    css`
      line-height: ${fontSizes[size ?? 'r'] * 1.2}px;
    `}

  ${flexbox}
  ${space}
  ${typography}
`;
