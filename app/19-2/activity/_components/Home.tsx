'use client';

import { Button } from '@/components/ui/button';
import { Activity, useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="cursor-pointer"
      >
        {!isOpen ? 'Open' : 'Closed'}
      </Button>
      <Activity mode={isOpen ? 'visible' : 'hidden'}>
        {isOpen ? 'Open' : 'Closed'}
      </Activity>
    </div>
  );
}
