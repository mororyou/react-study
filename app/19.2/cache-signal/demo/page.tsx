import { Suspense } from 'react';
import Cache from './_components/Cache';
import NonCache from './_components/NonCache';

export default async function CacheSignalDemoPage() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold text-gray-600">CacheSignal Demo</h1>
      <div className="grid grid-cols-[1fr_200px] gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Cache />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <NonCache />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
