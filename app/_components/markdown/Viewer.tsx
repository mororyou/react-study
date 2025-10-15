import { MDX_OPTIONS } from '@/libs/mdx';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import '@/styles/markdown.css';

export default function Viewer({ source }: { source: string }) {
  return (
    <div className="mdx-markdown">
      <MDXRemote source={source} {...MDX_OPTIONS} />
    </div>
  );
}
