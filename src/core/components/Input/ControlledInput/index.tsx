import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {z} from 'zod';
import {register} from 'core/helpers/reactHookForm';
import {formInputSchema} from 'core/schemas/form.schemas';
import {BaseInput, InputProps} from '../BaseInput';
import {MaskedInput} from '../MaskedInput';

export type ControlledInputProps<FormValues extends FieldValues> = InputProps &
  UseControllerProps<FormValues> & {
    render?: (props: InputProps) => JSX.Element;
    mask?: z.infer<typeof formInputSchema>['mask'];
  };

export function ControlledInput<FormValues extends FieldValues>(
  props: ControlledInputProps<FormValues>,
) {
  const {
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
    render,
    mask,
    ...rest
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({field, fieldState}) =>
        render?.({...register(field), ...rest}) ??
        (mask ? (
          <MaskedInput
            error={fieldState.error?.message}
            onBlur={field.onBlur}
            value={field.value}
            mask={mask.pattern}
            unmask={mask.unmask}
            onAccept={(value: string) => field.onChange(value)}
            {...rest}
          />
        ) : (
          <BaseInput
            error={fieldState.error?.message}
            {...register(field)}
            {...rest}
          />
        ))
      }
    />
  );
}
