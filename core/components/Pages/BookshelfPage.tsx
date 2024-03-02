"use client"

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Box from "@/core/components/Box";
import { ParsedResult } from '@/types/reading-list';
import Link from 'next/link';

import '@/styles/bookshelf.css'

export default function BookshelfPage({ data }: { data: ParsedResult[] }) {

    const Reading = ({ name, author, type, url, comments, status, date }: ParsedResult) => {
        return (
            <div className='flex flex-col mb-8 gap-3'>
                <Link href={url || ''} target='_blank'>
                    <h2 className='text-3xl font-medium mb-2'>{name}</h2>
                    <h3 className='text-lg font-semibold'>{author}</h3>
                    <p className='text-base'>{date}</p>
                    <p className='text-base mt-4'>{comments}</p>
                </Link>
            </div>
        )
    }

    const Reading2 = ({ name, author, type, url, comments, status, date }: ParsedResult) => {
        const typemap: { [key: string]: string } = {
            'book': 'bg-blue-300 border-blue-200',
            'article': 'bg-green-300 border-green-200',
            'journal': 'bg-pink-300 border-pink-200',
            'essay': 'bg-red-300 border-red-200',
        }

        return (
            <motion.div
                className={cn(
                    // 'border-t-2 border-x-2 border-black', 
                    'px-4 py-2 hover:underline hover:underline-offset-2 transition-all',
                    type && typemap[type],
                )}>
                <Link href={url || ''}>
                    <h2 className='text-lg font-medium'>{name}</h2>
                    <motion.div
                        className='transition-all'
                        layout
                        // apply layout transition to this element
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* <h3 className='text-lg font-semibold'>{author}</h3> */}
                        {/* <p className='text-base'>{date}</p> */}
                        {/* <p className='text-base mt-4'>{comments}</p> */}
                    </motion.div>
                </Link>
            </motion.div>
        )
    }

    const currentYear: number = new Date().getFullYear();
    return (
        <section>
            {/* TODO: DO the animate when in view trick here */}
            <motion.div
                className='mx-auto px-4 md:px-16'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                {/* <div className={cn(
                    'flex flex-col border-2 p-4 rounded-2xl border-gray-800',
                    // 'font-serif antialiased text-[#111111]'
                )}>
                    {data.map((reading: ParsedResult, index: number) => (
                        <Reading key={index} {...reading} />
                    ))}
                </div> */}
                <div className='h-full flex flex-col-reverse lg:flex-row'>
                    <div className="flex flex-col w-full lg:w-1/2 rounded-2xl p-4 bg-amber-100">
                        <h2 className="text-6xl text-black font-medium mb-6 mt-2 ml-4">Reading List</h2>
                        <div className='flex flex-col border-white/20 border-2 bg-amber-100 rounded-xl overflow-clip'>
                            <div className='flex flex-col'>
                                {data.filter((reading: ParsedResult) => !reading.comments).map((reading: ParsedResult, index: number) => (
                                    <Reading2 key={index} {...reading} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full w-full lg:w-1/2 p-8">
                        <h2 className="text-6xl text-black font-medium">Featured Reads</h2>
                        <hr className='my-4' />
                        {data.filter((reading: ParsedResult) => reading.comments).map((reading: ParsedResult, index: number) => (
                            <Reading key={index} {...reading} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}