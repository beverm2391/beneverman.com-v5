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
                    className='absolute right-0'
                // asChild
                >
                    <BsList className='w-6 h-6' />
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/10 transition-all focus:border-none" />
                    <Drawer.Content className="flex flex-col fixed bottom-0 left-0 right-0 bg-white h-[calc(100dvh-7rem)] dark:bg-zinc-800">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 dark:bg-gray-500 mt-4" />
                        <nav className="p-8">
                            <motion.ul
                                className="grid grid-flow-row auto-rows-max gap-4 text-4xl text-zinc-900 dark:text-zinc-100"
                                initial="hidden"
                                animate="show"
                                variants={{
                                    show: {
                                        transition: {
                                            delayChildren: 0.2,
                                            staggerChildren: 0.07,
                                        },
                                    },
                                }}
                            >
                                {items.map((item, index) => (
                                    <motion.li
                                        variants={FADE_UP_ANIMATION_VARIANTS}
                                        key={index}
                                    >
                                        <Drawer.Close asChild>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "border-2 border-black rounded-full py-1 px-4 uppercase hover:bg-gray-200 transition-all hover:cursor-pointer",
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        </Drawer.Close>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </nav>
                    </Drawer.Content>
                    <Drawer.Overlay />
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    )
}