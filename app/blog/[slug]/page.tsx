import { notFound } from 'next/navigation';
import { getPost, getBlogPosts } from '@/lib/blog'
import { PostBodyServer } from './components/PostBodyServer';

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