import { Accordion } from '@/components/Accordion';
import { QuoteForm } from '@/components/QuoteForm';
import { Clock8, MapPin, Phone } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CustomQuoteDrawer } from '@/components/CustomQuoteDrawer';

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
      content: '',
      icon: <Phone />,
    },
  ];
  return (
    <main className="bg-background mt-18 flex w-full flex-col items-center text-base lg:mt-31">
      <section className="bg-primary-foreground grid w-full grid-cols-1 items-center gap-20 p-10 md:grid-cols-2 md:p-20">
        <Image
          src={'/duc1.webp'}
          width={100}
          height={100}
          quality={100}
          alt="Man cleaning an airduct"
          className="bg-primary my-10 flex w-full rounded-md md:hidden"
        />
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-primary text-3xl font-bold">
            Breathe Cleaner. Live Better.
          </h3>
          <p className="text-black">
            At Ebenezer Duct Cleaning, we’re committed to helping families and
            businesses enjoy cleaner, healthier air. As a reliable, passionate,
            and affordable duct cleaning service, we bring professionalism and
            genuine care to every job. Whether you're improving air quality,
            reducing allergens, or simply ensuring your HVAC system runs
            efficiently — we're here to serve with integrity and excellence.
          </p>
        </div>

        <Image
          src={'/duc1.webp'}
          width={100}
          height={100}
          quality={100}
          alt="Man cleaning an airduct"
          className="bg-primary my-10 hidden w-full rounded-md md:flex"
        />
      </section>
      <section className="bg-background text-background text-cente flex grid grid-cols-1 items-center gap-10 p-10 md:grid-cols-2 md:gap-20 md:p-20">
        <Image
          src={'/profile-pic.jpg'}
          width={100}
          height={100}
          alt="Image of before and after"
          className="h-full w-full rounded-md object-cover"
        />
        <div className="flex flex-col text-left">
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
      </section>

      <section className="bg-accent-foreground text-background flex w-full flex-row p-10 md:p-20">
        <div className="flex flex-col gap-2">
          {/* <h2 className="text-primary text-xl font-bold">
            Passionate, Dedicated and Dependable
          </h2>
          <p className="">
            When you book a service date with Ebenezer Duct Cleaning, you know
            that you will get our best work. We will work to ensure that you get
            your money's worth and that your ducts and vents are left spotless.
          </p> */}
          <h2 className="text-primary text-xl font-bold">
            Trustworthy and Professional
          </h2>
          <p className="">
            We show up on time, treat your home with respect, and leave your
            ducts spotless. No surprises, just honest work you can count on.
          </p>
          <h2 className="text-primary text-xl font-bold">
            Family-Owned & Passionate
          </h2>
          <p className="">
            We love what we do — and it shows. As a locally-owned business,
            every client is treated like family. Your comfort and safety are our
            top priority.
          </p>
          <h2 className="text-primary text-xl font-bold">
            Affordable Without Compromise
          </h2>
          <p className="">
            High-quality service doesn’t have to break the bank. We offer
            competitive pricing and clear quotes — no upselling, no hidden fees.
          </p>
          {/* <h2 className="text-primary text-xl font-bold">
            Certified & Experienced
          </h2>
          <p className="">
            Our technicians are fully trained and certified in air duct and HVAC
            cleaning. We use industry-standard tools and methods to ensure
            long-lasting results.
          </p> */}
          <h2 className="text-primary text-xl font-bold">
            Customer Satisfaction Guaranteed
          </h2>
          <p className="">
            Your satisfaction is what keeps us going. If you’re not happy, we’ll
            make it right — guaranteed.
          </p>
        </div>
        {/* <Accordion items={items} className={'text-background w-full'} /> */}
      </section>
      <section className="xs:grid-cols-1 grid w-full items-center gap-10 p-10 md:p-20 lg:grid-cols-3">
        <Card className={'h-full'}>
          <CardHeader>
            <CardTitle className={'text-primary text-2xl font-bold'}>
              Get A Quote
            </CardTitle>
            <CardDescription>
              Ready for fresher, cleaner air? Fill out the form below and we
              will get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Whether you’re looking to schedule a service, request a quote, or
              simply ask a question, we’d love to hear from you. The team at
              Ebenezer Duct Cleaning is here to help — no pressure, no hassle.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex w-full justify-evenly">
              <CustomQuoteDrawer size={'sm'} buttonStyle={''} />
            </div>
          </CardFooter>
        </Card>
        <Card className={'h-full'}>
          <CardHeader>
            <CardTitle className={'text-primary text-2xl font-bold'}>
              Our Service Areas
            </CardTitle>
            <CardDescription>
              Serving the GTA and nearby — continue to see if we cover your
              area.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We proudly serve the GTA and surrounding areas. Not sure if you're
              in range? Checkout our Locations page to see the areas we service.
              If your city/town is not listed, reach out to us — we’ll let you
              know!
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex w-full justify-evenly">
              <Button asChild className={''}>
                <Link href={'/locations'}>Our Locations</Link>
              </Button>
              <Button asChild variant={'outline'}>
                <a href={''}>Contact Us</a>
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className={'h-full'}>
          <CardHeader>
            <CardTitle className={'text-primary text-2xl font-bold'}>
              Contact Us
            </CardTitle>
            <CardDescription>
              Call or email us — we're here to help with no pressure or hassle.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <a href="tel:647-703-6727">
                <strong>Phone: </strong>{' '}
                <span className="underline">(647) 703-6727</span>
              </a>
              <a href="mailto:ebenezerductcleaning@gmail.com">
                <strong>Email: </strong>ebenezeductcleaning@gmail.com
              </a>
              <p>
                <strong>Hours:</strong> Monday – Saturday: 8:00 AM – 6:00 PM
              </p>
              <p>
                <strong>Address: </strong>8 Coe Dr, Ajax, ON
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full justify-evenly">
              <Button asChild>
                <a href={'tel:647-703-6727'}>Call Us</a>
              </Button>
              <Button
                asChild
                variant={'outline'}
                className={'border-primary border'}
              >
                <a href={'mailto:ebenezerductcleaning@gmail.com'}>Email Us</a>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>
      {/* <section className="flex w-full items-center justify-between gap-20 p-10">
        <div className="flex w-1/2 flex-col gap-2">
          <h2 className="text-primary text-4xl font-bold">Get a Quote</h2>
          <p className="text-text">
            Fill out the form to provide us with information so that we can
            estimate a quote for your beautiful home
          </p>
        </div>
        <QuoteForm />
      </section> */}
    </main>
  );
}
