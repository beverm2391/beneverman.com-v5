import { MDXRemote } from 'next-mdx-remote/rsc';
import HTMLComponents from '@/core/components/MDX/HTMLComponents';
import ServerComponents from '@/core/components/MDX/ServerComponents';
import ClientComponents from '@/core/components/MDX/ClientComponents';

// TODO Import plugins here
// remaek
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import remarkMath from 'remark-math';
// rehype
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';

const MDXComponents = {
    ...ClientComponents, // this needs to come first so that the server components can override the client components
    ...HTMLComponents,
    ...ServerComponents,
};


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
                        // rehypePrettyCode, // this does work on the server but im using bright for now (see MDX/ServerComponents.tsx)
                    ],
                    format: 'mdx',
                },
                
            }}
            components={MDXComponents}
        />
    )
}