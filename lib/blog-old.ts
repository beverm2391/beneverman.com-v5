import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types/post';
import { serialize } from 'next-mdx-remote/serialize';

function parseFrontmatter(fileContent: string) {
    const parsed = matter(fileContent)
    const data = parsed.data as Post // type assertion
    return {data, content: parsed.content}
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx') // get all the MDX files in the directory
}

function readMDXFile(filePath: string) {
    let rawContent = fs.readFileSync(filePath, 'utf-8') // load the file
    return parseFrontmatter(rawContent) // parse the frontmatter into data and content
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
    let mdxFiles = getMDXFiles(dir) // get all the MDX files in the directory
    return Promise.all(mdxFiles.map(async (file) => { // map over the files and return a promise for each
        let { data, content } = readMDXFile(path.join(dir, file)) // read the file
        let slug = path.basename(file, path.extname(file)) // get the basename
        
        const mdxSource = await parseContent(content) // parse the content

        return { data, slug, mdxSource } // return the data, slug, and content
    }))
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'content')) // get the MDX data for the content directory in the current working directory
}