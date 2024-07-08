import {BaseContainer, ContainerProps} from './BaseContainer';
import {Box} from './Box';
import {HStack} from './HStack';

export const Container = Object.assign(BaseContainer, {
  Box,
  HStack,
});

export type {ContainerProps};
