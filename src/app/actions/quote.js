'use server';

import { sendEmail } from '../api/send/route';

const { quoteFormSchema } = require('../lib/definitions');

export async function quoteFormValidate(previousState, formData) {
  // const { name, email, phone, serviceNeeded, notes } = formData;
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const city = formData.get('city');
  const servicesNeeded = formData.get('services-needed');
  const notes = formData.get('notes');

  const validatedFields = quoteFormSchema.safeParse({
    name,
    email,
    phone,
    city,
    servicesNeeded,
    notes,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (validatedFields.success) {
    const { result } = sendEmail({
      name,
      email,
      phone,
      city,
      servicesNeeded,
      notes,
    });
    if (result === false) {
      return {
        errors:
          'There was en error when sending the request, please try again later. ',
      };
    }
    return {
      success: true,
    };
  }
}
