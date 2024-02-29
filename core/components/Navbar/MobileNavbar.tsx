"use client"

import { NavItem } from "./Navbar"
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Drawer } from 'vaul';
import { BsList } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from '@/config/animations'

export default function MobileNavbar({ items, className }: { items: NavItem[], className?: string }) {
    return (
        <div className={cn(className, "z-10 relative")}>
            <Drawer.Root>
                <Drawer.Trigger
                    className='absolute right-0 focus:outline-none'
                // asChild
                >
                    <BsList className='w-6 h-6' />
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/10 transition-all" />
                    <Drawer.Content className={cn("flex flex-col fixed bottom-0 left-0 right-0",
                            "h-[90dvh] focus:outline-none",
                            // "bg-white",
                            "bg-[#fffff9]",
                            )}>
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mt-4" />
                        <nav className="p-4 sm:p-8">
                            <ul
                                className="flex flex-col text-3xl sm:text-4xl">
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className={cn(
                                            "py-2 px-4 mt-4 hover:bg-gray-200 transition-all hover:cursor-pointer uppercase",
                                            "tracking-wide",
                                            // "rounded-full border-2 border-black"
                                        )}
                                    >
                                        <Drawer.Close asChild>
                                            <Link href={item.href}>{item.label}</Link>
                                        </Drawer.Close>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Drawer.Content>
                    <Drawer.Overlay />
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    )
}