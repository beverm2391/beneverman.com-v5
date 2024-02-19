import { FC, memo } from 'react'
import ReactMarkdown, { Options } from 'react-markdown'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import { parse } from 'path'

// ! components
import HTMLComponents from '@/core/components/MDX/HTMLComponents';
import ClientComponents from '@/core/components/MDX/ClientComponents';

// ! remark plugins
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import remarkMath from 'remark-math'

//! rehype plugins
import rehypeSlug from 'rehype-slug'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'

export const parseMarkdown = (content: string) => {
    return unified().use(remarkParse).parse(content)
}

export const MemoizedReactMarkdown: FC<Options> = memo(
    ReactMarkdown,
    (prevProps, nextProps) =>
        prevProps.children === nextProps.children &&
        prevProps.className === nextProps.className
)

const MDXComponents = {
    ...HTMLComponents,
    ...ClientComponents,
}

export async function PostBodyReactMarkdown({ children }: { children: string }) {
    const parsed = parseMarkdown(children)
    return (
        <MemoizedReactMarkdown
            className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
            remarkPlugins={[
                remarkGfm,
                remarkMath,
                // remarkToc,
            ]}
            rehypePlugins={[
                rehypeKatex,
                rehypeAutolinkHeadings,
                // rehypePrettyCode,
                // rehypeSlug
            ]}
            components={MDXComponents}
        >
            {children}
        </MemoizedReactMarkdown>
    )
}