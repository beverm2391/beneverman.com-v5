"use client"

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

import CustomCursor from '@/core/components/CustomCursor'
import Waves from '@/core/components/WavesV1'

export default function LandingPage() {
    return (
        <main className='absolute top-0 left-0 w-full h-full'>
            <CustomCursor />
            <section className={cn(
                'relative h-[100dvh] w-full',
                'bg-[var(--hero-background-color)]',
            )}>
                <motion.div
                    className={cn(
                        "[all:inherit]",
                        // "[mask-image:radial-gradient(white,transparent)]"
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Waves />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, spring: 10 }}
                    className={cn(
                        'absolute left-0 bottom-0 flex flex-row w-full justify-between',
                        "text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]",
                        "font-bold",
                        "uppercase",
                        "tracking-tight",
                        "leading-tight",
                        'text-[var(--hero-text-color)]',
                        'z-20',
                    )}>
                    <h1 className={cn(
                        'inline leading-tighter',
                        // 'translate-y-[60px]'
                    )}>
                        Ben
                    </h1>
                    <h1 className={cn(
                        'inline leading-tighter',
                        // 'translate-y-[60px]'
                    )}>
                        Everman<span className="highlight">.</span>
                    </h1>
                </motion.div>
            </section>
            <section className={cn(
            'relative h-[100dvh] w-full',
            // 'bg-gradient-to-b from-[var(--hero-background-color)] via-[var(--hero-background-color)] to-[var(--background-color)]',
            'bg-[var(--background-color)]',
            )}>
                <div className={cn(
                    'max-w-[1300px] z-20 p-4 h-full w-full mx-auto',
                    // 'bg-gradient-to-b to-[var(--hero-background-color)] from-transparent',
                    'flex items-center justify-center',
                )}>
                    <h2 className={cn(
                        'text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl',
                        'font-medium',
                        // 'uppercase',
                        'tracking-tight',
                        '!leading-tighter',
                        'pointer-events-auto',
                    )}>
                        I'm a software engineer, neural network wrangler, and serial learner. I do consulting and contract work under <span className='highlight' >EverTech</span>.
                        I specialize in <span className='highlight' >machine learning</span> and <span className='highlight' >full-stack development</span>. I write about my work and other things that interest me on my <span className='highlight'>blog</span>.
                    </h2>
                </div>
            </section>
        </main>
    )
}