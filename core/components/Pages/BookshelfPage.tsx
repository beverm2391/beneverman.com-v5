"use client"

import { motion } from 'framer-motion';
import Box from "@/core/components/Box";
import { FADE_IN_ANIMATION_VARIANTS } from '@/config/animations';
import DoubleHorizontalRule from '@/core/components/DoubleHorizontalRule';
import { ParsedResult } from '@/types/reading-list';

export default function BookshelfPage({ data }: { data: ParsedResult[] }) {

    const Reading = ({ name, author, type, url, comments, status, date }: ParsedResult) => {
        return (
            <motion.div
                className='flex flex-col mb-4 gap-3'
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                <h2 className='text-4xl font-medium'>{name}</h2>
                <h3 className='text-lg font-semibold'>{author}</h3>
                <p className='text-base'>{comments}</p>
            </motion.div>
        )
    }

    const currentYear: number = new Date().getFullYear();
    return (
        <section>
            {/* TODO: DO the animate when in view trick here */}
            <motion.div
                className='max-w-3xl mx-auto'
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.07,
                        },
                    },
                }}
            >
                <div className='flex flex-col'>
                    {data.map((reading: ParsedResult, index: number) => (
                        <Reading key={index} {...reading} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}