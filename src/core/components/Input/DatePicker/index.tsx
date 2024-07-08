import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useState} from 'react';
import {Platform} from 'react-native';
import {Touchable, TouchableProps} from 'core/components/Touchable';
import {BaseInput} from 'core/components/Input/BaseInput';
import {date} from 'core/helpers/zod';

export type DatePickerProps = TouchableProps & {
  onChange?: (date: Date) => void;
  value?: Date | null | string;
  maximumDate?: Date | null;
  minimumDate?: Date | null;
  placeholder: string;
  label: string;
  error?: string;
};

export function DatePicker(props: DatePickerProps) {
  const {
    onChange,
    value,
    error,
    label,
    disabled,
    minimumDate,
    maximumDate,
    placeholder,
    ...rest
  } = props;

  const [pickerVisibility, setPickerVisibility] = useState(false);

  const handleConfirm = (date: Date) => {
    date.setUTCHours(0, 0, 0, 0);
    onChange?.(date);
    setPickerVisibility(false);
  };

  return (
    <>
      <Touchable
        disabled={disabled}
        onPress={() => setPickerVisibility(true)}
        {...rest}>
        <BaseInput
          value={value ? date(value) : ''}
          label={label}
          pointerEvents="none"
          // rightIcon="calender"
          isDisabled={disabled ?? undefined}
          placeholder={placeholder}
          editable={false}
          error={error}
        />
      </Touchable>

      <DateTimePickerModal
        isVisible={pickerVisibility}
        isDarkModeEnabled={false}
        display={Platform.OS === 'ios' ? 'inline' : 'calendar'}
        mode="date"
        date={minimumDate ?? undefined}
        maximumDate={maximumDate ?? undefined}
        minimumDate={minimumDate ?? undefined}
        onConfirm={handleConfirm}
        onCancel={() => setPickerVisibility(false)}
      />
    </>
  );
}
