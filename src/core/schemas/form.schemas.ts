import {boolean, date, number, string, z} from 'zod';
import {Rules} from 'react-hook-form';
import {InputType} from 'core/constants/form';

const formInputItemSchema = z
  .object({
    id: z.string().or(number()),
    name: z.string(),
  })
  .and(z.record(z.string(), z.any()));

export const formInputSchema = z.object({
  name: z.string(),
  label: z.string(),
  keyboard: z.enum(['numeric', 'default']).nullish(),
  placeholder: z.string(),
  mask: z
    .object({pattern: string(), unmask: boolean().or(z.enum(['typed']))})
    .nullish(),
  minDate: z.date().nullish(),
  maxDate: z.date().nullish(),
  defaultValue: z.string().or(date()).or(formInputItemSchema).nullish(),
  validations: z.instanceof(Rules).nullish(),
  items: z.array(formInputItemSchema).nullish(),
  disabled: z.boolean().nullish(),
  type: z.nativeEnum(InputType),
  textArea: z.boolean().optional(),
});

export type FormInput =
  | z.infer<typeof formInputSchema>
  | {render: () => JSX.Element; name: string};

export type FormInputItem = z.infer<typeof formInputItemSchema>;
