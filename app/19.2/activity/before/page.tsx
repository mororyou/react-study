'use client';

import { Button } from '@/components/ui/button';
import { Suspense, useState } from 'react';
import Home from '../_components/Home';
import Tasks from '../_components/Tasks';

export default function Before() {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks'>('home');

  return (
    <div className="bg-green-50 bg-opacity-50 rounded-md p-4 grid grid-cols-1 gap-4">
      <h1 className="text-green-700 font-bold text-2xl">Before</h1>
      <div className="flex gap-4">
        <Button
          onClick={() => setActiveTab('home')}
          variant={activeTab === 'home' ? 'default' : 'outline'}
        >
          Home
        </Button>
        <Button
          onClick={() => setActiveTab('tasks')}
          variant={activeTab === 'tasks' ? 'default' : 'outline'}
        >
          Tasks
        </Button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {activeTab === 'home' && <Home />}
        {activeTab === 'tasks' && <Tasks />}
      </Suspense>
    </div>
  );
}
