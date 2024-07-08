import {z} from 'zod';
export const addKidCodeSchema = z.object({
  uuid: z
    .string()
    .min(1, {message: 'please enter uuid for adding kids to your list'}),
});
