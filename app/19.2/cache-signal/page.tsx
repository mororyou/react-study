import { readFile } from 'fs/promises';
import { join } from 'path';
import Viewer from '@/app/_components/markdown/Viewer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function CacheSignalPage() {
  const filePath = join(
    process.cwd(),
    'app',
    '19.2',
    'cache-signal',
    'readme.mdx',
  );
  const mdxSource = await readFile(filePath, 'utf-8');

  return (
    <section className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold text-gray-600">CacheSignal</h1>
      <div className="grid grid-cols-[1fr_200px] gap-4">
        <Viewer source={mdxSource} />
        <Link href="/19-2/cache-signal/demo">
          <Button variant="outline">Demo</Button>
        </Link>
      </div>
    </section>
  );
}
