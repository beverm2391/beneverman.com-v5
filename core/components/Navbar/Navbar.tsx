import Link from 'next/link'
import { cn } from '@/lib/utils'

export type NavItem = {
    label: string
    href: string
}

export default function Navbar({ items, className }: { items: NavItem[], className?: string }) {
    return (
        <div className={cn(
            'flex relative',
            'items-center justify-center',
            'z-10', // make sure the navbar sits on top of everything else (thus is clickable)
            className
        )}>
            <div className={cn(
                'flex flex-row gap-4 text-3xl',
                // 'absolute right-0'
            )}>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={cn(
                            // 'border-2 border-black rounded-full',
                            'tracking-wide',
                            'py-1 px-4 uppercase hover:bg-gray-200 hover:cursor-pointer'
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}