import React from 'react';
import {IMaskNativeMixin} from 'react-native-imask';
import {BaseInput, InputProps} from '../BaseInput';

export const MaskedInput: React.FC<
  InputProps & {
    mask?: string;
    unmask?: boolean | 'typed';
    onAccept: (value: string) => void;
  }
> = IMaskNativeMixin(props => {
  return <BaseInput {...props} ref={props.inputRef} />;
});
