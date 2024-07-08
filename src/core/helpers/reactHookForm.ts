import {ControllerRenderProps, Path, FieldValues} from 'react-hook-form';

export function register<FormValue extends FieldValues>(
  field: ControllerRenderProps<FormValue, Path<FormValue>>,
) {
  return {
    onBlur: field.onBlur,
    onChangeText: field.onChange,
    value: field.value as string | undefined,
  };
}
