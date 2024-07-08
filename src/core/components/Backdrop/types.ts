import {ContainerProps} from '../Container';

export const headerHeights = {
  xxs: '5%',
  xs: '7.5%',
  s: '9%',
  l: '14%',
  xl: '17.5%',
  xxl: '20%',
};

export type HeaderHeight = keyof typeof headerHeights;

export type BackdropProps = ContainerProps & {
  content?: JSX.Element;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  headerSize?: HeaderHeight;
  _content?: ContainerProps;
};
