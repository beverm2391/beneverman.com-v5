"use client"

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import CustomCursor from '@/core/components/CustomCursor'
import { Bs1Circle, Bs2Circle, Bs3Circle } from 'react-icons/bs'
import { LETTER_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/config/animations'

export function BENNN({ className } : { className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, spring: 10 }}
            className={cn(
                "text-5xl md:text-[6rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[9rem]",
                "font-bold",
                "uppercase",
                "tracking-tight",
                "leading-tight",
                'z-20',
                'px-2 md:px-8',
                'bg-gradient-to-b from-[#bbbbba] via-zinc-300 to-[#bbbbba]',
                'bg-clip-text text-transparent',
                className,
            )}>
            <div className='flex w-full flex-row items-center'>
                <h1 className='leading-tighter whitespace-nowrap'>
                    Ben
                </h1>
                <motion.div
                    className='flex-1 flex justify-center items-center overflow-hidden text-blue-500 relative'
                    initial='hidden'
                    animate='show'
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <motion.h1
                            variants={LETTER_ANIMATION_VARIANTS}
                            key={i} className={cn(
                                'leading-tighter mx-[0.125rem] md:mx-1',
                                'hover:cursor-pointer',
                            )}>
                            N
                        </motion.h1>
                    ))}
                </motion.div>
                <h1 className='leading-tighter whitespace-nowrap'>
                    Everman<span className="highlight">.</span>
                </h1>
            </div>
        </motion.div>
    )
}

export default function LandingPage() {
    const generateVariants = (index: number) => ({
        initial: {
            y: 0,
            x: 0
        },
        hover: {
            y: -(index * 5), // Example: Move up 5px more for each subsequent element
            x: -(index * 5), // Example: Move left 5px more for each subsequent element
            transition: { type: 'spring', stiffness: 300 }
        }
    });

    return (
        <main className='absolute top-0 left-0 w-full h-full'>
            <CustomCursor />
            <section className={cn(
                'relative h-dvh w-full',
                'bg-[var(--hero-background-color)]',
            )}>
                <div className={cn(
                    'absolute inset-0 w-full h-full bg-grid-zinc-600/20',
                    '[mask-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,.2),rgba(0,0,0,0.8))]',
                )} />
                <div className={cn(
                    'w-full h-full flex flex-col py-24 px-2 md:px-8 relative z-20',
                    'items-center md:justify-normal md:items-start',
                )}>
                    <motion.div
                        className='md:mt-20 z-20'
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: .15,
                                    delayChildren: 1.7,
                                },
                            },
                        }}
                    >
                        <motion.h2 className={cn(
                            'max-w-7xl',
                            'text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font tracking-tight',
                            'text-[#bbbbba] p-4',
                            'z-20',
                            '[&>*]:leading-tight',
                        )}
                        >
                            <motion.span
                                variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                I'm a
                            </motion.span>
                            <span className='highlight font-medium inline-block wrap-word'>
                                <Bs1Circle className='inline h-6 w-6 align-super text-[#bbbbba]' />
                                software engineer,
                            </span>{' '}
                            <span className='highlight font-medium inline-block wrap-word'>
                                <Bs2Circle className='inline h-6 w-6 align-super text-[#bbbbba]' />
                                neural network wrangler,
                            </span>{' '}
                            <motion.span
                                variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                and{' '}
                            </motion.span>
                            <span className='highlight font-medium inline-block wrap-word'>
                                <Bs3Circle className='inline h-6 w-6 align-super text-[#bbbbba]' />
                                serial learner.
                            </span><br />
                            <motion.span
                                variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                Currently working at{' '}
                            </motion.span>{' '}
                            <motion.span
                                className='highlight-2 font-medium'
                                variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                Tekmir,{' '}
                            </motion.span>
                            <motion.span variants={FADE_UP_ANIMATION_VARIANTS}>
                                where we're building{' '}
                            </motion.span>
                            <motion.span
                                className='highlight-2 font-medium'
                                variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                an end-to-end platform for {' '}
                            </motion.span>
                            <motion.span
                                className='highlight-2 font-medium'
                                variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                mass-action litigation
                            </motion.span>
                            <motion.span variants={FADE_UP_ANIMATION_VARIANTS}>
                                .
                            </motion.span>
                        </motion.h2>
                    </motion.div>
                    {/* <Waves /> */}
                </div>
                <div className='absolute left-0 bottom-0 flex flex-col w-full'>
                    <BENNN/>
                </div>
            </section>
        </main >
    )
}