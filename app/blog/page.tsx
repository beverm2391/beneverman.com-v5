import { getBlogPosts } from '@/lib/blog';
import { Post } from '@/types/post';
import BlogPage from '@/core/components/Pages_/BlogPage';

import "@/styles/blog.css";
import 'katex/dist/katex.min.css' // for KaTeX

export const metadata = {
    title: 'Blog',
    description: 'Read my writing about the things I tinker with.',
};

export default async function Page() {
  let posts = await getBlogPosts() as Post[];
    return (
      <div className='mx-auto flex items-center justify-center antialiased'>
        <BlogPage posts={posts} />
      </div>
    );
  }
  