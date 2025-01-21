import { notFound } from 'next/navigation';
import { getPost, getBlogPosts } from '@/lib/blog'
import { PostBodyServer } from './components/PostBodyServer';
import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Metadata } from 'next';

import "@/styles/tufte.css"

// ! Dynamic Metadata
// ? DOCS: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export async function generateMetadata({ params }: { params: { slug: string; } }
): Promise<Metadata> {
    const post = await getPost(params.slug);
    if (!post) { return notFound(); }
    return {
        title: post.title,
        description: post.desc
    }
}

export default async function PostPage({ params }: { params: { slug: string; } }) {
    const post = await getPost(params.slug);
    if (!post) { return notFound(); }
    return (
        <div className='blog-post-layout'>
            <article className='relative blog md:max-w-[75%]'>
                <Link className="absolute left-[-120px] mt-8 hidden lg:block" href="/blog">
                    <BsArrowLeftShort className="inline-block h-12 w-12" />
                </Link>
                <PostBodyServer>
                    {post.body}
                </PostBodyServer>
            </article>
        </div>
    );
}