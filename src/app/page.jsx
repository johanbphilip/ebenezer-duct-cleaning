import { Accordion } from '@/components/Accordion';
import { QuoteForm } from '@/components/QuoteForm';
import { Clock8, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const items = [
    {
      title: 'Working Hour',
      content: 'Monday to Saturday 8am-6pm',
      icon: <Clock8 />,
    },
    {
      title: 'Locations Served',
      content: 'GTA, Durham, Peel',
      icon: <MapPin />,
    },
    {
      title: 'Contact & Support',
      content:
        'For any questions, concerns or inquiries, please contact us at 647-703-6727',
      content: (
        <>
          <p>
            For any questions, concerns or inquiries, please contact us at{' '}
            <a href="tel:647-703-6727" className="underline underline-offset-2">
              647-703-6727
            </a>
          </p>
        </>
      ),
      icon: <Phone />,
    },
  ];
  return (
    <main className="bg-background mt-31 flex w-full flex-col items-center text-base">
      <section className="bg-primary-foreground flex h-full w-full flex-row items-center justify-center gap-20 p-10">
        <div className="flex w-2/3 flex-col gap-4">
          <h3 className="text-primary text-3xl font-bold">
            Breathe Cleaner. Live Better.
          </h3>
          <p className="text-text">
            At Ebenezer Duct Cleaning, we’re committed to helping families and
            businesses enjoy cleaner, healthier air. As a reliable, passionate,
            and affordable duct cleaning service, we bring professionalism and
            genuine care to every job. Whether you're improving air quality,
            reducing allergens, or simply ensuring your HVAC system runs
            efficiently — we're here to serve with integrity and excellence.
          </p>
        </div>
        <Image
          src={'./duc1.webp'}
          width={100}
          height={100}
          quality={100}
          alt="Man cleaning an airduct"
          className="my-10 w-1/2 rounded-md"
        />
      </section>
      <section className="bg-background text-background flex gap-10 p-10 text-center">
        <div className="flex flex-col p-10 text-left">
          <h1 className="text-primary mb-10 text-2xl font-bold">
            RESIDENTIAL AND COMMERCIAL DUCT CLEANING SERVICE
          </h1>
          <p className="text-foreground">
            At Ebenezer Duct Cleaning, we're passionate about helping families
            and businesses breathe cleaner, healthier air. With a commitment to
            excellence and customer satisfaction, we go above and beyond to
            ensure every duct system is spotless and efficient. We use
            top-of-the-line equipment and proven techniques to remove dust,
            allergens, and contaminants from your airways. We take pride in our
            meticulous work and honest service, treating every space like it’s
            our own. Whether it's your home or office, you can trust us to
            deliver fresh air and peace of mind. Clean air isn’t just our job —
            it’s our mission.
          </p>
        </div>
        <Image
          src={'./profile-pics.jpg'}
          width={100}
          height={100}
          alt="Image of before and after"
        />
      </section>
      <section className="bg-background text-primary grid w-full grid-cols-4 items-center gap-5 p-10">
        <div className="border-border flex w-full flex-col items-center justify-between rounded-md border p-5">
          <Image
            src={'./duct-cleaning.jpg'}
            width={100}
            height={100}
            alt="duct being cleaned"
            className="w-full rounded-md"
          ></Image>
          <p className="font-bold">Duct Cleaning</p>
        </div>
        <div className="flex w-full flex-col items-center justify-between">
          <Image
            src={'./vent-cleaning.jpg'}
            width={100}
            height={100}
            alt="vent being cleaned"
            className="w-full rounded-md"
          ></Image>
          <p className="font-bold">Vent Cleaning</p>
        </div>
        <div className="flex w-full flex-col items-center justify-between">
          <Image
            src={'./duct-vent-repair.jpg'}
            width={100}
            height={100}
            alt="duct being cleaned"
            className="w-full rounded-md"
          ></Image>
          <p className="font-bold">Duct & Vent Repair</p>
        </div>
        <div className="flex w-full flex-col items-center justify-between">
          <Image
            src={'./waste-disposal.webp'}
            width={100}
            height={100}
            alt="duct being cleaned"
            className="w-full rounded-md"
          ></Image>
          <p className="font-bold">Waste Disposal</p>
        </div>
      </section>
      <section className="bg-accent-foreground text-background flex w-full flex-row gap-20 p-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-xl font-bold">
            Passionate, Dedicated and Dependable
          </h2>
          <p className="">
            When you book a service date with Ebenezer Duct Cleaning, you know
            that you will get our best work. We will work to ensure that you get
            your money's worth and that your ducts and vents are left spotless.
          </p>
          <h2 className="text-primary text-xl font-bold">Affordable</h2>
          <p className="">
            We do our best to provide the best possible service at the most
            affordable rates. Contact us for a more accurate quote based on your
            house size and cleaning needs.
          </p>
        </div>
        <Accordion items={items} className={'text-background w-full'} />
      </section>
      <section className="flex w-full items-center justify-between gap-20 p-10">
        <div className="flex w-1/2 flex-col gap-2">
          <h2 className="text-primary text-4xl font-bold">Get a Quote</h2>
          <p className="text-text">
            Fill out the form to provide us with information so that we can
            estimate a quote for your beautiful home
          </p>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
