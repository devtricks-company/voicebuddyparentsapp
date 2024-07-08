import {DefaultTheme} from 'styled-components';
import {get} from 'lodash';

export function getColor(theme: DefaultTheme, color: string): string;
export function getColor(theme: DefaultTheme, color?: string): string | null;
export function getColor(theme: DefaultTheme, color?: string) {
  if (!color) return null;

  const values: [string, number | undefined] = [color, undefined];

  color.split(':').forEach((value, index) => (values[index] = value));

  const [_color, opacity] = values;

  const extractedColor =
    (get(theme.components, _color) as string) ??
    (get(theme.palette, _color) as string) ??
    _color;

  return opacity
    ? convertHexToRGBA(extractedColor, Number(opacity))
    : extractedColor;
}

export const convertHexToRGBA = (hex: string, opacity: number): string => {
  const tempHex = hex.replace('#', '');
  const r = parseInt(tempHex.substring(0, 2), 16);
  const g = parseInt(tempHex.substring(2, 4), 16);
  const b = parseInt(tempHex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${opacity / 100})`;
};
