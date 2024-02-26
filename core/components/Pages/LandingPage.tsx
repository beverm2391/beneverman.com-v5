"use client"

import { FADE_IN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from "@/config/animations";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import DoubleHorizontalRule from "../DoubleHorizontalRule";
import Image from "next/image";
import Box from "@/core/components/Box";

import image1 from "@/public/assets/0_0.webp"
import image2 from "@/public/assets/0_1.webp"

import image4 from "@/public/assets/0_3.webp"

import GradientComponent from "../GradientComponent";
import ScrollText from "../ScrollText";



export default function LandingPage() {
    const currentYear: number = new Date().getFullYear();

    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section className="font-normal">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
                viewport={{ once: true }}
            >
                <motion.h1
                    className="text-6xl sm:text-8xl mb-4"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                >
                    Ben Everman<br />
                    <span className="">&copy;{currentYear}</span>
                </motion.h1>
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
            </motion.div>
            <div className='flex flex-col items-center justify-center my-24'>
                <ScrollText text="Ben Everman" />
            </div>
            <section className="h-[60vh] w-full relative">
                <GradientComponent />
            </section>
        </section>
    )
}