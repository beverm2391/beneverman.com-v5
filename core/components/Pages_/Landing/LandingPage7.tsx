"use client"

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import CustomCursor from '@/core/components/CustomCursor'
import { Bs1Circle, Bs2Circle, Bs3Circle } from 'react-icons/bs'
import { LETTER_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/config/animations'

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
                'relative h-[100dvh] w-full',
                // 'bg-[var(--hero-background-color)]',
                // 'bg-[#242423]',
                'bg-gradient-to-b from-[#242423] via-zinc-900 to-[#242423]'
            )}>
                <div className={cn(
                    'absolute inset-0 w-full h-[100dvh] bg-grid-zinc-600/20',
                    '[mask-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,1),rgba(0,0,0,1))]',
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
                                I do consulting and contract work under{' '}
                            </motion.span>{' '}
                            <motion.span
                                className='highlight-2 font-medium'
                                variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                EverTech,{' '}
                            </motion.span>
                            <motion.span variants={FADE_UP_ANIMATION_VARIANTS}>
                                where I specialize in{' '}
                            </motion.span>
                            <motion.span
                                className='highlight-2 font-medium'
                                variants={FADE_UP_ANIMATION_VARIANTS}
                            >
                                machine learning{' '}
                            </motion.span>
                            <motion.span variants={FADE_UP_ANIMATION_VARIANTS}>
                                and{' '}
                            </motion.span>
                            <motion.span
                                className='highlight-2 font-medium'
                                variants={FADE_UP_ANIMATION_VARIANTS}    
                            >
                                full-stack development
                            </motion.span>
                            <motion.span variants={FADE_UP_ANIMATION_VARIANTS}>
                                .
                            </motion.span>
                        </motion.h2>
                    </motion.div>
                    {/* <Waves /> */}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, spring: 10 }}
                    className={cn(
                        'absolute left-0 bottom-0 flex flex-col w-full',
                        'justify-between',
                        "text-5xl md:text-[6rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[9rem]",
                        "font-bold",
                        "uppercase",
                        "tracking-tight",
                        "leading-tight",
                        // 'text-[var(--hero-text-color)]',
                        'z-20',
                        'px-2 md:px-8',
                        'bg-gradient-to-b from-[#bbbbba] via-zinc-300 to-[#bbbbba]',
                        'bg-clip-text text-transparent',
                    )}>
                    <div className='flex w-full justify-between flex-row items-center'>
                        <h1 className={cn(
                            'leading-tighter',
                            // 'translate-y-[60px]'
                        )}>
                            Ben
                        </h1>
                        <motion.div
                            className='grow-0 flex justify-center items-center overflow-clip text-blue-500 relative'
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
                        {/* <div className='inline w-full bg-zinc-300 h-8 rounded-xl mx-2 border-zinc-300 border-[10px]'> */}
                        <h1 className={cn(
                            'leading-tighter',
                            // 'translate-y-[60px]'
                        )}>
                            Everman<span className="highlight">.</span>
                        </h1>
                    </div>
                </motion.div>
            </section>
        </main >
    )
}