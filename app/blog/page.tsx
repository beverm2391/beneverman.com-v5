import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from '@/lib/blog-old';

export const metadata = {
    title: 'Blog',
    description: 'Read my writing about the things I tinker with.',
};

export default async function BlogPage() {
    let allBlogs = await getBlogPosts();

    // console.log(allBlogs);
  
    return (
      <section>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          read my blog
        </h1>
        {allBlogs
            .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
            .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.data.title}
                </p>
              </div>
            </Link>
          ))}
      </section>
    );
  }
  