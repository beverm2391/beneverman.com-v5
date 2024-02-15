import { notFound } from 'next/navigation';
import { getPost, getBlogPosts } from '@/lib/blog'
import { PostBody } from './components/PostBody';

export default async function PostPage({ params }: { params: { slug: string; } }) {
    console.log("slug passed to page: ", params.slug)
    const post = await getPost(params.slug);
    if (!post) { return notFound(); }
    return ( <PostBody>{post.body}</PostBody>)
}