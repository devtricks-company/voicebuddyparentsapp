import React from 'react';
import {BaseContainer} from 'core/components/Container/BaseContainer';
import {BackdropProps, headerHeights} from '../types';

export function BaseBackdrop(props: BackdropProps) {
  const {
    leftIcon,
    content,
    rightIcon,
    headerSize,
    children,
    _content,
    ...rest
  } = props;
  return (
    <BaseContainer flex={1} bg="container.bg">
      <BaseContainer
        px="20px"
        pt="40px"
        pb="20px"
        justifyContent="space-between"
        height={headerHeights[headerSize ?? 'xxl']}
        backgroundColor="transparent"
        {...rest}>
        {leftIcon}
        {content}
        {rightIcon}
      </BaseContainer>
      <BaseContainer bg="container.bg" flex={1} {..._content}>
        {children}
      </BaseContainer>
    </BaseContainer>
  );
}
