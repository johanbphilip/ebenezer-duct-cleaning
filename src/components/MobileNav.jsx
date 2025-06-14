'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CustomQuoteDrawer } from './CustomQuoteDrawer';
import { ModeToggle } from './ModeToggle';
import { CloudLightning, Menu, X } from 'lucide-react';
import Image from 'next/image';

export const MobileNav = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileNav = () => {
    setMobileIsOpen((prev) => !prev);
  };
  const closeNav = () => {
    setMobileIsOpen(false);
  };
  return (
    <>
      <nav className="flex w-full flex-row items-center justify-between lg:hidden">
        <div className="flex flex-row items-center gap-5">
          <Image
            src={'/logo.png'}
            width={100}
            height={100}
            className="size-10"
            alt="Image of Ebenezer Duct Cleaning's logo"
          ></Image>
        </div>
        <div className="flex flex-row items-center gap-10">
          <ModeToggle />
          <Menu onClick={toggleMobileNav} />
        </div>
      </nav>

      {mobileIsOpen && (
        <nav className="bg-primary-foreground absolute top-0 right-0 flex h-screen w-screen flex-col items-center justify-evenly py-20">
          <X className="fixed top-5 right-5 size-8" onClick={closeNav} />
          <Link
            href={'/'}
            className={`${pathname.includes('/about') ? 'active-link' : ''} hover-link border-primary rounded-md border px-10 py-2 font-bold`}
            onClick={closeNav}
          >
            Home
          </Link>
          <Link
            href={'/about'}
            className={`${pathname.includes('/about') ? 'active-link' : ''} hover-link border-primary rounded-md border px-10 py-2 font-bold`}
            onClick={closeNav}
          >
            About
          </Link>
          <Link
            href={'/services'}
            className={`${pathname.includes('/services') ? 'active-link' : ''} hover-link border-primary rounded-md border px-10 py-2 font-bold`}
            onClick={closeNav}
          >
            Services
          </Link>
          <Link
            href={'/locations'}
            className={`${pathname.includes('/locations') ? 'active-link' : ''} hover-link border-primary rounded-md border px-10 py-2 font-bold`}
            onClick={closeNav}
          >
            Locations
          </Link>
          <Link
            href={'/reviews'}
            className={`${pathname.includes('/reviews') ? 'active-link' : ''} hover-link border-primary rounded-md border px-10 py-2 font-bold`}
            onClick={closeNav}
          >
            Review
          </Link>

          <CustomQuoteDrawer
            size={'lg'}
            buttonStyle={'bg-primary text-lg font-semibold'}
          />
        </nav>
      )}
    </>
  );
};
