import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  OpacityProps,
} from 'styled-system';
import {Colors} from 'core/styles/colors';
import * as Styled from './styles';

export type TouchableProps = TouchableOpacityProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  OpacityProps &
  PositionProps &
  BorderProps & {
    backgroundColor?: keyof Colors | string;
    borderColor?: keyof Colors | string;
  };

export function Touchable(props: TouchableProps) {
  return <Styled.Touchable {...props} />;
}
