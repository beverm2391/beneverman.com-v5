import Link from 'next/link'
import { cn } from '@/lib/utils'
import TransitionLink from '@/core/components/TransitionLink'

export type NavItem = {
    label: string
    href: string
}

export default function Navbar({ items, path, className }: { items: NavItem[], path: string, className?: string }) {
    console.log(path)
    return (
        <div className={cn(
            'flex relative',
            'items-center justify-center',
            'z-50', // make sure the navbar sits on top of everything else (thus is clickable)
            className
        )}>
            <div className={cn(
                'flex flex-row gap-4 text-3xl',
                // 'absolute right-0'
            )}>
                {items.map((item, index) => (
                    // <Link
                    //     key={index}
                    //     href={item.href}
                    //     className={cn(
                    //         // 'border-2 border-black rounded-full',
                    //         path === "/" ?
                    //             'text-[var(--hero-text-color)] hover:bg-[var(--hero-hover-bg-color)] hover:text-[var(--hero-hover-text-color)]' : // hero styles
                    //             'text-[var(--text-color)] hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)]', // normal styles
                    //         'tracking-wide',
                    //         'py-1 px-4 uppercase hover:cursor-pointer'
                    //     )}
                    // >
                    //     {item.label}
                    // </Link>
                    <Link
                        href={item.href}
                        key={index}
                        className={cn(
                            // 'border-2 border-black rounded-full',
                            path === "/" ?
                                'text-[var(--hero-text-color)] hover:bg-[var(--hero-hover-bg-color)] hover:text-[var(--hero-hover-text-color)]' : // hero styles
                                'text-[var(--text-color)] hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)]', // normal styles
                            'tracking-wide',
                            'py-1 px-4 uppercase hover:cursor-pointer'
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}