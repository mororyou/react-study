'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function UseEffectEventBeforePage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffectが実行されました');
    const interval = setInterval(() => {
      toast.success(`現在のカウント数は ${count} です`);
    }, 10_000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="bg-green-50 bg-opacity-50 rounded-md p-4 grid grid-cols-1 gap-4">
      <h1 className="text-green-700 font-bold text-2xl">Before</h1>
      <p>カウント数: {count}</p>
      <Button onClick={() => setCount(count + 1)}>＋ボタン</Button>
    </div>
  );
}
