"use client"

import { FADE_IN_ANIMATION_VARIANTS } from "@/config/animations";
import { motion } from "framer-motion";
import DoubleHorizontalRule from "@/core/components/DoubleHorizontalRule";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
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
            <motion.h1
                className="text-6xl sm:text-8xl mb-4"
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                Writing
            </motion.h1>
            <DoubleHorizontalRule className="mt-24 mb-12" />
            <motion.div
                className="mx-auto max-w-4xl"
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}