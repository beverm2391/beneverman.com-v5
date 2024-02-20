# Markdown/MDX Integration

This one has been a nightmare. The newest [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support) docs suggest using and updated `{ MDXRemote }` object for React Server Component compatibiility. Example from the docs:

`import { MDXRemote } from 'next-mdx-remote/rsc'`

So I got this running in [PostBodyServer](app/blog/[slug]/components/PostBodyServer.tsx) component. The problemes are:
1. remark-gfm footnotes don't work
2. I cant use any animations or interactive components
I'm still confused as to how the RSC/Next App dir ecosystem benefits developes - it certainly causes me headache after headace.

Then, I moved on to client side mdx rendering, and got everything working with a few hacks:
1. Had to revert `react-gfm@4.0.0` back to `react-gfm@3` because of some issue with table parsing
2. Had to use a development environment flag to suppress a `TypeError: _jsx is not a function`
   1. see [this issue](https://github.com/hashicorp/next-mdx-remote/issues/350)

I also briefly tried [react-markdown](https://github.com/remarkjs/react-markdown) which seems to be a good option for dynamic rendering of markdown without jsx.

## Here is everything that should work (on top of normal markdonw)
- All GFM
  - tables
  - auto links
  - footnotes
  - etc.
- Code Block Syntax Highlighting
- Katex/Math
- Custom Client Components