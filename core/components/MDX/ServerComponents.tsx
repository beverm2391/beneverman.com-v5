import { Code } from 'bright'
import Image, { ImageProps } from 'next/image'

const PreServerSide = ({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLPreElement>) => {
    return (
        <Code {...props}>
            {children}
        </Code>
    )
}

const MDXImage = (props: any) => (
    <Image
        width={props.width || 100}
        height={props.height || 100}
        {...(props as ImageProps)}
    />
)

const ServerComponents = {
    pre: PreServerSide,
    img: MDXImage,
    Image: MDXImage,
}

export default ServerComponents