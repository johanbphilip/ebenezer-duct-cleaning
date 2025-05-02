'use client'

import { Accordion } from "@/components/Accordion";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const locations = [ 
    {
      title: "Toronto Area",
      content: 'Toronto\nRichmond Hill\n',
    }
  ]
  return (
    <>
      <div className="p-10 ">
        <h3 className="font-bold text-4xl text-primary mb-10">
          Duct Cleaning Service Regions
        </h3>
        <p>We are pleased to serve all our clients in the Greate Toronto Area (GTA). Select a region to see specific cities and/or towns that we serve.</p>
      </div>
      <div className="p-10 flex gap-10 justify-center">
        <Link href={'locations/toronto-region'} className="rounded-full size-50 bg-light-accent flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-primary flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-dark">Toronto Region</h3>
          </div>
        </Link>
        <Link href={'locations/durham-region'} className="rounded-full size-50 bg-primary flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-light-accent flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-white">Durham Region</h3>
          </div>
        </Link>
        <Link href={'locations/york-region'} className="rounded-full size-50 bg-light-accent flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-primary flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-dark">York Region</h3>
          </div>
        </Link>
        <Link href={'locations/peel-region'} className="rounded-full size-50 bg-primary flex items-center justify-center">
          <div className="rounded-full size-46 border-4 border-light-accent flex flex-col text-center justify-center">
            <h3 className="font-bold text-lg leading-tight tracking-tighter text-white">Peel Region</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
