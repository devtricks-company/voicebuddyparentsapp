import styled from 'styled-components';
import {CodeField, CodeFieldProps} from 'react-native-confirmation-code-field';
import {BaseText, TextProps} from 'core/components/Text/BaseText';

const size = '46px';

export const StyledCell = styled(BaseText)<TextProps & {isFocused: boolean}>`
  width: ${size};
  height: ${size};
  line-height: ${size};
  border-width: 2px;
  text-align: center;
  border-radius: 13px;
  font-size: 25px;
  margin: 5px;
  background-color: ${({theme: {components, palette}, isFocused}) =>
    isFocused ? palette.light : components.inputs.bg};
  color: ${({theme}) => theme.components.label};
  border-color: ${({theme: {components, palette}, isFocused}) =>
    isFocused ? palette.primary : components.border};
`;

export const StyledCodeField = styled(CodeField).attrs<
  CodeFieldProps & {my?: number}
>(props => ({
  rootStyle: {justifyContent: 'center', marginVertical: props?.my ?? 0},
}))<CodeFieldProps & {my?: number}>``;
