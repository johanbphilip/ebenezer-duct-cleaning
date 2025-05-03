import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  const regions = [
    {
      place: 'Toronto',
      cities: 'Etobicoke | North York | Scarborough',
      image: './toronto.webp',
      description: 'The great city of Toronto',
      alt: 'An image of the Toronto city skyline',
    },
    {
      place: 'Durham',
      cities: 'Ajax | Bowmanville | Oshawa | Pickering | Whitby | Uxbridge',
      image: './durham.jpg',
      description: 'The great region of Durham',
      alt: 'An image of city center Uxbridge',
    },
    {
      place: 'Durham East',
      cities:
        'Bowmanville | Cobourg | Courtice | Newcastle | Port Hope | Port Perry',
      image: './durham east.webp',
      description: 'The beautiful east end of Durham',
      alt: 'An image of city center uxbridge',
    },
    {
      place: 'Peel',
      cities: 'Brampton | Missisauga',
      image: './peel.jpg',
      description: 'The great region of Peel',
      alt: 'An image of city center uxbridge',
    },
    {
      place: 'York',
      cities: 'Markham | Thornhill | Richmond Hill | Vaughan',
      image: './york.jpg',
      description: 'The great region of York',
      alt: 'An image of city center uxbridge',
    },
  ];
  return (
    <main className="mt-27 flex w-full flex-col place-items-center py-10">
      <div className="p-10">
        <h3 className="text-primary mb-10 text-4xl font-bold">
          Duct Cleaning Service Regions
        </h3>
        <p>
          We are pleased to serve all our clients in the Greate Toronto Area
          (GTA). Select a region to see specific cities and/or towns that we
          serve.
        </p>
      </div>
      <div className="grid w-full grid-cols-5 justify-center gap-10 p-10">
        {regions.map((region, index) => (
          <Card
            key={index}
            place={region.place}
            cities={region.cities}
            image={region.image}
            description={region.description}
            alt={region.alt}
          />
        ))}
      </div>
    </main>
  );
}

export const Card = ({ place, cities, image, description, alt }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col p-2">
        <h2 className="text-primary-dark text-2xl font-bold">{place}</h2>
        <p className="text-primary/40 mb-10 text-sm font-bold">{cities}</p>
        <p className="mt-auto">{description}</p>
      </div>
    </div>
  );
};
