import {
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {StyledCell, StyledCodeField} from './styles';

type Props = {
  value: string;
  count: number;
  my?: number;
  onChangeText: (value: string) => void;
  autoFocus?: boolean;
};

export function CodeInput(props: Props) {
  const {count, value, onChangeText, my, autoFocus = true} = props;

  const ref = useBlurOnFulfill({value, cellCount: count});
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });
  return (
    <StyledCodeField
      ref={ref}
      value={value}
      my={my}
      onChangeText={onChangeText}
      cellCount={count}
      autoFocus={autoFocus}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <StyledCell
          isFocused={isFocused}
          key={index}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </StyledCell>
      )}
      {...codeFieldProps}
    />
  );
}
