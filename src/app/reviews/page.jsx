import { ReviewWidget } from '@/components/ReviewWidget';

export const metadata = {
  title: 'Reviews',
  description:
    'Read what our customers have to say about our duct cleaning services.',
  keywords: [
    'Ebenezer Duct Cleaning',
    'Duct Cleaning',
    'Reviews',
    'Customer Reviews',
    'Customer Feedback',
  ],
  openGraph: {
    title: 'Reviews | Ebenezer Duct Cleaning',
    description:
      'Read what our customers have to say about our duct cleaning services.',
    url: 'https://ebenezer-duct-cleaning.vercel.app/reviews',
    siteName: 'Ebenzezer Duct Cleaning',
    images: [
      {
        url: '/og/og-reviews.png', // Must be an absolute URL
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
};

export default function page() {
  return (
    <main className="mt-18 flex w-full flex-col items-center p-0 text-base lg:mt-19">
      <h1 className="text-primary my-20 text-6xl font-bold">
        Customer Reviews
      </h1>

      <ReviewWidget />
    </main>
  );
}
