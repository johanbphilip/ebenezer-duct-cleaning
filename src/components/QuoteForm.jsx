'use client';

import { quoteFormValidate } from '@/app/actions/quote';
import { redirect } from 'next/navigation';
import React, { useActionState } from 'react';

export const QuoteForm = () => {
  const [state, action, pending] = useActionState(quoteFormValidate, undefined);

  return (
    <form
      action={action}
      className="border-primary bg-light-accent flex w-1/2 flex-col gap-4 rounded-lg border p-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Name"
          className="border-primary rounded-md border-2 bg-white p-2"
        />
        {state?.errors?.name && (
          <p className="text-red-400">{state.errors.name}</p>
        )}
      </div>
      <div className="flex w-full gap-2">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="youremail@email.com"
            className="border-primary rounded-md border-2 bg-white p-2"
          />
          {state?.errors?.email && (
            <p className="text-red-400">{state.errors.email}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="phone" className="font-bold">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="4161234567"
            className="border-primary rounded-md border-2 bg-white p-2"
          />
          {state?.errors?.phone && (
            <p className="text-red-400">{state.errors.phone}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="city" className="font-bold">
          City Of Residence
        </label>
        <input
          id="city"
          name="city"
          placeholder="Toronto"
          className="border-primary rounded-md border-2 bg-white p-2"
        />
        {state?.errors?.city && (
          <p className="text-red-400">{state.errors.city}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="services-needed" className="font-bold">
          Services Needed
        </label>
        <input
          id="services-needed"
          name="services-needed"
          placeholder="I would like to..."
          className="border-primary rounded-md border-2 bg-white p-2"
        />
        {state?.errors?.servicesNeeded && (
          <p className="text-red-400">{state.errors.servicesNeeded}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className="font-bold">
          Notes
        </label>
        <input
          id="notes"
          name="notes"
          placeholder="Additional Notes"
          className="border-primary rounded-md border-2 bg-white p-2"
        />
        {state?.errors?.notes && (
          <p className="text-red-400">{state.errors.notes}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary rounded-md p-2 font-bold text-white"
      >
        {' '}
        {pending ? 'Submitting...' : 'Submit'}
      </button>
      {state?.success && redirect('/thank-you')}
    </form>
  );
};
