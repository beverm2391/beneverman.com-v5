import dynamic from 'next/dynamic';

// Components
import {
    Anchor,
    Blockquote,
    Button,
    Card,
    Details,
    InlineCode,
    List,
    Pill,
    Text,
    EM,
    H2,
    H3,
    Strong,
} from '@maximeheckel/design-system';
import BeforeAfterImage from '@core/components/BeforeAfterImage';
import Callout from '@core/components/Callout';
import Code from '@core/components/Code';
import Fullbleed from '@core/components/Fullbleed';
import VideoPlayer from '@core/components/VideoPlayer';

// MDX only components
import Image from '@/core/components/MDX/Image/Image';

const customComponents = {
    Card,
    CardBody: Card.Body,
    BeforeAfterImage,
};

const MDXComponents = {
    // Replace the default anchor tag by the Anchor component with underline set to true: this is the default link
    a: function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
        return <Anchor underline {...props} />;
    },
    Anchor,
    Button,
    blockquote: Blockquote,
    Callout,
    Details,
    em: EM,
    Fullbleed,
    h2: H2,
    h3: H3,
    Image,
    code: InlineCode,
    li: List.Item,
    ol: function OL(props: React.OlHTMLAttributes<HTMLOListElement>) {
        return <List variant="ordered" {...props} />;
    },
    p: function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
        return <Text as="p" {...props} />;
    },
    Pill,
    pre: Code,
    strong: Strong,
    ul: function UL(props: React.HTMLAttributes<HTMLUListElement>) {
        return <List variant="unordered" {...props} />;
    },

    VideoPlayer,
    ...customComponents,
};

export default MDXComponents;