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
            {posts ? posts
                .sort((a, b) => new Date(b?.date || '').getTime() - new Date(a?.date || '').getTime())
                .map((post) => (
                    <Link
                        key={post?.slug}
                        className="flex flex-col mb-4"
                        href={`/blog/${post?.slug}`}
                    >
                        <div className="w-full flex flex-col my-2">
                            <h2 className="text-5xl font-medium">
                                {post?.title}
                            </h2>
                        </div>
                    </Link>
                )) : (
                <p>No posts published.</p>
            )}
        </div>
    )
}

// This is the blog page (client side)
export default function BlogPage({ posts }: { posts: Post[] }) {
    return (
        <div>
            <AllPosts posts={posts} />
        </div>
    )
}