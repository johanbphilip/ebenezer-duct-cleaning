'use client'

import { Accordion } from "@/components/Accordion";
import { Clock8, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const items = [
        {
          title: "Working Hour",
          content: "Monday to Saturday 8am-6pm",
          icon: <Clock8 />
        }, 
        {
          title: "Locations Served",
          content: "GTA, Durham, Peel",
          icon: <MapPin />
        }, 
        {
          title: "Contact & Support",
          content: "For any questions, concerns or inquiries, please contact us at 123-456-7890",
          icon: <Phone />
        }
      ]
  return (
    <>
      <Image src={"/duc1.webp"} width={100} height={100} quality={100} alt="Man cleaning an airduct" className="w-1/2 rounded-md" />
      <section className="text-center py-10 flex flex-col gap-4">
        <div className="bg-light-accent p-10">
          <h1 className="text-2xl font-bold text-primary-dark">RESIDENTIAL AND COMMERCIAL DUCT CLEANING SERVICE</h1> 
          <p>At Ebenezer Duct Cleaning, we’re passionate about helping families and businesses breathe cleaner, healthier air. With a commitment to excellence and customer satisfaction, we go above and beyond to ensure every duct system is spotless and efficient. We use top-of-the-line equipment and proven techniques to remove dust, allergens, and contaminants from your airways. We take pride in our meticulous work and honest service, treating every space like it’s our own. Whether it’s your home or office, you can trust us to deliver fresh air and peace of mind. Clean air isn’t just our job — it’s our mission.</p>
        </div>
        <div className="flex flex-row gap-5 p-10">
          <div className="flex flex-col items-center w-full justify-between">
            <Image src={"/duct-cleaning.jpg"} width={100} height={100} alt="duct being cleaned" className="rounded-md w-100"></Image>
            <p className="text-primary font-bold">Duct Cleaning</p>
          </div>
          <div className="flex flex-col items-center w-full justify-between">
            <Image src={"/vent-cleaning.jpg"} width={100} height={100} alt="vent being cleaned" className="rounded-md w-100"></Image>
            <p className="text-primary font-bold">Vent Cleaning</p>
          </div>
          <div className="flex flex-col items-center w-full justify-between">
            <Image src={"/duct-vent-repair.jpg"} width={100} height={100} alt="duct being cleaned" className="rounded-md w-100"></Image>
            <p className="text-primary font-bold">Duct & Vent Repair</p>
          </div>
          <div className="flex flex-col items-center w-full justify-between">
            <Image src={"/waste-disposal.webp"} width={100} height={100} alt="duct being cleaned" className="rounded-md  w-100"></Image>
            <p className="text-primary font-bold">Waste Disposal</p>
          </div>
        </div>
      </section>
      <section className="flex flex-row p-10 bg-dark w-full text-light-accent gap-20">
        <div className="">
          <h2 className="font-bold text-lg">
            Passionate, Dedicated and Dependable
          </h2>
          <p className="text-white">When you book a service date with Ebenezer Duct Cleaning, you know that you will get our best work. We will work to ensure that you get your money's worth and that your ducts and vents are left spotless.</p>
        </div>
        <Accordion items={items} className={'w-full text-white'}/>
      </section>
    </>
    
  );
}
