import { getBlogPosts } from '@/lib/blog';
import { Post } from '@/types/post';
import BlogPage from '@/core/components/Pages_/BlogPage';

import "@/styles/blog.css";
import 'katex/dist/katex.min.css' // for KaTeX

export const metadata = {
    title: 'Ben Everman | Blog',
    description: 'Writing about software engineering, machine learning, and more',
};

export default async function Page() {
  let posts = await getBlogPosts() as Post[];
    return (
      <BlogPage posts={posts} />
    );
  }
  