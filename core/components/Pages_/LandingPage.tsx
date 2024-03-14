"use client"

import { FADE_IN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from "@/config/animations";
import { motion, useInView } from "framer-motion";
import { Suspense, useRef } from "react";

import DoubleHorizontalRule from "../DoubleHorizontalRule";
import Image from "next/image";
import Box from "@/core/components/Box";

import image1 from "@/public/assets/0_0.webp"
import image2 from "@/public/assets/0_1.webp"

import image4 from "@/public/assets/0_3.webp"

import GradientComponent from "../GradientComponent";
import ScrollText from "../ScrollText";
import ThreeDCircle from "../3DCircle";
import TestR3F from "../TestR3F";
import Waves from "../WavesV1";
import TextReveal from "../TextReveal";
import { cn } from "@/lib/utils";
import ResponsiveGrid from "../ResponsiveGrid";

export function Boxes() {
    return (
        <div
            id='continer'
            className="gap-x-8 gap-y-32 mt-36 grid grid-cols-1 lg:grid-cols-3"
        >
            <motion.div
                id='box1'
                className="flex flex-col items-center hover:cursor-pointer"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <Box>
                    <div className="w-full h-full flex flex-col items-center justify-center overflow-clip relative">
                        <div className="w-[95%] h-[95%] relative p-8">
                            <Image src={image4} alt="image1" fill={true} className="opacity-90" />
                            {/* <h2 className="text-7xl font-medium text-black">Projects</h2> */}
                        </div>
                    </div>
                </Box>
                {/* <div className='w-[95%] mx-[5%] mt-8 font-inter'>
                            <h3 className="text-lg mb-2 font-semibold">Project 1</h3>
                            <p className="text-base">This is a project that I worked on when I was in college. It was a lot of fun and I learned a lot from it.</p>
                        </div> */}
            </motion.div>
            <motion.div
                id='box2'
                className="flex flex-col items-center hover:cursor-pointer"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <Box>
                    <div className="w-full h-full flex flex-col items-center justify-center overflow-clip relative">
                        <div className="w-[95%] h-[95%] relative p-8">
                            <Image src={image2} alt="image1" fill={true} className="opacity-90" />
                            {/* <h2 className="text-7xl font-medium text-black">About Me</h2> */}
                        </div>
                    </div>
                </Box>
            </motion.div>
            <motion.div
                id='box1'
                className="flex flex-col items-center hover:cursor-pointer"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <Box>
                    <div className="w-full h-full flex flex-col items-center justify-center overflow-clip relative">
                        <div className="w-[95%] h-[95%] relative p-8">
                            <Image src={image1} alt="image1" fill={true} className="opacity-90" />
                            {/* <h2 className="text-7xl font-medium text-black">Projects</h2> */}
                        </div>
                    </div>
                </Box>
            </motion.div>
        </div>
    )

}



export default function LandingPage() {
    const currentYear: number = new Date().getFullYear();

    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section className="font-normal">
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[var(--hero-background-color)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="py-36 relative z-10">
                        <div className={cn(
                            // "bg-red-500",
                            // "bg-gradient-to-r from-white via-slate-200 to-slate-100",
                            "bg-[var(--hero-text-color)]",
                            "bg-clip-text",
                            // "translate-y-[-10vh] md:translate-y-0",
                            // "translate-y-[-20vh]",
                        )}>
                            <h1
                                className={cn(
                                    "text-8xl md:text-8xl lg:text-[9rem] xl:text-[11rem] 2xl:text-[12rem]",
                                    "font-bold",
                                    "uppercase",
                                    "text-transparent",
                                    "tracking-tight",
                                    // "stroke"
                                )}>
                                Ben<br className="block md:hidden" />{' '}Everman
                            </h1>
                        </div>
                        {/* <h2
                            className={cn(
                                "text-3xl md:text-4xl lg:text-5xl xl:text-6xl 7xl:text-6xl font-serif mt-12",
                                "text-[var(--hero-text-color)]",
                            )}>
                            I do a lot of stuff.
                        </h2> */}
                    </div>
                </div>
                <ResponsiveGrid />
                <motion.div
                    className="absolute top-0 left-0 w-full h-full custom-grid overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <Waves />
                </motion.div>
            </motion.div>
        </section>
    )
}