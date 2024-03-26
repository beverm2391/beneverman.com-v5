"use client"

import { cn } from '@/lib/utils'
import Waves from '../../WavesV1'
import CustomCursor from '../../CustomCursor'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LandingPage() {
    return (
        <>
            <CustomCursor />
            <section className='relative h-screen w-full'>
                <div className={cn(
                    // 'bg-[#d7d9f7]',
                    'absolute top-0 left-0 h-full w-full',
                    'flex flex-col items-center',
                    'pt-16',
                    // 'px-8 md:px-16',
                    'overflow-hidden',
                    '[&>*]:px-8 md:[&>*]:px-16',
                )}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className={cn(
                            'realtive flex flex-col w-full h-full',
                            'gap-4 pt-8',
                        )}>
                        <Waves />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, spring: 10 }}
                        className={cn(
                            'absolute flex flex-row w-full justify-between',
                            "text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]",
                            "font-bold",
                            "uppercase",
                            "tracking-tight",
                            "leading-tight",
                            'text-[var(--hero-text-color)]',
                        )}>
                        <h1 className='inline leading-tighter'>Ben</h1>
                        <h1 className='inline leading-tighter'>Everman<span className="highlight">.</span></h1>
                    </motion.div>
                </div>
            </section>
            <section className={cn(
                "flex flex-col h-screen w-full",
                "justify-center items-center",
                "bg-[#d7d9f7]",
            )}>
                <div className={cn(
                    'max-w-[1300px] z-20 p-4 h-full w-full mx-auto',
                    // 'bg-gradient-to-b to-[var(--hero-background-color)] from-transparent',
                    'flex items-center justify-center',
                )}>
                    <h2 className={cn(
                        'text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl',
                        'font-bold',
                        'uppercase',
                        'tracking-tight',
                        '!leading-tight',
                        'pointer-events-auto',
                    )}>
                        I'm a software engineer, neural network wrangler, and serial learner. I do consulting and contract work under <span className='highlight' >EverTech</span>.
                        I specialize in <span className='highlight' >machine learning</span> and <span className='highlight' >full-stack development</span>. I write about my work and other things that interest me on my <span className='highlight'>blog</span>.
                    </h2>
                </div>
            </section>
        </>
    )
}