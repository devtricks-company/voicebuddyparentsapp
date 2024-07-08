import 'react-hook-form';
import {Message} from 'react-hook-form/dist/types/errors';
import {ValidationRule} from 'react-hook-form/dist/types/validator';

declare module 'react-hook-form' {
  export declare class Rules {
    required?: Message | ValidationRule<boolean>;
    min?: ValidationRule<number | string>;
    max?: ValidationRule<number | string>;
    maxLength?: ValidationRule<number>;
    minLength?: ValidationRule<number>;
    pattern?: ValidationRule<RegExp>;
  }
}
