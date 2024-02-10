import { cn } from "@/lib/utils"

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

// MDX only components
import Image from '@/core/components/MDX/Image/Image';

interface HTMLComponentProps {
    className?: string | undefined;
}

const htmlComponents = {
    h1: ({ className, ...props }: HTMLComponentProps) => (
        <h1
            className={cn(
                "mt-2 scroll-m-20 text-4xl font-bold",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: HTMLComponentProps) => (
        <h2
            className={cn(
                "mt-10 scroll-m-20 border-b border-color pb-1 text-3xl font-semibold first:mt-0",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: HTMLComponentProps) => (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: HTMLComponentProps) => (
        <h4
            className={cn(
                "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: HTMLComponentProps) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    a: ({ className, ...props }: HTMLComponentProps) => (
        <a
            className={cn(
                "",
                className
            )}
            {...props}
            target="_blank"
        />
    ),
    p: ({ className, ...props }: HTMLComponentProps) => (
        <p
            className={cn("leading-7 [&:not(:first-child)]:mt-6 ", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: HTMLComponentProps) => (
        <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: HTMLComponentProps) => (
        <ol className={cn("my-2 [&:not(:child)]:my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: HTMLComponentProps) => (
        <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({ className, ...props }: HTMLComponentProps) => (
        <blockquote
            className={cn(
                "mt-6 border-l-2 border-slate-300 dark:border-slate-500 pl-6 italic",
                // " text-slate-800 dark:text-slate-100 [&>*]:text-slate-600 dark:[&>*]:text-slate-200",
                className
            )}
            {...props}
        />
    ),
}

const customComponents = {
    // Card,
    // CardBody: Card.Body,
};

const MDXComponents = {
    ...htmlComponents, // HTML Components
    // Button,
    // Callout,
    // Details,
    // Fullbleed,
    Image,
    // code: InlineCode,
    // Pill,
    // pre: Code,
    // VideoPlayer,
    ...customComponents,
};

export default MDXComponents;