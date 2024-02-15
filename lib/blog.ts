import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types/post';
import { serialize } from 'next-mdx-remote/serialize';

async function getMDXFiles(dir: string) {
    const files = await fs.readdir(dir);
    return files.filter((file) => path.extname(file) === '.mdx');
}

function parseFrontmatter(fileContent: string) {
    const parsed = matter(fileContent)
    const data = parsed.data as Post // type assertion
    return {data, content: parsed.content}
}

async function readMDXFile(filePath: string) {
    const rawContent = await fs.readFile(filePath, 'utf-8');
    return parseFrontmatter(rawContent);
}

async function parseContent(content: string) {
    const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [
            // require('remark-slug'),
            // require('remark-autolink-headings'),
            // remarkSectionize,
            // remarkFigure,
          ],
        //   rehypePlugins: [remarkMeta],
        },
      }); // serialize the content
    return mdxSource
}

async function getMDXData(dir: string) {
    const mdxFiles = await getMDXFiles(dir);
    const posts = await Promise.all(mdxFiles.map(async (file) => {
        const { data, content } = await readMDXFile(path.join(dir, file));
        const slug = path.basename(file, '.mdx'); // Simplify by removing path.extname(file)
        
        try {
            const mdxSource = await parseContent(content);
            return { data, slug, mdxSource };
        } catch (error) {
            console.error(`Error processing MDX file ${file}:`, error);
            // Optionally, return a fallback or null and filter out failures later
            return null; // Indicate failure, to be filtered out
        }
    }));

    // Filter out any nulls in case of errors
    return posts.filter((post) => post !== null);
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'content')) // get the MDX data for the content directory in the current working directory
}