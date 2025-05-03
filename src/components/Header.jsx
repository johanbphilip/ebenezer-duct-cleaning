'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className='w-full p-10 flex flex-row justify-between bg-primary text-white text-lg fixed top-0 items-center'>
      <Link href={"/"} className='font-bold'>Ebenezer Duct Cleaning</Link>
      <nav className='flex flex-row gap-10 items-center'>
          <Link href={'/about'} className={`${pathname.includes('/about') ? 'active-link' : ''}`}>About</Link>
          <Link href={'/services'} className={`${pathname.includes('/services') ? 'active-link' : ''}`}>Services</Link>
          <Link href={'/locations'} className={`${pathname.includes('/locations') ? 'active-link' : ''}`}>Locations</Link>
          <Link href={'/reviews'} className={`${pathname.includes('/reviews') ? 'active-link' : ''}`}>Review</Link>
          <a href='tel:647-703-6727' className='bg-dark text-white rounded-md p-3 hover:bg-light-accent hover:text-dark'>647-703-6727</a>
      </nav>
    </header>
  )
}
