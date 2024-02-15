import { Code } from 'bright'

export const PreServerSide = ({children, ...props}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>,HTMLPreElement>) => {
    return (
        <Code {...props}>
            {children}
        </Code>
    )
}

const ServerComponents = {
    pre: PreServerSide,
}

export default ServerComponents