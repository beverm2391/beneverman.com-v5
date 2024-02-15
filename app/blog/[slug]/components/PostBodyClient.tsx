"use client"

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import HTMLComponents from '@/core/components/MDX/HTMLComponents';
import ClientComponents from '@/core/components/MDX/ClientComponents';

// TODO Import plugins here
// remark
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

// rehype
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'


const MDXComponents = {
    // ...HTMLComponents,
    ...ClientComponents,
}

export async function PostBodyClient({ children }: { children: string }) {
    const source = await serialize(children, {
        mdxOptions: {
            //? workaround for ERROR: "TypeError: _jsx is not a function"
            // as per: https://github.com/hashicorp/next-mdx-remote/issues/350
            development: process.env.NODE_ENV === 'development',
            remarkPlugins: [
                remarkGfm,
                // remarkToc,
            ],
            rehypePlugins: [
                // @ts-ignore
                rehypeKatex,
                // rehypeSlug,
                rehypeAutolinkHeadings,
                // @ts-ignore
                // seems to have a conflicting dependency with something
                [
                    // @ts-ignore
                    rehypePrettyCode,
                    {
                        theme: {
                            light: 'min-light',
                            dark: 'one-dark-pro',
                        },
                        onVisitLine(node: any) {
                            // Prevent lines from collapsing in `display: grid` mode, and allow empty
                            // lines to be copy/pasted
                            if (node.children.length === 0) {
                                node.children = [{ type: "text", value: " " }]
                            }
                        },
                        onVisitHighlightedLine(node: any) {
                            node.properties.className.push("line--highlighted")
                        },
                        onVisitHighlightedWord(node: any) {
                            node.properties.className = ["word--highlighted"]
                        },
                    },
                ],
            ],
        }
    }
    )

    return (
        <>
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossOrigin="anonymous"></link> */}
            <MDXRemote {...source} components={MDXComponents} />
        </>
    )
}