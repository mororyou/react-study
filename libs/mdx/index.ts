import { type EvaluateOptions } from 'next-mdx-remote-client/rsc';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

export const MDX_OPTIONS = {
  mdxOptions: {
    rehypePlugins: [rehypeSanitize],
    remarkPlugins: [remarkGfm],
  },
} satisfies EvaluateOptions;
