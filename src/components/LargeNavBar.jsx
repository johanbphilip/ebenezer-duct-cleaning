'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CustomQuoteDrawer } from './CustomQuoteDrawer';
import { ModeToggle } from './ModeToggle';
import { CloudLightning, Menu, X } from 'lucide-react';
import Image from 'next/image';

export const LargeNav = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileNav = () => {
    setMobileIsOpen((prev) => !prev);
  };
  const closeNav = () => {
    setMobileIsOpen(false);
  };
  return (
    <div className="hidden w-full flex-row items-center justify-between lg:flex">
      <nav className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-5">
          <Image
            src={'/logo.png'}
            width={100}
            height={100}
            className="size-10"
            alt="Image of Ebenezer Duct Cleaning's logo"
          />
          <Link href={'/'} className="text-primary flex text-xl font-bold">
            Ebenezer Duct Cleaning
          </Link>
        </div>
      </nav>
      <nav className="bg-primary-foreground flex flex-row items-center justify-between gap-10">
        <ModeToggle />
        <Link
          href={'/about'}
          className={`${pathname.includes('/about') ? 'active-link' : ''} hover-link px-5 py-2 font-bold`}
          onClick={closeNav}
        >
          About
        </Link>
        <Link
          href={'/services'}
          className={`${pathname.includes('/services') ? 'active-link' : ''} hover-link px-5 py-2 font-bold`}
          onClick={closeNav}
        >
          Services
        </Link>
        <Link
          href={'/locations'}
          className={`${pathname.includes('/locations') ? 'active-link' : ''} hover-link px-5 py-2 font-bold`}
          onClick={closeNav}
        >
          Locations
        </Link>
        <Link
          href={'/reviews'}
          className={`${pathname.includes('/reviews') ? 'active-link' : ''} hover-link px-5 py-2 font-bold`}
          onClick={closeNav}
        >
          Review
        </Link>

        <CustomQuoteDrawer
          size={'lg'}
          buttonStyle={'bg-primary text-lg font-semibold'}
        />
      </nav>
    </div>
  );
};
