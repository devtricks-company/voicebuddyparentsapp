import {DefaultTheme} from 'styled-components';

const palette = {
  primary: '#8F32D6',
  secondary: '#FD8D34',
  success: '#00D46F',
  darkSuccess: '#58CC02',
  transparent: 'transparent',
  black: '#232323',
  gray: '#9A9A9A',
  darkGray: '#797979',
  lightGray: '#F7F7F7',
  error: '#FF3535',
  darkPrimary: '#4B1475',
  darkSecondary: '#F25700',
  gold: '#FFCA00',
  light: '#ffffff',
  warning: '#F25700',
  brown: '#64300C',
};

export type Colors = typeof palette & DefaultTheme['components'];

export default palette;
