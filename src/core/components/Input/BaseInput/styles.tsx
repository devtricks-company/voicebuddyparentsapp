import styled, { css } from 'styled-components'
import { layout } from 'styled-system'
import { Platform, TextInput } from 'react-native'
import fonts from 'core/styles/fonts'
import { BaseIcon } from 'core/components/Icon/BaseIcon'
import fontSizes from 'core/styles/fontSizes'
import { BaseContainer } from 'core/components/Container/BaseContainer'
import { InputProps } from '../BaseInput'

export const StyledInput = styled(TextInput).attrs<Omit<InputProps, 'label'>>(({ theme }) => ({
  // placeholderTextColor: theme.components.border,
  selectionColor: theme.palette.primary,
}))<Omit<InputProps, 'label'>>`
  font-family: ${fonts.normal};
  font-size: ${({ size }) => fontSizes[size ?? 'r']}px;
  color: ${({ theme }) => theme.components.text};
  border: ${({ theme: { components, palette }, error }) =>
      error ? palette.error : components.border}
    solid 0px;
  border-radius: 15px;
  background-color: ${({ isDisabled, theme: { components } }) =>
    components.inputs[isDisabled ? 'disabled' : 'bg']};
  background-color: ${({ theme: { components, palette }, isFocused }) =>
    isFocused ? palette.light : palette.light};
  padding: 15px 15px;
  color: ${({ color }) => (color ? '#FFFFFF' : '#797979')};
  margin-top: 15px;
  ${({ element }) => css`
    border-right-width: ${element ? 0 : 0}px;
  `}
  ${({ textArea }) =>
    textArea &&
    css`
      padding-top: 15px;
      height: 200px;
    `}
    ${({ size }) =>
    Platform.OS === 'android' &&
    css`
      line-height: ${fontSizes[size ?? 'r']}px;
    `}
    ${layout};
`

export const StyledIcon = styled(BaseIcon)`
  position: absolute;
  right: 15px;
  top: 62%;
  margin-top: -5px;
`

export const StyledExtraElement = styled(BaseContainer)<{
  error?: boolean
  isDisabled?: boolean
  place?: 'right' | 'left'
}>`
  ${({ place }) =>
    place === 'right'
      ? css`
          margin-left: -7px;
          border-bottom-right-radius: 7.5px;
          border-top-right-radius: 7.5px;
        `
      : place === 'left'
      ? css`
          margin-right: -7px;
          border-bottom-left-radius: 7.5px;
          border-top-left-radius: 7.5px;
        `
      : null}
  padding: ${Platform.OS === 'android' ? 13 : 9}px 5px;
  overflow: hidden;
  background-color: ${({ isDisabled, theme: { components } }) =>
    components.inputs[isDisabled ? 'disabled' : 'bg']};
  border: ${({ theme: { components, palette }, error }) =>
      error ? palette.error : components.border}
    solid 0px;
  align-items: center;
  height: 100%;
`
