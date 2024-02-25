import { getBlogPosts } from '@/lib/blog';
import { Post } from '@/types/post';
import BlogPage from '@/core/components/Pages/BlogPage';

import "@/styles/blog.css";
import 'katex/dist/katex.min.css' // for KaTeX

export const metadata = {
    title: 'Blog',
    description: 'Read my writing about the things I tinker with.',
};

export default async function Page() {
    let posts = await getBlogPosts() as Post[];
    // console.log(posts);

    return (
      <div>
        <BlogPage posts={posts} />
      </div>
    );
  }
  