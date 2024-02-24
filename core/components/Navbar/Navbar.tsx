import Link from 'next/link'
import { cn } from '@/lib/utils'

export type NavItem = {
    label: string
    href: string
}

export default function Navbar({ items, className }: { items: NavItem[], className?: string }) {
    return (
        <div className={cn('flex relative', className)}>
            <div className='flex flex-row gap-4 absolute right-0 text-3xl'>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className='border-2 border-black rounded-full py-1 px-4 uppercase hover:bg-gray-200 transition-all hover:cursor-pointer'
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}