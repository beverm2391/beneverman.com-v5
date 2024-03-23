"use client"

import { FADE_IN_ANIMATION_VARIANTS } from "@/config/animations";
import { motion } from "framer-motion";
import { Post } from '@/types/post';
import Link from 'next/link';
import DoubleHorizontalRule from "../DoubleHorizontalRule";

// ! This is the list of all posts
export function AllPosts({ posts }: { posts: Post[] }) {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8">
                Writing
            </h1>
            <hr className='mb-8 md:mb-8 border-t border-gray-200 w-full'/>
            <div className="flex flex-col gap-4 md:gap-8">
                {posts ? posts
                    .sort((a, b) => new Date(b?.date || '').getTime() - new Date(a?.date || '').getTime())
                    .map((post) => (
                        <Link
                            key={post?.slug}
                            className="flex flex-col mb-4"
                            href={`/blog/${post?.slug}`}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-4xl">
                                {post?.title}
                            </h2>
                        </Link>
                    )) : (
                    <p>No posts published.</p>
                )}
            </div>
        </div>
    )
}

// This is the blog page (client side)
export default function BlogPage({ posts }: { posts: Post[] }) {
    return (
        <div className='font-serif'>
            <AllPosts posts={posts} />
        </div>
    )
}