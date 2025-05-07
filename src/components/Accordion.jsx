'use client';
import { ChevronDown, Clock8, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

export const Accordion = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => toggleItem(index)}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, content, isActive, onClick, icon }) => {
  return (
    <div
      className="mb-5 w-full rounded-md border p-5 shadow-md"
      onClick={onClick}
    >
      <h3 className="flex items-center justify-between text-lg font-bold">
        <div className="flex gap-2">
          {icon}
          {title}
        </div>
        <ChevronDown
          className={` ${
            isActive ? 'rotate-180 transform' : ''
          } transition-transform duration-300 ease-in-out`}
        />
      </h3>
      {isActive && <p className="text-md mt-5">{content}</p>}
    </div>
  );
};
