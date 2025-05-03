import { CustomImage } from '@/components/CustomImage';
import { Mail, Phone } from 'lucide-react';

export default async function page() {
  return (
    <main className="mt-33 flex w-full flex-col items-center">
      <section className="flex justify-between gap-10 p-20">
        <div className="w-2/3 p-20">
          <h1 className="text-4xl font-bold">About Ebenezer Duct Cleaning</h1>
          <p>
            Ebenezer Duct Cleaning, established 2020, is an extremely
            passionate, capable and dedicated duct cleaning service that serves,
            Toronto, Durham, Peel and the GTA. We offer residental duct and vent
            cleaning services,{' '}
          </p>
        </div>
        <CustomImage
          src={'./profile-pic.jpg'}
          alt={
            "image of Ebenezer Duct Cleaning's owner, Samuel Varghese aka Binoy"
          }
          className={
            'hover-images w-100 rounded-md object-cover shadow-md shadow-gray-400'
          }
          caption={'Samuel Varghese (Binoy)'}
        />
      </section>
      <section className="bg-primary flex w-full flex-col items-center gap-10 p-10 text-white">
        <h3 className="text-3xl font-bold">Why Us?</h3>
        <div className="flex flex-row gap-10">
          <div className="bg-light-accent rounded-md p-5 text-center">
            <h3 className="text-dark font-bold">Reason 1</h3>
            <p className="text-dark">
              Subtitle/descirption of just Reason 1 and then include an icon
              somewhere
            </p>
          </div>
          <div className="bg-light-accent rounded-md p-5 text-center">
            <h3 className="text-dark font-bold">Reason 2</h3>
            <p className="text-dark">
              Subtitle/descirption of just Reason 2 and then include an icon
              somewhere
            </p>
          </div>
          <div className="bg-light-accent rounded-md p-5 text-center">
            <h3 className="text-dark font-bold">Reason 3</h3>
            <p className="text-dark">
              Subtitle/descirption of just Reason 3 and then include an icon
              somewhere
            </p>
          </div>
          <div className="bg-light-accent rounded-md p-5 text-center">
            <h3 className="text-dark font-bold">Reason 4</h3>
            <p className="text-dark">
              Subtitle/descirption of just Reason 4 and then include an icon
              somewhere
            </p>
          </div>
          <div className="bg-light-accent rounded-md p-5 text-center">
            <h3 className="text-dark font-bold">Reason 5</h3>
            <p className="text-dark">
              Subtitle/descirption of just Reason 5 and then include an icon
              somewhere
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-between gap-20 p-20">
        <div className="flex flex-col">
          <h2 className="text-3xl font-black">
            Trust us for all your duct cleaning needs
          </h2>
          <p>Call us now to breathe fresh and live free</p>
        </div>
        <div className="bg-light-accent text-dark flex flex-col gap-2 rounded-md p-5 text-lg">
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
