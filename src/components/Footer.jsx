import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='bg-dark text-white w-full bottom-0 right-0 p-10 flex flex-col items-center gap-10'>
      <div className='flex flex-row gap-40'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>
            Ebenezer Duct <br/>Cleaning
          </h2>
          <div className='flex flex-col'>
            <p>8 Coe Dr, Ajax, ON</p>
            <p>L1T 3H9, Canada</p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>
            Important Links
          </h2>
          <div className='flex flex-col'>
            <Link href={'/about'} className='underline hover:text-light-accent underline-offset-2'>About</Link>
            <Link href={'/services'} className='underline hover:text-light-accent underline-offset-2'>Services</Link>
            <Link href={'/contact'} className='underline hover:text-light-accent underline-offset-2'>Contact</Link>
            <Link href={'/about'} className='underline hover:text-light-accent underline-offset-2'>Review</Link>
          </div>
        </div>
      </div>
      <p>&copy; {date} Ebenezer Duct Cleaning. All Rights Reserved. Designed by <a href={"https://github.com/johanbphilip"} target='_blank'>Johan Philip</a></p>
    </footer>
  )
}
