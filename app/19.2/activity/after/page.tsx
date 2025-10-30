'use client';

import { Button } from '@/components/ui/button';
import { Activity, Suspense, useState } from 'react';
import Home from '../_components/Home';
import Tasks from '../_components/Tasks';

export default function After() {
  const [tab, setTab] = useState<'home' | 'tasks'>('home');

  return (
    <>
      <div className="bg-blue-50 bg-opacity-50 rounded-md grid grid-cols-1 gap-4 p-4">
        <h1 className="text-blue-700 font-bold text-2xl">After</h1>
        <div className="flex gap-4">
          <Button
            onClick={() => setTab('home')}
            variant={tab === 'home' ? 'default' : 'outline'}
          >
            Home
          </Button>
          <Button
            onClick={() => setTab('tasks')}
            variant={tab === 'tasks' ? 'default' : 'outline'}
          >
            Tasks
          </Button>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Activity mode={tab === 'home' ? 'visible' : 'hidden'}>
            <Home />
          </Activity>
          <Activity mode={tab === 'tasks' ? 'visible' : 'hidden'}>
            <Tasks />
          </Activity>
        </Suspense>
      </div>
    </>
  );
}
