import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { Post } from '@/types/post';
import { cache } from 'react'

export const getBlogPosts = cache(async () => {
    const posts = await fs.readdir(path.join(process.cwd(), 'content')); // get the files in the content directory

    return Promise.all(
        posts
            .filter((file) => path.extname(file) === '.mdx') // filter for MDX files
            .map(async (file) => {

                const filePath = `./content/${file}`; // get the file path
                const postContent = await fs.readFile(filePath, 'utf-8'); // read the file
                const { data, content } = matter(postContent); // parse the frontmatter

                if (!data.published) { return null; } // if the post is not published, return null

                // if not data.slug, use the file name without the extension
                // this allows an optional slug in the frontmatter (this might break later idk)
                // TODO see if this breaks
                const slug = data.slug || file.replace(/\.mdx$/, ''); // get the slug from the frontmatter or the file name

                return {...data, slug, body: content} as Post; // return the post data (frontmatter and body content) as a Post
            })
    );
})

export async function getPost(slug: string) {
    const posts = await getBlogPosts(); // get all the blog posts
    return posts.find((post) => post?.slug === slug); // find the post with the matching slug
}

export default getBlogPosts; // export the function as default