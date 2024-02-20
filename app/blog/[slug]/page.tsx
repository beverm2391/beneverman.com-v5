import { notFound } from 'next/navigation';
import { getPost, getBlogPosts } from '@/lib/blog'
import { PostBodyServer } from './components/PostBodyServer';
import { PostBodyClient } from './components/PostBodyClient';
import { PostBodyReactMarkdown } from './components/PostBodyReactMarkdown';

export default async function PostPage({ params }: { params: { slug: string; } }) {
    // console.log("slug passed to page: ", params.slug)
    const post = await getPost(params.slug);
    if (!post) { return notFound(); }
    return (
        <PostBodyServer>
            {post.body}
        </PostBodyServer>
    )
}