"use client"

import { motion, useInView } from "framer-motion";
import { cn } from '@/lib/utils'
import { LETTER_ANIMATION_VARIANTS } from '@/config/animations'
import { useRef } from 'react'
import { EMAIL } from "@/config/contact";
import { Email } from "./Email";

export function BENNN({ className }: { className?: string }) {

    const ref = useRef(null);
    const isInView = useInView(ref);

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2);

    return (
        <motion.div
            ref={ref2}
            initial="hidden"
            animate={isInView2 ? 'show' : 'hidden'}
            variants={{
                hidden: { opacity: 0, y: 0 },
                show: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, type: "spring" } }
            }}
            className={cn(
                'justify-between',
                "text-7xl",
                "font-bold",
                "uppercase",
                "tracking-tight",
                "leading-tight",
                'z-20',
                // 'px-2 md:px-8',
                'bg-gradient-to-b from-[#bbbbba] via-zinc-300 to-[#bbbbba]',
                'bg-clip-text text-transparent',
                className,
            )}>
            <div className='flex w-full justify-between flex-row items-center'>
                <motion.h1 className={cn('leading-tighter',)}>
                    Ben
                </motion.h1>
                <motion.div
                    ref={ref}
                    className='grow-0 flex justify-center tracking-tighter items-center overflow-clip text-blue-700 relative'
                    initial='hidden'
                    animate={isInView ? 'show' : 'hidden'}
                    viewport={{ once: false }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {Array.from({ length: 40 }).map((_, i) => (
                        <motion.h1
                            variants={LETTER_ANIMATION_VARIANTS}
                            key={i}
                            className={cn(
                                'leading-tighter mx-[0.125rem]',
                                'hover:cursor-pointer',
                                'tracking-tighter',
                            )}
                        >
                            N
                        </motion.h1>
                    ))}
                </motion.div>
                {/* <div className='inline w-full bg-zinc-300 h-8 rounded-xl mx-2 border-zinc-300 border-[10px]'> */}
                <motion.h1 className={cn('leading-tighter',)}>
                    Everman<span className="highlight">.</span>
                </motion.h1>
            </div>
        </motion.div>
    )
}

export default function Footer() {


    const copy = (
        <span>
            &copy; {new Date().getFullYear()}
        </span>
    )
    return (
        <>
            <div className='w-full flex bg-[var(--background-color)]'>
                <div className="relative flex flex-col mx-auto w-full border-t border-zinc-700 mt-8 justify-between items-end px-8 py-8 ">
                    {/* <h1 className='text-2xl text-[var(--text-body-color)] uppercase font-medium '>
                        EverTech {copy}
                    </h1> */}
                    <div className='w-full mb-4 font-mono text-[var(--text-body-color)]'>
                        <h2 className='text-lg opacity-50'>
                            Built with Next.js, TailwindCSS, and Framer Motion. {copy}
                        </h2>
                        <Email />
                    </div>  
                    <BENNN className="text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-zinc-500 w-full" />
                </div>
            </div>
        </>
    )
}