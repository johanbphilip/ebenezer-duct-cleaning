import { Mail, Phone } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default async function page() {
  const works = [
    {
      before: '/edc - 8.jpeg',
      after: '/edc - 10.jpeg',
    },
    {
      before: '/edc - 29.jpeg',
      after: '/edc - 2.jpeg',
    },
  ];
  return (
    <main className="mt-18 flex w-full flex-col items-center text-base lg:mt-19">
      <section className="bg-primary-foreground grid grid-cols-1 items-center gap-10 p-10 md:grid-cols-2 md:p-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-primary text-6xl font-bold">
            A Local Name You Can Trust. A Team That Cares.
          </h1>
          <p className="text-black">
            At <strong className="text-primary">Ebenezer Duct Cleaning </strong>
            , we believe clean air is essential — not a luxury. We’re a proud
            family-owned business serving our local community with reliable,
            affordable duct cleaning services.
          </p>
          <p className="text-black">
            We're not just technicians — we're your neighbors. That’s why we
            treat every home and business like it’s our own: with respect,
            attention to detail, and a commitment to doing the job right the
            first time.
          </p>
          <p className="text-black">
            With years of experience and industry-certified training, we’ve
            helped countless customers improve their air quality, reduce energy
            bills, and gain peace of mind. Whether it's your first duct cleaning
            or you're overdue for a professional refresh, we’re here to help.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image
            src={'/edc - 16.jpeg'}
            width={100}
            height={100}
            className="hover-images w-full rounded-md object-cover shadow-md md:w-80"
            alt="image of Ebenezer Duct Cleaning's owner, Samuel Varghese aka Binoy"
            unoptimized={true}
          />
          <p className="text-primary font-bold">
            Samuel Varghese (Binoy), Founder
          </p>
        </div>
      </section>
      <section className="grid w-full grid-cols-2 grid-rows-3 flex-col items-center gap-5 p-10 text-left md:py-20 lg:px-80">
        <h2 className="text-primary text-5xl font-bold">Why Us?</h2>
        <Card className={'flex-1'}>
          <CardContent>
            <CardTitle className={'text-primary text-xl'}>
              Locally Owned & Family Operated
            </CardTitle>
            <p>
              Ebenezer Duct Cleaning is proudly rooted in the community,
              offering personalized service you can trust — no call centers or
              cookie-cutter solutions.
            </p>
          </CardContent>
        </Card>
        <Card className={'flex-1'}>
          <CardContent>
            <CardTitle className={'text-primary text-xl'}>
              Exceptional Cleaning Standards
            </CardTitle>
            <p>
              We go beyond surface-level cleaning. Our team uses
              industry-leading equipment to remove dust, allergens, mold, and
              debris for truly fresh, breathable air.
            </p>
          </CardContent>
        </Card>
        <Card className={'flex-1'}>
          <CardContent>
            <CardTitle className={'text-primary text-xl'}>
              On-Time & Professional Service
            </CardTitle>
            <p>
              We respect your time. Our technicians arrive promptly, wear
              protective gear, and treat your home like it’s their own — clean,
              courteous, and careful.
            </p>
          </CardContent>
        </Card>

        <Card className={'flex-1'}>
          <CardContent>
            <CardTitle className={'text-primary text-xl'}>
              Healthier Home Environment{' '}
            </CardTitle>
            <p>
              Clean ducts mean cleaner air — reducing allergy symptoms,
              improving HVAC efficiency, and promoting a healthier indoor
              environment for your family.
            </p>
          </CardContent>
        </Card>
        <Card className={'flex-1'}>
          <CardContent>
            <CardTitle className={'text-primary text-xl'}>
              Trusted by Customers{' '}
            </CardTitle>
            <p>
              Backed by glowing reviews and loyal clients, we’ve earned a
              reputation for quality service and reliable results.
            </p>
          </CardContent>
        </Card>
      </section>
      <section className="bg-foreground text-background flex w-full flex-col place-items-center items-center gap-10 p-10 text-center md:p-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-4xl font-bold">
            Trust us for all your duct cleaning needs
          </h2>
          <p>
            Call us now to breathe fresh and live free. Available Monday to
            Saturday, 8 AM to 6 PM.
          </p>
        </div>
        <div className="flex w-full items-center justify-center gap-10">
          <Button asChild size={'lg'} className={'p-5 text-xl'}>
            <a href={'tel:647-703-6727'}>Call Us</a>
          </Button>
          <Button
            asChild
            variant={'outline'}
            size={'lg'}
            className={'dark:bg-background bg-foreground text-primary'}
          >
            <a href={'mailto:ebenezerductcleaning@gmail.com'}>Email Us</a>
          </Button>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-10 p-20 px-15 md:px-30">
        <h2 className="text-primary text-5xl font-bold">Our Works</h2>
        <Carousel className="w-1/2 md:w-full" opts={{ align: 'start' }}>
          <CarouselContent className="-ml-1 lg:-ml-4">
            {works.map((work, index) => (
              <CarouselItem key={index} className="pl-1 lg:basis-1/3 lg:pl-4">
                <Card
                  className={
                    'flex flex-col items-center gap-4 p-4 pb-2 md:flex-row md:gap-2 md:p-2 md:pb-1'
                  }
                >
                  <CardContent
                    className={
                      'flex w-full flex-col items-center gap-2 p-0 md:gap-1'
                    }
                  >
                    <Image
                      src={work.before}
                      width={100}
                      height={100}
                      alt="image of duct before servicing; the duct was dirty and full or debris"
                      className="w-full rounded-md"
                      unoptimized={true}
                    />
                    <CardDescription>Before</CardDescription>
                  </CardContent>
                  <CardContent
                    className={
                      'flex w-full flex-col items-center gap-2 p-0 md:gap-1'
                    }
                  >
                    <Image
                      src={work.after}
                      width={100}
                      height={100}
                      alt="image of duct after servicing; the duct is in significantly better shape"
                      className="w-full rounded-md"
                      unoptimized={true}
                    />
                    <CardDescription>After</CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className={'size-7'} />
          <CarouselNext className={'size-7'} /> */}
        </Carousel>
      </section>
    </main>
  );
}
