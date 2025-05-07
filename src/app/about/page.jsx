import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default async function page() {
  return (
    <main className="mt-31 flex w-full flex-col items-center text-base">
      <section className="bg-primary-foreground flex justify-between gap-10 p-20">
        <div className="flex w-2/3 flex-col gap-5 p-10">
          <h1 className="text-primary text-4xl font-bold">
            A Local Name You Can Trust. A Team That Cares.
          </h1>
          <p className="text-black">
            At Ebenezer Duct Cleaning, we believe clean air is essential — not a
            luxury. We’re a proud family-owned business serving our local
            community with reliable, affordable duct cleaning services.
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
            src={'./profile-pic.jpg'}
            width={100}
            height={100}
            className="hover-images w-80 rounded-md object-cover shadow-md"
            alt="image of Ebenezer Duct Cleaning's owner, Samuel Varghese aka Binoy"
          />
          <p className="text-text font-bold">Samuel Varghese (Binoy)</p>
        </div>
      </section>
      <section className="flex w-full flex-col items-center gap-10 p-10">
        <h3 className="text-primary text-3xl font-bold">Why Us?</h3>
        <div className="flex flex-row gap-10">
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
      <section className="bg-foreground text-background flex w-full items-center justify-between gap-20 p-20">
        <div className="flex flex-col">
          <h2 className="text-primary text-3xl font-black">
            Trust us for all your duct cleaning needs
          </h2>
          <p>Call us now to breathe fresh and live free</p>
        </div>
        <div className="flex flex-col gap-2 rounded-md p-5 text-lg">
          <a
            className="flex items-center gap-2 underline underline-offset-2"
            type="tel"
            href="tel:647-703-6727"
          >
            <Phone className="text-primary" />
            647-703-6727
          </a>
          <a
            href="mailto:johanbp27@gmail.com"
            type="email"
            className="flex items-center gap-2"
          >
            <Mail className="text-primary" />
            ebenezerductcleaning@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
