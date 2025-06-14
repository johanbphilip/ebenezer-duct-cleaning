'use client';
import { ElfsightWidget } from 'react-elfsight-widget';

export default function page() {
  return (
    <main className="mt-18 flex w-full flex-col items-center p-0 text-base lg:mt-19">
      <h1 className="text-primary my-20 text-6xl font-bold">
        Customer Reviews
      </h1>

      <ElfsightWidget
        widgetId="ba032397-ad39-4232-95ed-e7f58ffd9c7f"
        className="w-full"
      />
    </main>
  );
}
