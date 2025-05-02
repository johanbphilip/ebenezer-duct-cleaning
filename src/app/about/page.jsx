import Image from 'next/image'
import React from 'react'

export default async function page() {
  return (
    // <main className='flex flex-col mt-27 pb-10 gap-10'>
    <>
      <section className='flex justify-between px-20 gap-10'>
        <div className='p-20 w-2/3'>
          <h1 className='text-4xl font-bold'>About Ebenezer Duct Cleaning</h1>
          <p>Ebenezer Duct Cleaning, established 2020, is an extremely passionate, capable and dedicated duct cleaning service that serves, Toronto, Durham, Peel and the GTA. We offer residental duct and vent cleaning services, </p>
        </div>
        <div className='flex flex-col gap-4 items-center'>
          <Image src={'/profile-pic.jpg'} width={100} height={100} alt='photo of Ebenezer Duct Cleaning owenr Samuel Varghese alias Binoy' className='w-100' quality={100}/>
          <p className='text-lg font-bold text-dark'>Samuel Varghese (Binoy)</p>
        </div>
      </section>
      <section className='bg-primary text-white flex flex-col p-10 items-center gap-10' >
        <h3 className='font-bold text-3xl'>Why Us?</h3>
        <div className='flex flex-row gap-10'>
          <div className='bg-light-accent p-5 rounded-md text-center'>
            <h3 className='text-dark font-bold'>Card 1</h3>
            <p className='text-dark'>Subtitle/descirption of just h3 and then icon above instead</p>
          </div>
          <div className='bg-light-accent p-5 rounded-md text-center'>
            <h3 className='text-dark font-bold'>Card 2</h3>
            <p className='text-dark'>Subtitle/descirption of just h3 and then icon above instead</p>
          </div>
          <div className='bg-light-accent p-5 rounded-md text-center'>
            <h3 className='text-dark font-bold'>Card 3</h3>
            <p className='text-dark'>Subtitle/descirption of just h3 and then icon above instead</p>
          </div>
        </div>
      </section>
      <section className='flex p-10 justify-between'>
        <div className='flex flex-col '>
          <h2 className='font-black text-3xl'>Trust us for all your duct cleaning needs</h2>
          <p>Call us now to breathe fresh and live free</p>
        </div>
        <div>
          <a className='p-5 rounded-md bg-light-accent font-bold text-2xl text-primary'>123-456-7890</a>
        </div>
      </section>
      </>
    // </main>
  )
}