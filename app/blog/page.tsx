import { getBlogPosts } from '@/lib/blog';
import { Post } from '@/types/post';
import BlogPage from '@/core/components/Pages/BlogPage';

import "@/styles/blog.css";
import 'katex/dist/katex.min.css' // for KaTeX

export const metadata = {
  title: 'Ben Everman | Blog',
  description: 'Writing about software engineering, machine learning, and more',
};

export default async function Page() {
  const posts = await getBlogPosts() as Post[];
  return (
    // ! Blog Layout goes here as to not affect the w-screen in [slug].tsx
    <div className='blog-layout'>
      <BlogPage posts={posts} />
    </div>
  );
}
