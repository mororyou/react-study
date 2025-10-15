'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useEffectEvent, useState } from 'react';
import { toast } from 'sonner';

export default function UseEffectEventAfterPage() {
  const [count, setCount] = useState(0);

  const cointEventHandler = useEffectEvent(() => {
    toast.success(`現在のカウント数は ${count} です`);
  });

  useEffect(() => {
    console.log('useEffectが実行されました');

    const interval = setInterval(() => {
      cointEventHandler();
    }, 10_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 bg-opacity-50 rounded-md grid grid-cols-1 gap-4 p-4">
      <h1 className="text-blue-700 font-bold text-2xl">UseEffectEvent After</h1>
      <p>カウント数: {count}</p>
      <Button onClick={() => setCount(count + 1)}>＋ボタン</Button>
      <Button
        variant="outline"
        className="bg-red-500 text-white"
        onClick={() => cointEventHandler()}
      >
        Toastを表示（呼べるけど非推奨）
      </Button>
    </div>
  );
}
