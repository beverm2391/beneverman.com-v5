import { cn } from "@/lib/utils"
import Link from "next/link"

// import {
//     Anchor,
//     Blockquote,
//     Button,
//     Card,
//     Details,
//     InlineCode,
//     List,
//     Pill,
//     Text,
//     EM,
//     H2,
//     H3,
//     Strong,
// } from '@maximeheckel/design-system';
// import BeforeAfterImage from '@core/components/BeforeAfterImage';
// import Callout from '@core/components/Callout';
// import Code from '@core/components/Code';
// import Fullbleed from '@core/components/Fullbleed';
// import VideoPlayer from '@core/components/VideoPlayer';

interface HTMLComponentProps {
    children?: React.ReactNode;
    className?: string;
    href?: string;
}

const htmlComponents = {
    h1: ({ children, ...props }: HTMLComponentProps) => (
        <h1
            className={cn(
                "mt-2 scroll-m-20 text-4xl font-bold",
                props.className
            )}
            {...props}
        >
            {children}
        </h1>
    ),
    h2: ({ children, ...props }: HTMLComponentProps) => (
        <h2
            className={cn(
                "mt-10 scroll-m-20 border-b border-color pb-1 text-3xl font-semibold first:mt-0",
                props.className
            )}
            {...props}
        >
            {children}
        </h2>
    ),
    h3: ({ children, ...props }: HTMLComponentProps) => (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
                props.className
            )}
            {...props}
        >
            {children}
        </h3>
    ),
    h4: ({ children, ...props }: HTMLComponentProps) => (
        <h4
            className={cn(
                "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                props.className
            )}
            {...props}
        >
            {children}
        </h4>
    ),
    h5: ({ children, ...props }: HTMLComponentProps) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                props.className
            )}
            {...props}
        >
            {children}
        </h5>
    ),
    a: ({ children, ...props }: HTMLComponentProps) => (
        <Link
            className={cn(
                "",
                props.className
            )}
            href={props.href || ""}
            {...props}
            target="_blank"
        >
            {children}
        </Link>
    ),
    p: ({ children, ...props }: HTMLComponentProps) => (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6 ", props.className)} {...props}>
            {children}
        </p>
    ),
    ul: ({ children, ...props }: HTMLComponentProps) => (
        <ul className={cn("my-6 ml-6 list-disc", props.className)} {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, ...props }: HTMLComponentProps) => (
        <ol className={cn("my-2 [&:not(:child)]:my-6 ml-6 list-decimal", props.className)} {...props}>
            {children}
        </ol>
    ),
    li: ({ children, ...props }: HTMLComponentProps) => (
        <li className={cn("mt-2", props.className)} {...props}>
            {children}
        </li>
    ),
    blockquote: ({ children, ...props }: HTMLComponentProps) => (
        <blockquote
            className={cn(
                "mt-6 border-l-2 border-slate-300 dark:border-slate-500 pl-6 italic",
                // " text-slate-800 dark:text-slate-100 [&>*]:text-slate-600 dark:[&>*]:text-slate-200",
                props.className
            )}
            {...props}
        >
            {children}
        </blockquote>
    ),
}


const MDXComponents = {
    ...htmlComponents, // HTML Components
    // Button,
    // Card,
    // CardBody: Card.Body,
    // Callout,
    // Details,
    // Fullbleed,
    // Image,
    // code: InlineCode,
    // Pill,
    // VideoPlayer,
};

const HTMLComponents = htmlComponents

export default HTMLComponents;