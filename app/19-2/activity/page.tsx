import { readFile } from 'fs/promises';
import { join } from 'path';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MDX_OPTIONS } from '@/libs/mdx';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import Link from 'next/link';
import '@/styles/markdown.css';

export default async function ActivityPage() {
  const filePath = join(process.cwd(), 'app', '19-2', 'activity', `readme.mdx`);
  const mdxSource = await readFile(filePath, 'utf-8');

  return (
    <section className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold text-gray-600">Activity</h1>
      <Separator />

      <div className="grid grid-cols-[1fr_200px] gap-4">
        <div className="mdx-markdown">
          <MDXRemote source={mdxSource} {...MDX_OPTIONS} />
        </div>
        <div className="flex flex-col gap-4">
          <Link href="/19-2/activity/before">
            <Button variant="outline">Before</Button>
          </Link>
          <Link href="/19-2/activity/after">
            <Button variant="outline">After</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
