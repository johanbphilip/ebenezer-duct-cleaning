import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-primary-foreground right-0 bottom-0 flex w-full flex-col items-center gap-10 p-10 text-black">
      <div className="flex flex-row gap-40">
        <div className="flex flex-row gap-4">
          <Image
            src={'./logo.png'}
            width={100}
            height={100}
            className="size-40"
            alt="Image of Ebenezer Duct Cleaning's logo"
          />
          <div className="flex flex-col">
            <h2 className="text-primary text-xl font-bold">
              Ebenezer Duct Cleaning
            </h2>
            <p>8 Coe Dr, Ajax, ON</p>
            <p>L1T 3H9, Canada</p>
            <a
              type="tel"
              href="tel:647-703-6727"
              className="mt-auto flex items-center gap-2"
            >
              <Phone />
              647-703-6727
            </a>
            <a
              type="email"
              href="mailto:ebenezerductcleaning@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail />
              647-703-6727
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Important Links</h2>
          <div className="flex flex-col">
            <Link
              href={'/about'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              About
            </Link>
            <Link
              href={'/services'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              Services
            </Link>
            <Link
              href={'/locations'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              Location
            </Link>
            <Link
              href={'/contact'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              Contact
            </Link>
            <Link
              href={'/about'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              Reviews
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Locations Served</h2>
          <div className="flex flex-col">
            <Link
              href={'/locations'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              Toronto
            </Link>
            <Link
              href={'/locations'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              Durham
            </Link>
            <Link
              href={'/locations'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              Durham East
            </Link>
            <Link
              href={'/locations'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              Peel
            </Link>
            <Link
              href={'/locations'}
              className="hover:text-light-accent underline underline-offset-2"
            >
              York
            </Link>
          </div>
        </div>
      </div>
      <p>
        &copy; {date} Ebenezer Duct Cleaning. All Rights Reserved. Designed by{' '}
        <a
          href={'https://github.com/johanbphilip'}
          target="_blank"
          className="text-primary"
        >
          Johan Philip
        </a>
      </p>
    </footer>
  );
};
