import {FieldValues} from 'react-hook-form';
import {ControlledInput, ControlledInputProps} from '../ControlledInput';

export function EmailInput<T extends FieldValues>(
  props: ControlledInputProps<T>,
) {
  return (
    <ControlledInput
      {...props}
      autoComplete="email"
      dataDetectorTypes="none"
      textContentType="emailAddress"
      autoCapitalize="none"
    />
  );
}
