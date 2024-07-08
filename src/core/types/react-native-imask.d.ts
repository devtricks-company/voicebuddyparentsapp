declare module 'react-native-imask' {
  import React, {Ref} from 'react';
  import {TextInput} from 'react-native';

  function IMaskNativeMixin<T>(
    render: (props: T & {inputRef: Ref<TextInput>}) => JSX.Element,
  ): React.FC<T>;
}
