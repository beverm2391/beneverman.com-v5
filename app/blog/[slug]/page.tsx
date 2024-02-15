import { Suspense, cache } from 'react';
import { notFound } from 'next/navigation';
import { getBlogPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from '@/core/components/MDX/MDXComponents';

import { unstable_noStore as noStore } from 'next/cache';

function formatDate(date: string) {
    noStore();
    let currentDate = new Date();
    if (!date.includes('T')) {
        date = `${date}T00:00:00`;
    }
    let targetDate = new Date(date);

    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    let daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = '';

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`;
    } else {
        formattedDate = 'Today';
    }

    let fullDate = targetDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return `${fullDate} (${formattedDate})`;
}

export default async function Blog({ params }: { params: { slug: string } }) {
    console.log(params);
    const allPosts = await getBlogPosts()
    const post = allPosts.find((post) => post?.slug === params.slug);

    console.log(post);

    if (!post) {
        notFound();
    }

    return (
        <section>
            <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
                {post.data.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
                <Suspense fallback={<p className="h-5" />}>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {post.data.date}
                    </p>
                </Suspense>
            </div>
            <article className="prose prose-quoteless prose-neutral dark:prose-invert">
                <MDXRemote
                    source={post.mdxSource} 
                    components={{
                        // ...MDXComponents,
                    }}
                />
            </article>
        </section>
    );
}