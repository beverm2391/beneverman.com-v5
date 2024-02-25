"use client"

import { FADE_UP_ANIMATION_VARIANTS } from "@/config/animations";
import { motion } from "framer-motion";
import DoubleHorizontalRule from "./DoubleHorizontalRule";

function Box() {
    return (
        <div className="border-black w-full aspect-square relative">
            <div className="absolute top-0 left-1/2 w-[95%] transform -translate-x-1/2 border-[1px] border-black"/>
            <div className="absolute bottom-0 left-1/2 w-[95%] transform -translate-x-1/2 border-[1px] border-black"/>
            <div className="absolute left-0 top-1/2 h-[95%] transform -translate-y-1/2 border-[1px] border-black"/>
            <div className="absolute right-0 top-1/2 h-[95%] transform -translate-y-1/2 border-[1px] border-black"/>
        </div>
    )
}

export default function LandingPage() {
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
                            staggerChildren: 0.03,
                        },
                    },
                }}
            >
                <motion.h1
                    className="text-6xl sm:text-8xl font-semibold sm:font-medium mb-4"
                    variants={FADE_UP_ANIMATION_VARIANTS}
                >
                    Ben Everman<br />
                    <span className="">&copy;{currentYear}</span>
                </motion.h1>
                {/* <motion.p
                className="font-inter sm:text-lg"
                variants={FADE_UP_ANIMATION_VARIANTS}    
            >
                I&apos;m 23 y/o and I live in Atlanta, Ga.
            </motion.p> */}
            </motion.div>
            {/* <DoubleHorizontalRule /> */}
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                <div className="flex flex-col items-center justify-center">
                    <Box />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Box />
                </div>
            </motion.div>
        </section>
    )
}