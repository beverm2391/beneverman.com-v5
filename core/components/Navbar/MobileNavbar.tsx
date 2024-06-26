"use client"

import { NavItem } from "./Navbar"
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Drawer } from 'vaul';
import { BsList } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from '@/config/animations'
import TransitionLink from "../TransitionLink";

export default function MobileNavbar({ items, path, className }: { items: NavItem[], path: string, className?: string }) {
    return (
        <div className={cn(className, "z-50 relative")}>
            <Drawer.Root>
                <Drawer.Trigger
                    className='focus:outline-none'
                // asChild
                >
                    <BsList
                        className={cn(
                            'w-6 h-6',
                            path === "/" ?
                                'text-[var(--hero-text-color)]' :
                                'text-[var(--text-color)]'
                        )} />
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/10 transition-all" />
                    <Drawer.Content className={cn("flex flex-col fixed bottom-0 left-0 right-0",
                            "h-[90dvh] focus:outline-none",
                            "z-50",
                            // "bg-white",
                            path === "/" ?
                                "bg-[var(--hero-background-color)]" :
                                "bg-[var(--background-color)]"
                            )}>
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mt-4" />
                        <nav className="p-4 sm:p-8">
                            <ul
                                className="flex flex-col text-3xl sm:text-4xl">
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className={cn(
                                            "py-2 px-4 mt-4 transition-all hover:cursor-pointer uppercase",
                                            "tracking-wide",
                                            path === "/" ?
                                            "text-[var(--hero-text-color)] hover:bg-[var(--hero-hover-bg-color)] hover:text-[var(--hero-hover-text-color)]" :
                                            "text-[var(--text-color)] hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)]",
                                            // "rounded-full border-2 border-black"
                                            'font-medium'
                                        )}
                                    >
                                        <Drawer.Close asChild>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
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