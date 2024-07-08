import {z} from 'zod';
export const userInformationSchema = z.object({
  first_name: z.string().min(2, {message: '* First name is required'}),
  last_name: z.string().min(2, {message: '* Last name is required'}),
  kind: z.object({
    id: z.string(),
    name: z.string(),
  }),
});
