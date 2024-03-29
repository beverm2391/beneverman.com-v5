"use client"

import { FADE_IN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from "@/config/animations";
import { motion, useInView } from "framer-motion";
import { Suspense, useRef } from "react";

import Waves from "../../WavesV1";
import { cn } from "@/lib/utils";
import BoxesDemo, { Boxes } from "../../BackgroundBoxes";
import { LampContainer } from "../../Lamp";
import ResponsiveGrid from "../../ResponsiveGrid";
import TextTransition from "../../TextTransition";

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
                <div className="w-full h-full flex flex-col p-8 items-center justify-center">
                    {/* <h2
                            className={cn(
                                "text-3xl md:text-4xl lg:text-5xl xl:text-6xl 7xl:text-6xl mt-12 mb-4",
                                "text-[var(--hero-text-color)]",
                            )}>
                            My name is...
                        </h2> */}
                    {/* <div className='m-12 p-12 w-full'>
                        <h2 className="text-4xl italic font-light font-[times-new-roman]">
                            "Ben is just crazy enough to keep things interesting, and just sane enough to keep things together."
                        </h2>
                    </div> */}
                    <div className='flex flex-col items-center justify-center my-36 -translate-y-10 z-10'>
                        <div className={cn(
                            // "bg-red-500",
                            // "bg-gradient-to-r from-black via-slate-900 to-black",
                            "bg-[var(--hero-text-color)]",
                            "bg-clip-text",
                            // "translate-y-[-10vh] md:translate-y-0",
                            // "translate-y-[-20vh]",
                        )}>
                            <h1
                                className={cn(
                                    "text-[7rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[12rem]",
                                    "font-bold",
                                    "uppercase",
                                    "text-transparent",
                                    "tracking-tight",
                                )}>
                                Ben<br className="hidden" />{' '}E<span className="text-red-500">.</span>
                            </h1>
                        </div>
                        <h2 className={cn(
                            "text-3xl md:text-4xl lg:text-5xl xl:text-6xl 7xl:text-6xl",
                            "text-[var(--hero-text-color)] font-medium",
                        )}>
                            <TextTransition/>
                        </h2>
                    </div>
                </div>
                <motion.div
                    className={cn(
                        "absolute top-0 left-0 w-full h-full overflow-hidden",
                        "[mask-image:radial-gradient(transparent,white)]",
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    {/* <ResponsiveGrid /> */}
                    {/* <Waves /> */}
                    <BoxesDemo />
                </motion.div>
            </motion.div>
        </section>
    )
}