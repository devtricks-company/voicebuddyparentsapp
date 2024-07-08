import {BaseBackdrop} from './BaseBackdorp';
import {Information} from './Information';
import {SimpleBackdrop} from './SimpleBackdrop';
import {BackIconButton} from './Icons/BackIcon';
import {Collapse, CollapsingBackdrop} from './CollapsingBackdrop';
import {HeaderHeight} from './types';

export const Backdrop = Object.assign(BaseBackdrop, {
  Information,
  BackIconButton,
  SimpleBackdrop,
  Collapse,
  Collapsing: CollapsingBackdrop,
});

export type {HeaderHeight};
