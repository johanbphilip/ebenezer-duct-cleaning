import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be atleast 2 characters long' })
    .max(20, { message: 'Name must be less than 20 characters long' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email' }).trim(),
  phone: z.string().regex(phoneRegex, 'Invalid Number!').trim(),
  city: z.string().min(2, { message: 'Please enter a valid city name' }).trim(),
  servicesNeeded: z.string().min(5, {
    message: 'Please explain use atleast 5 characters',
  }),
  notes: z.string(),
});
