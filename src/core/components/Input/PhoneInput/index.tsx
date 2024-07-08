import React, { useCallback, useMemo, useState } from 'react'
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal'
import { mask as maskText, unMask } from 'react-native-mask-text'
import { parsePhoneNumber } from 'libphonenumber-js'
import { Text } from 'core/components/Text'
import { BaseContainer } from 'core/components/Container/BaseContainer'
import { StyledInput } from 'core/components/Input/BaseInput/styles'
import { InputProps } from 'core/components/Input/BaseInput'
import { Touchable } from 'core/components/Touchable'
import { CountriesEmoji, CountriesPhoneMask } from 'core/constants/countries'

export type PhoneInputProps = InputProps

const defaultCountry = {
  code: 'AE' as CountryCode,
  callingCode: '971',
}

function parsePhone(value?: string) {
  if (!value) return defaultCountry
  try {
    const { country, countryCallingCode } = parsePhoneNumber(
      value?.[0] !== '+' ? `+${value}` : value,
    )
    return {
      code: country as CountryCode,
      callingCode: countryCallingCode,
    }
  } catch (e) {
    return defaultCountry
  }
}

export function PhoneInput(props: PhoneInputProps) {
  const { error, label, container, value, isDisabled, onChangeText, ...rest } = props

  const [countryModal, setCountryModal] = useState(false)

  const [country, setCountry] = useState<{
    code: CountryCode
    callingCode: string
  }>(() => parsePhone(value))

  const _value = useMemo(() => {
    const mask = CountriesPhoneMask?.[country.code as keyof typeof CountriesPhoneMask]
    const barePhone = value?.replace(country.callingCode, '')
    let result = `+${country.callingCode}`
    if (mask && barePhone) {
      result = `${result} ${maskText(barePhone, mask)}`
    } else if (barePhone) {
      result = `${result} ${barePhone}`
    }
    return result
  }, [country, value])

  const handlePhoneChange = useCallback(
    (text: string) => {
      if (text.length < country.callingCode.length) return
      const unmasked = unMask(text.replace(country.callingCode, ''))
      onChangeText?.(country.callingCode + unmasked)
    },
    [country.callingCode, onChangeText],
  )

  return (
    <BaseContainer {...container}>
      <Text color="label" font="normal" alignSelf="flex-start" mb="5px" ml="2px">
        {label}
      </Text>
      <BaseContainer flexDirection="row">
        <Touchable disabled={isDisabled} mr="5px" onPress={() => setCountryModal(true)}>
          <StyledInput
            error={error}
            isDisabled={isDisabled}
            editable={false}
            value={country ? `${CountriesEmoji[country.code]}` : undefined}
            pointerEvents="none"
            placeholder=""
          />
        </Touchable>
        <StyledInput
          error={error}
          keyboardType="numeric"
          returnKeyType="done"
          style={{ flex: 4 }}
          isDisabled={isDisabled}
          editable={!isDisabled}
          underlineColorAndroid="transparent"
          value={_value}
          onChangeText={handlePhoneChange}
          {...rest}
        />
      </BaseContainer>
      <CountryPicker
        visible={countryModal}
        withCallingCode
        withAlphaFilter
        withFilter
        withFlagButton={false}
        withEmoji
        onClose={() => setCountryModal(false)}
        onSelect={c => {
          setCountry({ code: c.cca2, callingCode: c.callingCode[0] })
          onChangeText?.('')
        }}
        countryCode={country.code}
      />
    </BaseContainer>
  )
}
