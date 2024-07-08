import React from 'react';
import {TextProps as NativeTextProps} from 'react-native';
import {FlexboxProps, SpaceProps, TypographyProps} from 'styled-system';
import {FontSize} from 'core/styles/fontSizes';
import {Font} from 'core/styles/fonts';
import {Colors} from 'core/styles/colors';
import {StyledText} from './styles';

export type TextProps = NativeTextProps &
  SpaceProps &
  FlexboxProps &
  Omit<TypographyProps, 'fontFamily' | 'fontSize'> & {
    fontSize?: number;
    size?: FontSize;
    font?: Font;
    color?: keyof Colors | string;
  };

export function BaseText(props: TextProps) {
  return <StyledText {...props} />;
}
