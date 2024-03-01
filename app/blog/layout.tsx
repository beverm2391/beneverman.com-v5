"use client"

import { FADE_IN_ANIMATION_VARIANTS } from "@/config/animations";
import { motion } from "framer-motion";
import DoubleHorizontalRule from "@/core/components/DoubleHorizontalRule";
import "@/styles/blog.css"

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
            {/* <motion.h1
                className="mb-4"
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                Writing
            </motion.h1> */}
            {/* <DoubleHorizontalRule className="" /> */}
            <motion.div
                // className="py-24 w-[84%] md:w-[87.5%] px-[8%] md:pl-[12.5%] max-w-[1400px]"
                className="py-8 md:py-24"
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}