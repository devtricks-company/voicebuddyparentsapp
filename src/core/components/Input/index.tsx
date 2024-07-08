import {BaseInput, InputProps} from './BaseInput';
import {CodeInput} from './CodeInput';
import {ControlledInput} from './ControlledInput';
import {EmailInput} from './EmailInput';
import {ImagePicker} from './ImagePicker';
import {PhoneInput} from './PhoneInput';
import {DropDown} from './DropDown';
import {DatePicker} from './DatePicker';
import {NumberPicker} from './NumberPicker';
import {BaseSwitch} from './BaseSwitch';
import {StyledInput} from './BaseInput/styles';
import {MaskedInput} from './MaskedInput';

const Input = Object.assign(BaseInput, {
  EmailInput,
  ControlledInput,
  CodeInput,
  ImagePicker,
  DropDown,
  MaskedInput,
  StyledInput,
  PhoneInput,
  DatePicker,
  NumberPicker,
  Switch: BaseSwitch,
});

export {Input};
export type {InputProps};
