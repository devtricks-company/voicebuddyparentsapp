import {Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const standardScreenHeight = 580;

const size = (value: number) =>
  RFValue(value, standardScreenHeight) * (Platform.OS === 'ios' ? 1 : 0.9);

const fontSizes = {
  xt: size(5.5),
  t: size(7.5),
  xs: size(8.5),
  s: size(10.5),
  r: size(11.5),
  xr: size(13.5),
  l: size(15.5),
  xl: size(20),
  xxl: size(30),
};

export type FontSize = keyof typeof fontSizes;
export default fontSizes;
