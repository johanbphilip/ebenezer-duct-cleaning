'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-primary fixed top-0 z-10 flex w-full flex-row items-center justify-between p-10 text-lg text-white">
      <nav className="flex items-center gap-2">
        <Image
          src={'./logo.png'}
          width={100}
          height={100}
          className="size-10"
          alt="Image of Ebenezer Duct Cleaning's logo"
        />
        <Link href={'/'} className="flex font-bold">
          Ebenezer Duct Cleaning
        </Link>
      </nav>
      <nav className="flex flex-row items-center gap-10">
        <Link
          href={'/about'}
          className={`${pathname.includes('/about') ? 'active-link' : ''}`}
        >
          About
        </Link>
        <Link
          href={'/services'}
          className={`${pathname.includes('/services') ? 'active-link' : ''}`}
        >
          Services
        </Link>
        <Link
          href={'/locations'}
          className={`${pathname.includes('/locations') ? 'active-link' : ''}`}
        >
          Locations
        </Link>
        <Link
          href={'/reviews'}
          className={`${pathname.includes('/reviews') ? 'active-link' : ''}`}
        >
          Review
        </Link>
        <a
          href="tel:647-703-6727"
          className="bg-dark hover:bg-light-accent hover:text-dark rounded-md p-3 text-white"
        >
          647-703-6727
        </a>
      </nav>
    </header>
  );
};
