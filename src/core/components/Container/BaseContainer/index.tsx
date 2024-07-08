import React from 'react';
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  OpacityProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import {ViewProps} from 'react-native';
import {Colors} from 'core/styles/colors';
import {StyledContainer} from './styles';

export type ContainerProps = ViewProps &
  SpaceProps &
  BorderProps &
  FlexboxProps &
  OpacityProps &
  PositionProps &
  LayoutProps & {
    backgroundColor?: keyof Colors | string;
    borderColor?: keyof Colors | string;
    bg?: keyof Colors | string;
    gap?: number;
  };

export const BaseContainer: React.FunctionComponent<ContainerProps> = props => {
  return <StyledContainer {...props} />;
};

BaseContainer.displayName = 'Container';
