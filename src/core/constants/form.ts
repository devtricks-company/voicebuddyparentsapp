import { set } from 'lodash'
import { Rules } from 'react-hook-form'

export enum InputType {
  TextInput = 'text-input',
  Phone = 'phone',
  DropDown = 'drop-down',
  Image = 'image',
  Date = 'date',
  Switch = 'switch',
}

export const passwordRules = [
  'An uppercase letter (A-Z)',
  'A lowercase letter (a-z)',
  'A number (0-9)',
  'A special character',
  'At least 8 characters',
]

export const passwordErrors = {
  strength: 'Password is weak',
  length: 'At least 8 characters',
  required: 'Password is required',
}
export const passwordLength = 8

export enum PasswordRules {
  Required = 'required',
  Pattern = 'pattern',
  Length = 'length',
}

export function getPasswordRules(rules: Array<PasswordRules>) {
  const validation = {}
  if (rules.includes(PasswordRules.Required)) {
    set(validation, 'required', {
      value: true,
      message: passwordErrors.required,
    })
  }
  if (rules.includes(PasswordRules.Pattern)) {
    set(validation, 'pattern', {
      value: new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)'),
      message: passwordErrors.strength,
    })
  }
  if (rules.includes(PasswordRules.Length)) {
    set(validation, 'minLength', { value: 8, message: passwordErrors.length })
  }
  return validation as Rules
}
