import React, { Ref, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { BaseContainer, ContainerProps } from 'core/components/Container/BaseContainer'
import { Text } from 'core/components/Text'
import { IconName } from 'core/components/Icon'
import { Container } from 'core/components/Container'
import { FontSize } from 'core/styles/fontSizes'
import { HStack } from 'core/components/Container/HStack'
import { StyledExtraElement, StyledIcon, StyledInput } from './styles'

export type InputProps = TextInputProps & {
  placeholder: string
  label?: string
  error?: string
  container?: ContainerProps
  rightIcon?: IconName
  element?: { content: JSX.Element; place: 'right' | 'left' }
  isDisabled?: boolean
  onRightIconPress?: () => void
  size?: FontSize
  textArea?: boolean
  isFocused?: boolean
  backgroundcolor?: string
  color?: string
}

export const BaseInput = React.forwardRef((props: InputProps, ref: Ref<TextInput>) => {
  const {
    error,
    label,
    container,
    rightIcon,
    element,
    backgroundcolor,
    color,
    onRightIconPress,
    ...rest
  } = props
  const [isFocused, setIsFocused] = useState(false)
  return (
    <BaseContainer {...container}>
      {label ? (
        <Text color="label" font="normal" alignSelf="flex-start" mb="5px" ml="2px">
          {label}
        </Text>
      ) : null}

      {rightIcon ? (
        <Container>
          <StyledInput
            {...rest}
            style={{
              width: '100%',
              backgroundColor: backgroundcolor ? backgroundcolor : '#fff',
            }}
            color={color}
            underlineColorAndroid="transparent"
            error={error}
            ref={ref}
          />
          <StyledIcon
            onPress={onRightIconPress}
            width={12}
            height={12}
            name={rightIcon}
            fill="inputs.element"
          />
        </Container>
      ) : (
        <HStack flexDirection={element?.place === 'left' ? 'row-reverse' : 'row'} centerSpace>
          <StyledInput
            {...rest}
            style={{ flex: 1 }}
            element={element}
            underlineColorAndroid="transparent"
            error={error}
            ref={ref}
            multiline={rest?.textArea}
            textAlignVertical={rest?.textArea ? 'top' : undefined}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            isFocused={isFocused}
            color={color}
          />
          {element ? (
            <StyledExtraElement error={!!error} place={element.place} isDisabled={rest.isDisabled}>
              {element.content}
            </StyledExtraElement>
          ) : null}
        </HStack>
      )}

      {error ? (
        <Text mt="2.5px" font="normal" color="error" size="t">
          {error}
        </Text>
      ) : null}
    </BaseContainer>
  )
})
BaseInput.displayName = 'Input'
