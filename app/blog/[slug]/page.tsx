import { notFound } from 'next/navigation';
import { getPost, getBlogPosts } from '@/lib/blog'
import { PostBodyServer } from './components/PostBodyServer';
import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';

import "@/styles/tufte.css"

export default async function PostPage({ params }: { params: { slug: string; } }) {
    // console.log("slug passed to page: ", params.slug)
    const post = await getPost(params.slug);
    if (!post) { return notFound(); }
    return (
        <div className='md:w-[87.5%] sm:px-[8%] md:pl-[12.5%] max-w-[1400px]'>
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