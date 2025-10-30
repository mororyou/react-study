'use client';

import { getTodos } from '@/hooks/fetcher';
import { Task } from '@/types';
import { use } from 'react';

// モジュールレベルで一度だけPromiseを作成（無限ループ防止）
const tasksPromise = getTodos();

export default function Tasks() {
  const tasks = use(tasksPromise);

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task: Task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
