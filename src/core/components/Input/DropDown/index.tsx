import { Picker } from '@react-native-picker/picker'
import { LegacyRef, useCallback, useRef, useState } from 'react'
import { Button, Platform } from 'react-native'
import { useTheme } from 'styled-components'
import { BaseInput } from 'core/components/Input/BaseInput'
import { Touchable } from 'core/components/Touchable'
import { Container } from 'core/components/Container'
import { getColor } from 'core/helpers/color'
import { StyledModal } from './styles'

export type DropDownProps<Value> = {
  label?: string
  placeholder: string
  value: Value | undefined
  items: Array<Value>
  onChange: (value: Value | null) => void
  onDonePress?: (value: Value | null) => void
  itemToString: (value?: Value) => string
  error?: string
  disabled?: boolean | null
  backgroundColor?: string
  placeholderTextColor?: string
  color?: string
}

export function DropDown<Value extends { id: string | number }>(props: DropDownProps<Value>) {
  const {
    value,
    itemToString,
    onChange,
    onDonePress,
    label,
    items,
    disabled,
    placeholder,
    error,
    backgroundColor,
    placeholderTextColor,
    color,
  } = props

  const pickerRef = useRef<Picker<string | null>>()

  const [modal, setModal] = useState(false)

  const theme = useTheme()

  const handleOnPress = () => {
    switch (Platform.OS) {
      case 'android':
        pickerRef.current?.focus()
        break
      case 'ios':
        setModal(true)
        break
    }
  }

  const handleOnChange = useCallback(
    (id: string) => onChange(items.find(item => item.id === id) ?? null),
    [items, onChange],
  )

  return (
    <>
      <Touchable disabled={!items.length || (disabled ?? false)} onPress={handleOnPress}>
        <BaseInput
          value={itemToString(value)}
          label={label}
          error={error}
          isDisabled={disabled ?? undefined}
          pointerEvents="none"
          rightIcon={items.length ? 'chevron-down' : undefined}
          placeholder={placeholder}
          editable={false}
          backgroundcolor={backgroundColor}
          placeholderTextColor={placeholderTextColor ? placeholderTextColor : '#939393'}
          color={color}
        />
      </Touchable>

      {Platform.OS === 'android' ? (
        <Container display="none">
          <Picker
            ref={pickerRef as LegacyRef<Picker<string>> | undefined}
            mode="dialog"
            selectedValue={value?.id as string}
            onValueChange={handleOnChange}>
            <Picker.Item color="#6b6b6b" enabled={false} label="Please select one" />
            {items.map(item => (
              <Picker.Item
                key={String(item)}
                color="#2f2f2f"
                label={itemToString(item)}
                value={item.id}
              />
            ))}
          </Picker>
        </Container>
      ) : (
        <StyledModal isVisible={modal}>
          <Container borderRadius="20px" width="100%" p="10px" bg="container.bg">
            <Container flexDirection="row" justifyContent="space-between">
              <Button title="Cancel" onPress={() => setModal(false)} />
              <Button
                disabled={!value}
                title="Done"
                onPress={() => {
                  setModal(false)
                  onDonePress?.(value ?? null)
                }}
              />
            </Container>
            <Picker selectedValue={value?.id as string} onValueChange={handleOnChange}>
              <Picker.Item color="#6b6b6b" enabled={false} label="Please select one" />
              {items.map(item => (
                <Picker.Item
                  color={getColor(theme, 'label')}
                  key={String(item)}
                  label={itemToString(item)}
                  value={item.id}
                />
              ))}
            </Picker>
          </Container>
        </StyledModal>
      )}
    </>
  )
}
