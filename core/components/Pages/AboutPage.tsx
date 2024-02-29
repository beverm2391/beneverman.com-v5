"use client"

import { motion } from 'framer-motion';
import Box from "@/core/components/Box";
import { FADE_IN_ANIMATION_VARIANTS } from '@/config/animations';
import DoubleHorizontalRule from '@/core/components/DoubleHorizontalRule';

export default function AboutPage() {
    const currentYear: number = new Date().getFullYear();
    return (
        <section>
            <motion.div
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
                {/* <motion.h1
                    className="mb-4"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                >
                    About Me
                </motion.h1> */}
                {/* <DoubleHorizontalRule/> */}
            </motion.div>
        </section>
    )
}