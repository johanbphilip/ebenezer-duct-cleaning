import { QuoteForm } from '@/components/QuoteForm';

export default function page() {
  return (
    <main className="mt-33 flex w-full flex-col items-center">
      <section className="flex w-full items-center justify-between gap-20 p-10">
        <div className="flex w-1/2 flex-col gap-2">
          <h2 className="text-primary text-4xl font-bold">Get a Quote</h2>
          <p className="text-lg">
            Fill out the form to provide us with information so that we can
            estimate a quote for your beautiful home
          </p>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
