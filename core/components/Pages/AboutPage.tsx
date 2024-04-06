"use client"

import { motion } from 'framer-motion';
import { FADE_IN_ANIMATION_VARIANTS } from '@/config/animations';
import { cn } from '@/lib/utils';

export default function AboutPage() {
    const currentYear: number = new Date().getFullYear();
    return (
        <section>
            <motion.div
                className=''
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                <h1 className={cn(
                    "font-medium text-5xl md:text-6xl mb-4 md:mb-8",
                    "ml-6" // to compensate for the padding of the cards
                )}>
                    About
                </h1>
            </motion.div>
        </section>
    )
}