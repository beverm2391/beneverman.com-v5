"use client"

import { Post } from '@/types/post';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// ! This is the list of all posts
export function AllPosts({ posts }: { posts: Post[] }) {
    return (
        <div className='max-w-4xl'>
            <h1 className="font-medium text-5xl md:text-6xl mb-4 md:mb-8">
                Writing
            </h1>
            {/* <hr className='mb-8 md:mb-8 border-t border-gray-200 w-full'/> */}
            <div className="flex flex-col gap-4 md:gap-8">
                {posts ? posts
                    .sort((a, b) => new Date(b?.date || '').getTime() - new Date(a?.date || '').getTime())
                    .map((post) => (
                        <Link
                            key={post?.slug}
                            className="flex flex-col mb-4"
                            href={`/blog/${post?.slug}`}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium mb-4">
                                {post?.title}
                            </h2>
                            <h3 className="text-lg italic font-medium mb-2">
                                {post?.subtitle}
                            </h3>
                            <p className="mt-4 text-lg font-serif antialiased">
                                {post?.desc}
                            </p>
                        </Link>
                    )) : (
                    <p>No posts published.</p>
                )}
            </div>
        </div>
    )
}

const AllPosts3 = ({ posts }: { posts: Post[] }) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className='max-w-4xl'
        >
            <h1 className={cn(
                    "font-medium text-5xl md:text-6xl mb-4 md:mb-8",
                    "ml-6" // to compensate for the padding of the cards
            )}>
                Writing
            </h1>
            <div className={cn("grid grid-cols-1",)}>
                {posts ? posts
                    .filter((post) => post != null)
                    .sort((a, b) => new Date(b?.date || '').getTime() - new Date(a?.date || '').getTime())
                    .map((post, idx) => (
                        <Link
                            href={`/blog/${post?.slug}`}
                            key={post?.slug}
                            className="relative group block p-2 h-full w-full"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute inset-0 h-full w-full bg-[var(--hover-color)] dark:bg-slate-800/[0.8] block rounded-3xl"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15, delay: 0.2 },
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <div className={cn(
                                "rounded-2xl h-full w-full p-4 overflow-hidden",
                                // "bg-white",
                                "border border-transparent dark:border-white/[0.2] group-hover:border-slate-200",
                                "relative z-20"
                            )}>
                                <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium mb-4">
                                    {post?.title}
                                </h2>
                                <h3 className="text-lg italic font-medium mb-2">
                                    {post?.subtitle}
                                </h3>
                                <p className="mt-4 text-lg font-serif antialiased">
                                    {post?.desc}
                                </p>
                            </div>
                        </Link>
                    )) : (
                    <p>No posts published.</p>
                )}
            </div>
        </motion.div>
    );
};

// This is the blog page (client side)
export default function BlogPage({ posts }: { posts: Post[] }) {
    return (
        <div className=''>
            <AllPosts3 posts={posts} />
        </div>
    )
}