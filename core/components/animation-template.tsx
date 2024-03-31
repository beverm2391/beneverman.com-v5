"use client"

import { useEffect, useState } from "react"
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
                    'flex flex-col items-center justify-center',
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

    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    // only animate the page in if the page transition is enabled
    return (
        PAGE_TRANSITION && !isMobile
            ? <YesTransition>{children}</YesTransition>
            : <NoTransition>{children}</NoTransition>
    )
}