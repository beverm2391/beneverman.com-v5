import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { Post } from '@/types/post';
import { cache } from 'react'

export const getBlogPosts = cache(async () => {
    const dir = path.join(process.cwd(), 'content'); // get the content directory (so we can pass to fs.readdir later)
    const posts = await fs.readdir(dir); // get the files in the content directory (returns a list of strings)

    return Promise.all(
        posts
            .filter((file) => path.extname(file) === '.mdx') // filter for MDX files
            .map(async (file) => {

                const postContent = await fs.readFile(path.join(dir, file), 'utf-8'); // read the file
                const { data, content } = matter(postContent); // parse the frontmatter

                const slug = path.basename(file, '.mdx') // get the slug by removing the file extension

                if (!data.published) { return null; } // if the post is not published, return null

                return {...data, slug, body: content} as Post; // return the post data (frontmatter and body content) as a Post
            })
    );
})

export async function getPost(slug: string) {
    const posts = await getBlogPosts(); // get all the blog posts
    console.log("posts: ", posts)
    return posts.find((post) => post?.slug === slug); // find the post with the matching slug
}