import { Phone } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Services',
  description:
    'Ebenezer Duct Cleaning offers a host of different services to ensure your ducts and vents are clean and efficient. From residential to commercial, we have you covered.',
  keywords: [
    'Ebenezer Duct Cleaning',
    'Services',
    'Duct Cleaning',
    'Vent Cleaning',
    'Dryer Vent Cleaning',
    'Vent Repair',
    'Commercial Duct Cleaning',
    'HVAC System Cleaning',
    'Air Filter Replacement',
    'Pre-Sale Home Duct Cleaning',
  ],
  openGraph: {
    title: 'Services | Ebenezer Duct Cleaning',
    description:
      'Ebenezer Duct Cleaning offers a host of different services to ensure your ducts and vents are clean and efficient. From residential to commercial, we have you covered.',
    url: 'https://ebenezer-duct-cleaning.vercel.app/services',
    siteName: 'Ebenzezer Duct Cleaning',
    images: [
      {
        url: '/og/og-services.png', // Must be an absolute URL
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
};
export default function page() {
  return (
    <main className="mt-18 flex w-full flex-col items-center text-lg lg:mt-19">
      <section className="grid w-full grid-cols-1 items-start gap-10 p-10 md:grid-cols-2 lg:grid-cols-3 lg:px-50 lg:py-30">
        <h1 className="text-primary text-6xl font-bold md:col-span-2">
          Services Provided
        </h1>

        <div className="flex h-full w-full flex-col shadow-md">
          <div className="w-full items-center justify-center rounded-t-xl">
            <Image
              src={'/services/duct-cleaning.jpg'}
              width={100}
              height={100}
              alt="image of a duct being suctioned"
              className="w-full rounded-t-xl object-cover"
              unoptimized={true}
            />
          </div>
          <div className="flex flex-col p-2">
            <h3 className="text-dark text-xl font-bold">
              Commercial Duct Cleaning
            </h3>
            <p>
              Tailored solutions for offices, clinics, restaurants, and other
              businesses — helping create a safer, cleaner work environment.
            </p>
          </div>
        </div>
        <div className="flex h-full w-full flex-col shadow-md">
          <div className="w-full items-center justify-center rounded-t-xl">
            <Image
              src={'/services/waste-disposal.webp'}
              width={100}
              height={100}
              alt="image of a dryer vent being cleaned"
              className="h-full w-full rounded-t-xl object-cover"
              unoptimized={true}
            />
            <Phone className="size-10 text-white" />
          </div>
          <div className="flex flex-col p-2">
            <h3 className="text-dark text-xl font-bold">Dryer Vent Cleaning</h3>
            <p>
              Prevent fire hazards and improve dryer performance with a thorough
              vent cleaning service.
            </p>
          </div>
        </div>
        <div className="flex h-full w-full flex-col shadow-md">
          <div className="w-full items-center justify-center rounded-t-xl">
            <Image
              src={'/services/vent-cleaning.jpg'}
              width={100}
              height={100}
              alt="image of a HVAC vent being cleaned"
              className="h-full w-full rounded-t-xl object-cover"
              unoptimized={true}
            />
          </div>
          <div className="flex flex-col p-2">
            <h3 className="text-dark text-xl font-bold">
              HVAC System Cleaning
            </h3>
            <p>
              Comprehensive cleaning of your furnace, coils, blowers, and more
              to ensure smooth operation year-round.
            </p>
          </div>
        </div>
        {/* <div className="flex h-full w-full flex-col shadow-md">
          <div className="w-full items-center justify-center rounded-t-xl">
            <Phone className="size-10 text-white" />
          </div>
          <div className="flex flex-col p-2">
            <h3 className="text-dark text-xl font-bold">
              Mold & Odor Treatment
            </h3>
            <p>
              If your ducts smell musty or show signs of mold, we use safe,
              effective treatments to eliminate odors and growth.
            </p>
          </div>
        </div> */}
        <div className="flex h-full w-full flex-col shadow-md">
          <div className="w-full items-center justify-center rounded-t-xl">
            <Image
              src={'/services/filter.jpg'}
              width={100}
              height={100}
              alt="image of an air filter in a home being replaced"
              className="h-full w-full rounded-t-xl object-cover"
              unoptimized={true}
            />
          </div>
          <div className="flex flex-col p-2">
            <h3 className="text-dark text-xl font-bold">
              Air Filter Replacement
            </h3>
            <p>
              Keep your air fresh and systems running smoothly with regular
              filter changes — we’ll recommend and install the best option for
              your needs.
            </p>
          </div>
        </div>
        <div className="flex h-full w-full flex-col shadow-md">
          <div className="w-full items-center justify-center rounded-t-xl">
            <Image
              src={'/services/pre-home.webp'}
              width={100}
              height={100}
              alt="image of a guy cleaning the ducts in a home prior to sale"
              className="h-full w-full rounded-t-xl object-cover"
              unoptimized={true}
            />
          </div>
          <div className="flex flex-col p-2">
            <h3 className="text-dark text-xl font-bold">
              Pre-Sale Home Duct Cleaning
            </h3>
            <p>
              Selling your home? Clean ducts can be a big selling point. We’ll
              help you make a great impression.
              <br />
              {'    '}
            </p>
          </div>
        </div>
        <div className="flex h-full w-full flex-col shadow-md">
          <div className="w-full items-center justify-center rounded-t-xl">
            <Image
              src={'/services/duct-vent-repair.jpg'}
              width={100}
              height={100}
              alt="image of a guy cleaning the ducts in a home prior to sale"
              className="h-full w-full rounded-t-xl object-cover"
              unoptimized={true}
            />
          </div>
          <div className="flex flex-col p-2">
            <h3 className="text-dark text-xl font-bold">Duct & Vent Repair</h3>
            <p>
              Fix your damaged or disconnected ducts and vents to restore
              airflow and efficiency. We’ll assess and repair any issues to keep
              your system running.
              <br />
              {'    '}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
