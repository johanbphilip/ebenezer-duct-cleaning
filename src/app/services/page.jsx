import { Phone } from 'lucide-react';

export default function page() {
  return (
    <main className="mt-33 flex flex-col items-center">
      <section className="flex w-full flex-row justify-between p-30">
        <h2 className="text-primary p-10 text-3xl font-bold">
          Services Provided
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col shadow-md">
            <div className="bg-primary flex w-60 items-center justify-center rounded-t-xl p-10">
              <Phone className="size-10 text-white" />
            </div>
            <div className="flex flex-col p-2">
              <h3 className="text-dark text-xl font-bold">Service 1</h3>
              <p>Service 1 Description</p>
            </div>
          </div>
          <div className="flex flex-col shadow-md">
            <div className="bg-primary flex w-60 items-center justify-center rounded-t-xl p-10">
              <Phone className="size-10 text-white" />
            </div>
            <div className="flex flex-col p-2">
              <h3 className="text-dark text-xl font-bold">Service 2</h3>
              <p>Service 2 Description</p>
            </div>
          </div>
          <div className="flex flex-col shadow-md">
            <div className="bg-primary flex w-60 items-center justify-center rounded-t-xl p-10">
              <Phone className="size-10 text-white" />
            </div>
            <div className="flex flex-col p-2">
              <h3 className="text-dark text-xl font-bold">Service 3</h3>
              <p>Service 3 Description</p>
            </div>
          </div>
          <div className="flex flex-col shadow-md">
            <div className="bg-primary flex w-60 items-center justify-center rounded-t-xl p-10">
              <Phone className="size-10 text-white" />
            </div>
            <div className="flex flex-col p-2">
              <h3 className="text-dark text-xl font-bold">Service 4</h3>
              <p>Service 4 Description</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
