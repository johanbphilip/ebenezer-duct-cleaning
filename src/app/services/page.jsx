import { Phone } from 'lucide-react';

export default function page() {
  return (
    <main className="mt-18 flex flex-col items-center lg:mt-31">
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

// Our Services
// 	1	Residential Duct CleaningImprove indoor air quality, reduce dust and allergens, and boost HVAC efficiency in your home.
// 	2	Commercial Duct CleaningTailored solutions for offices, clinics, restaurants, and other businesses — helping create a safer, cleaner work environment.
// 	3	Dryer Vent CleaningPrevent fire hazards and improve dryer performance with a thorough vent cleaning service.
// 	4	HVAC System CleaningComprehensive cleaning of your furnace, coils, blowers, and more to ensure smooth operation year-round.
// 	5	Mold & Odor TreatmentIf your ducts smell musty or show signs of mold, we use safe, effective treatments to eliminate odors and growth.
// 	6	Air Filter ReplacementKeep your air fresh and systems running smoothly with regular filter changes — we’ll recommend and install the best option for your needs.
// 	7	Pre-Sale Home Duct CleaningSelling your home? Clean ducts can be a big selling point. We’ll help you make a great impression.
