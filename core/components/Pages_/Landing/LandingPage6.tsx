"use client"

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

import CustomCursor from '@/core/components/CustomCursor'
import Waves from '@/core/components/WavesV1'

export default function LandingPage() {
    return (
        <main className='absolute top-0 left-0 w-full h-full'>
            <CustomCursor />
            <section className='relative h-[100dvh] w-full bg-[var(--hero-background-color)]'>
                <Waves />
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
                        'z-20'
                    )}>
                    <h1 className='inline leading-tighter'>Ben</h1>
                    <h1 className='inline leading-tighter'>Everman<span className="highlight">.</span></h1>
                </motion.div>
            </section>
            <section className='relative h-[100dvh] w-full bg-blue-300'>
                some more content
            </section>
        </main>
    )
}