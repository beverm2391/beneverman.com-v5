import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types/post';

function parseFrontmatter(fileContent: string) {
    const parsed = matter(fileContent)
    const data = parsed.data as Post // type assertion
    return {data, content: parsed.content}
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
    let rawContent = fs.readFileSync(filePath, 'utf-8') // load the file
    return parseFrontmatter(rawContent) // parse the frontmatter into data and content
}

function getMDXData(dir: string) {
    let mdxFiles = getMDXFiles(dir) // get all the MDX files in the directory
    return mdxFiles.map((file) => {
        let { data, content } = readMDXFile(path.join(dir, file)) // read the file
        let slug = path.basename(file, path.extname(file))
        return { data, slug, content }
    })
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'content'))
}