import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
// import BlogLayout from '@core/layout/BlogPost';
// import getOgImage from 'lib/generate-opengraph-images';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import MDXComponents from '@/core/components/MDX/MDXComponents';
import { FrontMatterPost } from '@/types/post';

interface BlogProps {
  post?: FrontMatterPost;
  ogImage: string;
}

const Blog = ({ post, ogImage }: BlogProps) => {
  const { isFallback } = useRouter();

  if (isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    // <BlogLayout frontMatter={post.frontMatter} ogImage={ogImage}>
      <MDXRemote
        {...post.mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
    // </BlogLayout>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: true,
  };
};