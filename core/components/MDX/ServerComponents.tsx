import { Code } from 'bright'
import Image, { ImageProps } from 'next/image'
import Callout from '@/core/components/Callout'
import { BsPlusCircle } from 'react-icons/bs'

const PreServerSide = ({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLPreElement>) => {
    return (
        <Code {...props}>
            {children}
        </Code>
    )
}

const MDXImage = (props: any) => (
    <Image
        className='mb-4'
        width={props.width || 1000}
        height={props.height || 1000}
        {...(props as ImageProps)}
    />
)

const Sidenote = (props: { children: any; idx: number }) => {
    return (
        <>
            <label
                htmlFor={`sn-${props.idx}`}
                className="margin-toggle sidenote-number">
                    <BsPlusCircle className="inline-block h-4 w-4 md:hidden" />
            </label>
            <input
                type="checkbox"
                id={`sn-${props.idx}`}
                className="margin-toggle custom-checkbox"
            />
            <span className='sidenote'>
                {props.children}
            </span>
        </>
    );
};


const ServerComponents = {
    pre: PreServerSide,
    Image: MDXImage,
    img: MDXImage,
    Callout,
    Sidenote,
}

export default ServerComponents