"use client"

import { useEffect } from "react"
import { animatePageIn } from "@/lib/animations"
import { cn } from "@/lib/utils"

const YesTransition = ({ children }: { children: React.ReactNode }) => {
    
    useEffect(() => {
        animatePageIn()
    }, [])

    return (
        <div>
            <div
                id='transition-element'
                className={cn(
                    "w-screen h-screen z-[100] fixed top-0 left-0",
                    'bg-[var(--transition-bg-color)]',
                )}
            ></div>
            {children}
        </div>
    )
}

const NoTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default function Template({ children } : { children: React.ReactNode }) {
    const PAGE_TRANSITION = process.env.NEXT_PUBLIC_PAGE_TRANSITION === 'true' ? true : false

    // only animate the page in if the page transition is enabled
    return (
        PAGE_TRANSITION
            ? <YesTransition>{children}</YesTransition>
            : <NoTransition>{children}</NoTransition>
    )
}