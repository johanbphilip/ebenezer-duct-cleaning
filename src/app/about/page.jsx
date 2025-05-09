import { Mail, Phone } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Image from 'next/image';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default async function page() {
  const works = [
    {
      before: '/profile-pic.jpg',
      after: '/profile-pic.jpg',
    },
    {
      before: '/profile-pic.jpg',
      after: '/profile-pic.jpg',
    },
    {
      before: '/profile-pic.jpg',
      after: '/profile-pic.jpg',
    },
    {
      before: '/profile-pic.jpg',
      after: '/profile-pic.jpg',
    },
    {
      before: '/profile-pic.jpg',
      after: '/profile-pic.jpg',
    },
    {
      before: '/profile-pic.jpg',
      after: '/profile-pic.jpg',
    },
  ];
  return (
    <main className="mt-18 flex w-full flex-col items-center text-base lg:mt-31">
      <section className="bg-primary-foreground grid grid-cols-1 items-center gap-10 p-10 md:grid-cols-2 md:p-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-primary text-4xl font-bold">
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
            src={'/profile-pic.jpg'}
            width={100}
            height={100}
            className="hover-images w-full rounded-md object-cover shadow-md md:w-80"
            alt="image of Ebenezer Duct Cleaning's owner, Samuel Varghese aka Binoy"
          />
          <p className="text-primary font-bold">
            Samuel Varghese (Binoy), Founder
          </p>
        </div>
      </section>
      <section className="grid w-full grid-cols-2 flex-col items-center gap-10 p-10 md:flex md:p-20">
        <h3 className="text-primary text-4xl font-bold">Why Us?</h3>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="rounded-md p-5 text-center">
            <h3 className="font-bold">Reason 1</h3>
            <p className="">
              Subtitle/descirption of just Reason 1 and then include an icon
              somewhere
            </p>
          </div>
          <div className="rounded-md p-5 text-center">
            <h3 className="font-bold">Reason 2</h3>
            <p className="">
              Subtitle/descirption of just Reason 2 and then include an icon
              somewhere
            </p>
          </div>
          <div className="rounded-md p-5 text-center">
            <h3 className="font-bold">Reason 3</h3>
            <p className="">
              Subtitle/descirption of just Reason 3 and then include an icon
              somewhere
            </p>
          </div>
          <div className="rounded-md p-5 text-center">
            <h3 className="font-bold">Reason 4</h3>
            <p className="">
              Subtitle/descirption of just Reason 4 and then include an icon
              somewhere
            </p>
          </div>
          <div className="rounded-md p-5 text-center">
            <h3 className="font-bold">Reason 5</h3>
            <p className="">
              Subtitle/descirption of just Reason 5 and then include an icon
              somewhere
            </p>
          </div>
        </div>
      </section>
      <section className="bg-foreground text-background flex w-full flex-col items-center gap-10 p-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-3xl font-black">
            Trust us for all your duct cleaning needs
          </h2>
          <p>
            Call us now to breathe fresh and live free. Available Monday to
            Saturday, 8 AM to 6 PM
          </p>
        </div>
        <div className="flex w-full justify-evenly">
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
      <section className="flex w-full flex-col items-center justify-center gap-20 p-20 px-30">
        <h3 className="text-primary text-6xl font-bold">Our Works</h3>
        <Carousel className="w-full">
          <CarouselContent className="-ml-10">
            {works.map((work, index) => (
              <CarouselItem
                key={index}
                className="pl-10 md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  className={
                    'bg-accent-foreground text-background flex flex-row items-center gap-4 p-4 pb-2'
                  }
                >
                  <CardContent
                    className={'flex w-1/2 flex-col items-center gap-2 p-0'}
                  >
                    <Image
                      src={work.before}
                      width={100}
                      height={100}
                      alt="something"
                      className="w-full rounded-md"
                    />
                    <CardDescription>Before</CardDescription>
                  </CardContent>
                  <CardContent
                    className={'flex w-1/2 flex-col items-center gap-2 p-0'}
                  >
                    <Image
                      src={work.after}
                      width={100}
                      height={100}
                      alt="something"
                      className="w-full rounded-md"
                    />
                    <CardDescription>After</CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
