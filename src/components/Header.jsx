'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MobileNav } from './MobileNav';
import { LargeNav } from './LargeNavBar';

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-primary-foreground fixed top-0 z-10 flex w-full flex-row items-center justify-between p-4 text-lg text-black md:p-10">
      <MobileNav />
      <LargeNav />
    </header>
  );
};
// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React from 'react';
// import { ModeToggle } from './ModeToggle';
// import { CustomQuoteDrawer } from './CustomQuoteDrawer';
// import { toast } from 'sonner';

// export const Header = () => {
//   const pathname = usePathname();
//   return (
//     <header className="bg-primary-foreground fixed top-0 z-10 flex w-full flex-row items-center justify-between p-10 text-lg text-black">
//       <nav className="flex flex-row items-center gap-2">
//         <Image
//           src={'/logo.png'}
//           width={100}
//           height={100}
//           className="size-10"
//           alt="Image of Ebenezer Duct Cleaning's logo"
//         />
//         <Link href={'/'} className="flex font-bold">
//           Ebenezer Duct Cleaning
//         </Link>
//       </nav>
//       <nav className="flex flex-row items-center gap-10">
//         <ModeToggle />
//         <Link
//           href={'/about'}
//           className={`${pathname.includes('/about') ? 'active-link' : ''} hover-link px-5 py-2 font-bold`}
//         >
//           About
//         </Link>
//         <Link
//           href={'/services'}
//           className={`${pathname.includes('/services') ? 'active-link' : ''} hover-link px-5 py-2 font-bold`}
//         >
//           Services
//         </Link>
//         <Link
//           href={'/locations'}
//           className={`${pathname.includes('/locations') ? 'active-link' : ''} hover-link px-5 py-2 font-bold`}
//         >
//           Locations
//         </Link>
//         <Link
//           href={'/reviews'}
//           className={`${pathname.includes('/reviews') ? 'active-link' : ''} hover-link px-5 py-2 font-bold`}
//         >
//           Review
//         </Link>
//         {/* <Link
//           href={'/quote'}
//           className="bg-primary rounded-md px-5 py-2 font-bold"
//         >
//           Get A Quote
//         </Link> */}
//         <CustomQuoteDrawer
//           size={'lg'}
//           buttonStyle={'bg-primary text-lg font-semibold'}
//         />
//       </nav>
//     </header>
//   );
// };
