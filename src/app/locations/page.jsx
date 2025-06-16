import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Locations',
  description:
    'Ebenezer Duct Cleaning serves the Greater Toronto Area (GTA) including Durham, Peel, and York regions. If you dont see your location, please contact us.',
  keywords: [
    'Ebenezer Duct Cleaning',
    'Duct Cleaning',
    'Locations Served',
    'Durham',
    'Peel',
    'GTA',
    'Toronto',
    'York',
    'Durham Region',
    'Ajax',
    'Bowmanville',
    'Oshawa',
    'Pickering',
    'Whitby',
    'Uxbridge',
    'Brampton',
    'Mississauga',
    'Markham',
    'Thornhill',
    'Richmond Hill',
    'Vaughan',
    'Scarborough',
    'North York',
    'Etobicoke',
    'Newcastle',
    'Cobourg',
    'Port Hope',
    'Port Perry',
  ],
  openGraph: {
    title: 'Locations | Ebenezer Duct Cleaning',
    description:
      'Ebenezer Duct Cleaning serves the Greater Toronto Area (GTA) including Durham, Peel, and York regions. If you dont see your location, please contact us.',
    url: 'https://ebenezer-duct-cleaning.vercel.app/locations',
    siteName: 'Ebenzezer Duct Cleaning',
    images: [
      {
        url: '/og/og-locations.png', // Must be an absolute URL
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
};
export default function page() {
  const regions = [
    {
      place: 'Toronto',
      cities: 'Etobicoke | North York | Scarborough',
      image: '/locations/toronto.webp',
      description: 'The great city of Toronto',
      alt: 'An image of the Toronto city skyline',
    },
    {
      place: 'Durham',
      cities: 'Ajax | Bowmanville | Oshawa | Pickering | Whitby | Uxbridge',
      image: '/locations/durham.jpg',
      description: 'The great region of Durham',
      alt: 'An image of city center Uxbridge',
    },
    {
      place: 'Durham East',
      cities:
        'Bowmanville | Cobourg | Courtice | Newcastle | Port Hope | Port Perry',
      image: '/locations/durham east.webp',
      description: 'The beautiful east end of Durham',
      alt: 'An image of city center uxbridge',
    },
    {
      place: 'Peel',
      cities: 'Brampton | Missisauga',
      image: '/locations/peel.jpg',
      description: 'The great region of Peel',
      alt: 'An image of city center uxbridge',
    },
    {
      place: 'York',
      cities: 'Markham | Thornhill | Richmond Hill | Vaughan',
      image: '/locations/york.jpg',
      description: 'The great region of York',
      alt: 'An image of city center uxbridge',
    },
  ];
  return (
    <main className="mt-18 flex w-full flex-col place-items-center py-10 lg:mt-19">
      <div className="p-10">
        <h1 className="text-primary text-6xl font-bold">
          Duct Cleaning Service Regions
        </h1>
        <p className="mt-2">
          We are pleased to serve all our clients in the Greater Toronto Area
          (GTA).
        </p>
      </div>
      <div className="grid w-full grid-cols-1 justify-center gap-10 p-10 md:grid-cols-5">
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

const Card = ({ place, cities, image, description, alt }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col p-2">
        <h2 className="text-primary text-2xl font-bold">{place}</h2>
        <p className="text-secondary mb-10 text-sm font-bold">{cities}</p>
        <p className="mt-auto">{description}</p>
      </div>
    </div>
  );
};
