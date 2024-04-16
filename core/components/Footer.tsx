"use client"

import { cn } from '@/lib/utils'
import { Email } from "./Email";
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Footer() {
    const pathname = usePathname()

    const copy = (
        <span>
            &copy;EverTech {new Date().getFullYear()}
        </span>
    )

    const dontShowFooter = ["/",]

    if (dontShowFooter.includes(pathname)) {
        return null
    } else {
        return (
            <>
                <div className='bg-[var(--background-color)] h-[100px] rounded-b-[100px]' />
                <div className='w-full flex bg-[var(--footer-bg-color)] sticky bottom-0 -z-50'>
                    {/* this next div is to cover the rounded corners */}
                    <div className='absolute w-full h-full top-0 bg-[var(--footer-bg-color)] -translate-y-[100%]'/> 
                    <div className="relative flex flex-col mx-auto w-full border-t border-zinc-700 justify-between items-end px-8 py-8 ">
                        <div className='w-full mb-2 font-mono text-[var(--text-body-color)]'>
                            <h2 className='text-base opacity-50'>
                                Built with Next.js, TailwindCSS, and Framer Motion. {copy}
                            </h2>
                            <h2 className='text-base'>
                                <span className='opacity-50'>
                                    This website is open source.{' '}
                                </span>
                                <Link
                                    href="https://github.com/beverm2391/beneverman.com-v5"
                                    target="_blank"
                                    className='highlight cursor-pointer'
                                >
                                    View on GitHub
                                </Link>
                            </h2>
                        </div>
                        <div className="flex w-full flex-col">
                            {/* <h1 className={cn(
                                'text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl',
                                'text-zinc-500',
                                "font-medium",
                                "uppercase",
                                "tracking-tight",
                                "leading-tighter",
                                'z-20',
                            )}>
                                Ben Everman
                            </h1> */}
                            <span className='text-[var(--text-body-color)] font-mono'>
                                <Email />
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}