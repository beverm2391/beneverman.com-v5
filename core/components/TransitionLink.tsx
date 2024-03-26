"use client"

import { useRouter } from "next/navigation"
import { animatePageOut } from "@/lib/animations"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function TransitionLink({ href, children, className, ...props }: { href: string, children: React.ReactNode, className?: string, props?: any }) {
    const PAGE_TRANSITION = process.env.NEXT_PUBLIC_PAGE_TRANSITION === 'true' ? true : false
    console.log("sanity:", PAGE_TRANSITION)
    
    const router = useRouter()
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault() // prevent the default behavior of the anchor tag (i.e. navigating to the href)

        if (PAGE_TRANSITION) { // if the page transition is enabled
            animatePageOut(href, router) // animate the page out, navigate to the href
        } else {
            router.push(href) // navigate to the href
        }
    }

    return (
        <Link
            href={href}
            className={cn(
                'cursor-pointer',
                className
            )}
            {...props}
            onClick={handleClick}
        >
                {children}
        </Link>
    )
}
