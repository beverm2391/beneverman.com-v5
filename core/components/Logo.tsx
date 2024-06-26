"use client"

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FaRegSmileBeam } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import TransitionLink from './TransitionLink'

export default function Logo() {
    const path = usePathname()
    return (
        <div className={cn(
            'flex items-center justify-center',
            "z-50", // make sure the logo sits on top of everything else (thus is clickable)
        )}>
            <Link
                href='/'
                className={cn(
                path === "/" ?
                    'text-[var(--hero-text-color)] hover:bg-[var(--hero-hover-bg-color)] hover:text-[var(--hero-hover-text-color)]' : // hero styles
                    'text-[var(--text-color)] hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)]', // normal styles
                'hover:cursor-pointer transition-all px-2 py-1 flex flex-row items-center',
            )}>
                <h1 className='text-3xl uppercase font-medium md:font-normal'>Home</h1>
                {/* <FaRegSmileBeam className='ml-2 w-8 h-8 text-white' /> */}
            </Link>
        </div>
    )
}