import { Code } from 'bright'
import Image, { ImageProps } from 'next/image'
import Callout from '@/core/components/Callout'
import { BsPlusCircle } from 'react-icons/bs'
import Link from 'next/link'
import { EMAIL } from '@/config/contact'
import { useId } from 'react'

Code.lineNumbers = true // Enable line numbers for all code blocks

const PreServerSide = ({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLPreElement>) => {
    return (
        <Code {...props}>
            {children}
        </Code>
    )
}


const MDXImage = (props: any) => (
    <Image
        className='mb-4 rounded-lg image-shadow'
        width={props.width || 1000}
        height={props.height || 1000}
        {...(props as ImageProps)}
    />
)

const Sidenote = (props: { children: any }) => {
    let id = useId() // Generate a unique ID for each sidenote
    return (
        <>
            <label
                htmlFor={`sn-${id}`}
                className="margin-toggle sidenote-number">
                <BsPlusCircle className="inline-block h-4 w-4 md:hidden" />
            </label>
            <input
                type="checkbox"
                id={`sn-${id}`}
                className="margin-toggle custom-checkbox"
            />
            <span className='sidenote'>
                {props.children}
            </span>
        </>
    );
};

const Email = ({ icon = true }: { icon?: boolean }) => <span className='inline-block'><Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>{icon && <span className='inline-block translate-y-[2px] ml-1'>📧</span>}</span>

const ServerComponents = {
    pre: PreServerSide,
    Image: MDXImage,
    img: MDXImage,
    Link,
    Callout,
    Sidenote,
    Email,
}

export default ServerComponents