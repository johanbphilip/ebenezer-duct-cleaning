'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { QuoteForm } from './QuoteForm';

export const CustomQuoteDrawer = ({ size, buttonStyle }) => {
  const closeButtonRef = React.useRef(null);

  const handleSuccess = () => {
    // Close the drawer after a short delay to allow the toast to be visible
    setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.click();
      }
    }, 1000);
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className={buttonStyle} size={size}>
          Get Quote
        </Button>
      </DrawerTrigger>
      <DrawerContent className={'flex flex-col items-center gap-0'}>
        <DrawerHeader className={'w-full px-2 md:w-1/2 md:px-0'}>
          <DrawerTitle className={'text-primary'}>Get A Quote</DrawerTitle>
        </DrawerHeader>
        <div className="flex w-full flex-col items-center px-2">
          <QuoteForm onSuccess={handleSuccess} />
          <DrawerFooter className={'mb-4 w-full px-0 py-2 md:w-1/2 md:py-4'}>
            <DrawerClose asChild>
              <Button ref={closeButtonRef} variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
