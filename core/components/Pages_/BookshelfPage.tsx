"use client"

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ParsedResult } from '@/types/reading-list';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';

import '@/styles/bookshelf.css'

const typemap: { [key: string]: string } = {
    'book': 'text-blue-500',
    'article': 'text-green-500',
    'journal': 'text-yellow-500',
    'essay': 'text-red-500',
}

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
        // const typemap: { [key: string]: string } = {
        //     'book': 'bg-[#bdd3d9]',
        //     'article': 'bg-[#ecc6cd]',
        //     'journal': 'bg-[#fae4c9]',
        //     'essay': 'bg-[#c6bef8]'
        // }

        return (
            <motion.div
                className={cn(
                    // 'border-t-2 border-x-2 border-black', 
                    'px-4 py-2 hover:underline hover:underline-offset-2 transition-all',
                    // type && typemap[type],
                )}>
                <Link href={url || ''}>
                    <h2 className='text-lg font-medium inline'>{name}</h2>
                    <FaCircle className={cn('w-3 h-3 ml-2 inline translate-y-[-1px]', type && typemap[type])} />
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
                <div className='h-full flex flex-col-reverse lg:flex-row gap-8'>
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className='flex flex-row w-full items-center'>
                            <h2 className="text-6xl font-medium mb-6">
                                Reading List
                                {/* <span className='align-super text-base font-medium ml-2'>{currentYear}</span> */}
                            </h2>
                            <div className='flex ml-8 p-4'>
                                {Object.keys(typemap).map((type: string, index: number) => (
                                    <span key={index} className='text-base font-medium inline mr-4'>
                                        <FaCircle className={cn('w-3 h-3 inline translate-y-[-2px]', typemap[type])}/> {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className={cn(
                            'flex flex-col',
                            // 'shadow-sm shadow-white'
                        )}>
                            <div className='flex flex-col border-2 overflow-clip'>
                                {data.filter((reading: ParsedResult) => !reading.comments).map((reading: ParsedResult, index: number) => (
                                    <Reading2 key={index} {...reading} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full w-full lg:w-1/2">
                        <h2 className="text-6xl font-medium">Featured Reads</h2>
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