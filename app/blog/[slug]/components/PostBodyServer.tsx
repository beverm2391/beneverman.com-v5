import { MDXRemote } from 'next-mdx-remote/rsc';
import HTMLComponents from '@/core/components/MDX/HTMLComponents';
import ServerComponents from '@/core/components/MDX/ServerComponents';

// TODO Import plugins here
// remaek
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import remarkMath from 'remark-math';
// rehype
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex';

const MDXComponents = {
    ...HTMLComponents,
    ...ServerComponents,
}

export function PostBodyServer({ children }: { children: string }) {
    return (
        <MDXRemote
            source={children}
            options={{
                mdxOptions: {
                    remarkPlugins: [
                        remarkGfm,
                        remarkToc,
                        remarkMath,
                    ],
                    rehypePlugins: [
                        rehypeSlug,
                        rehypeAutolinkHeadings,
                        // @ts-ignore
                        rehypeKatex,
                    ],
                    format: 'mdx',
                },
                
            }}
            components={MDXComponents}
        />
    )
}