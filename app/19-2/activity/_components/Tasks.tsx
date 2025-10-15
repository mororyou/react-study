'use client';

import { fetchData, type Task } from '@/hooks/fetcher';
import { use } from 'react';

export default function Tasks() {
  const tasks: Task[] = use(fetchData('/posts'));
  return (
    <div>
      {tasks.map((task: any) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
