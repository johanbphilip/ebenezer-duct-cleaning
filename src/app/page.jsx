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
import { AnimatedImage } from '@/components/AnimatedImage';

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
    <main className="mt-18 flex w-full flex-col items-center text-lg lg:mt-19">
      <section className="bg-primary-foreground grid w-full grid-cols-1 items-center gap-20 p-10 md:grid-cols-2 md:p-20">
        <Image
          src={'/truck.png'}
          width={100}
          height={100}
          quality={100}
          alt="Man cleaning an airduct"
          className="zoom-in-50 my-10 flex w-full rounded-md md:hidden"
          unoptimized={true}
        />
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-primary text-6xl font-bold">
            Breathe Cleaner. <br />
            Live Better.
          </h2>
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
          src={'/truck.png'}
          width={100}
          height={100}
          quality={100}
          alt="Man cleaning an airduct"
          className="hidden h-full w-full rounded-md object-cover md:flex"
          unoptimized={true}
        />
      </section>
      <section className="bg-background text-background border-primary grid grid-cols-1 items-center gap-10 border-b p-10 md:grid-cols-2 md:gap-20 md:p-20">
        <Image
          src={'/works/edc - 16.jpeg'}
          width={100}
          height={100}
          alt="Image of before and after"
          className="w-full rounded-md object-cover"
          unoptimized={true}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col text-left">
            <h2 className="text-primary mb-10 text-4xl font-bold">
              Residential And Commerical Duct Cleaning Service
            </h2>
            <p className="text-foreground">
              At Ebenezer Duct Cleaning, we're passionate about helping families
              and businesses breathe cleaner, healthier air. With a commitment
              to excellence and customer satisfaction, we go above and beyond to
              ensure every duct system is spotless and efficient. We use
              top-of-the-line equipment and proven techniques to remove dust,
              allergens, and contaminants from your airways. We take pride in
              our meticulous work and honest service, treating every space like
              it’s our own. Whether it's your home or office, you can trust us
              to deliver fresh air and peace of mind. Clean air isn’t just our
              job — it’s our mission.
            </p>
          </div>
          <div className="text-foreground flex flex-col gap-2 text-left">
            <h3 className="text-primary text-xl font-bold">
              Trustworthy and Professional
            </h3>
            <p className="">
              We show up on time, treat your home with respect, and leave your
              ducts spotless. No surprises, just honest work you can count on.
            </p>
            <h3 className="text-primary text-xl font-bold">
              Family-Owned & Passionate
            </h3>
            <p>
              We love what we do — and it shows. As a locally-owned business,
              every client is treated like family. Your comfort and safety are
              our top priority.
            </p>
            <h3 className="text-primary text-xl font-bold">
              Affordable Without Compromise
            </h3>
            <p className="">
              High-quality service doesn’t have to break the bank. We offer
              competitive pricing and clear quotes — no upselling, no hidden
              fees.
            </p>
            <h3 className="text-primary text-xl font-bold">
              Customer Satisfaction Guaranteed
            </h3>
            <p>
              Your satisfaction is what keeps us going. If you’re not happy,
              we’ll make it right — guaranteed.
            </p>
          </div>
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
          <CardFooter className={'mt-auto'}>
            <div className="flex w-full justify-evenly">
              <CustomQuoteDrawer buttonStyle={''} />
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
          <CardFooter className={'mt-auto'}>
            <div className="flex w-full justify-between">
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
          <CardFooter className={'mt-auto'}>
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
    </main>
  );
}
