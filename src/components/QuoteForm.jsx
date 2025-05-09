'use client';

import { quoteFormValidate } from '@/app/actions/quote';

import React, { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

//TODO: eventually switch to shadcn form, but for now this works well
export const QuoteForm = ({ onSuccess }) => {
  const [state, action, pending] = useActionState(quoteFormValidate, undefined);

  useEffect(() => {
    if (state?.success === true) {
      toast.success(
        <h1 className="text-lg font-bold">Quote Request Submitted</h1>,
        {
          description:
            'Thank you for submitting a quote request. We will get back to you soon.',
        }
      );
      if (onSuccess) {
        onSuccess();
      }
    }
  }, [state?.success, onSuccess]);
  return (
    <form
      action={action}
      className="bg-background flex flex-col gap-4 rounded-lg border p-5 md:w-1/2"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Name"
          className="rounded-md border p-2"
        />
        {state?.errors?.name && (
          <p className="text-destructive">{state.errors.name}</p>
        )}
      </div>
      <div className="flex w-full gap-2">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="youremail@email.com"
            className="rounded-md border p-2"
          />
          {state?.errors?.email && (
            <p className="text-destructive">{state.errors.email}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="phone" className="font-semibold">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="4161234567"
            className="rounded-md border p-2"
          />
          {state?.errors?.phone && (
            <p className="text-destructive">{state.errors.phone}</p>
          )}
        </div>
      </div>
      <div className="flex w-full gap-2">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="city" className="font-semibold">
            City Of Residence
          </label>
          <input
            id="city"
            name="city"
            placeholder="Toronto"
            className="rounded-md border p-2"
          />
          {state?.errors?.city && (
            <p className="text-destructive">{state.errors.city}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="services-needed" className="font-semibold">
            Services Needed
          </label>
          <input
            id="services-needed"
            name="services-needed"
            placeholder="I would like to..."
            className="rounded-md border p-2"
          />
          {state?.errors?.servicesNeeded && (
            <p className="text-destructive">{state.errors.servicesNeeded}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className="font-semibold">
          Notes
        </label>
        <input
          id="notes"
          name="notes"
          placeholder="Additional Notes"
          className="rounded-md border p-2"
        />
        {state?.errors?.notes && (
          <p className="text-destructive">{state.errors.notes}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary disabled:bg-muted-foreground rounded-md border p-2 font-bold text-white"
        disabled={pending}
      >
        {' '}
        {pending ? 'Submitting...' : 'Submit'}
      </button>
      {/* {state?.success && redirect('/thank-you')} */}
      {/* {state?.success == true
        ? toast.success(
            <h1 className="text-lg font-bold">Quote Request Submitted</h1>,
            {
              description:
                ' Thank you for submitting a quote request. We will get back to you soon.',
            }
          )
        : 's'} */}
    </form>
  );
};
