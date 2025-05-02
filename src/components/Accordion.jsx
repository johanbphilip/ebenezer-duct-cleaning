import { ChevronDown, Clock8, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react'

export const Accordion = ({items, className}) => {
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

const AccordionItem = ( { title, content, isActive, onClick, icon}) => {
  return (
    <div className='text-primary-dark w-full bg-light-accent p-5 mb-5 rounded-md' onClick={onClick}>
        <h3 className='font-bold text-lg flex justify-between items-center'>
          <div className='flex gap-2'>
            {icon}
            {title}
          </div>
          <ChevronDown 
          className={` ${
            isActive ? 'rotate-180 transform' : ''
          } transition-transform duration-300 ease-in-out`}/>
        </h3>
      {isActive && ( 
        <p className='text-md mt-5'>{content}</p>
        )
      }
    </div>
)
}