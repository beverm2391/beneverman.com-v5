import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type PostOLD = {
    colorFeatured?: string;
    date: string;
    updated: string;
    featured?: boolean;
    fontFeatured?: string;
    keywords?: string[];
    slug: string;
    subtitle: string;
    title: string;
};

export type FrontMatterPost = {
    // frontMatter: Post & {
    //     readingTime: ReadingTime;
    // };
    // tweetIDs: string[];
    mdxSource: MDXRemoteSerializeResult;
};

export type Post = {
    title: string;
    subtitle: string;
    date: string;
    updated: string;
    body: string;
    slug: string;
}