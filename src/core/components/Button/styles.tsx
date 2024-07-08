import styled, {css} from 'styled-components';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import {Touchable} from '../Touchable';
import {getColor} from 'core/helpers/color';
import Palette from 'core/styles/colors';
import {ButtonProps} from './index';

export const StyledButton = styled(Touchable)<Omit<ButtonProps, 'label'>>`
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: ${({isSmall}) => (isSmall ? 7.5 : 15)}px 20px;
  border-radius: 13px;
  background-color: ${({theme, color}) => getColor(theme, color)};
  ${({variant, theme, color}) =>
    variant === 'outlined' &&
    css`
      border: 1px ${getColor(theme, color)} solid;
      background-color: transparent;
    `}
  ${({variant}) =>
    variant === 'text' &&
    css`
      background-color: transparent;
    `}
`;

export const StyledIndicator = styled(
  ActivityIndicator,
).attrs<ActivityIndicatorProps>(({theme, color}) => ({
  size: 'small',
  color: theme.palette[color as keyof typeof Palette],
}))``;
