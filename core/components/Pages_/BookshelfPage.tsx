"use client"

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ParsedResult } from '@/types/reading-list';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/core/components/shadcn/tabs"
import '@/styles/bookshelf.css'
import { FADE_IN_ANIMATION_VARIANTS } from '@/config/animations';

const typemap: { [key: string]: string } = {
    'book': 'text-blue-500',
    'article': 'text-green-500',
    'journal': 'text-yellow-500',
    'other': 'text-red-500',
}

export default function BookshelfPage({ data }: { data: ParsedResult[] }) {

    const ReadingListItem = ({ name, author, type, url, comments, status, date }: ParsedResult) => {
        return (
            <motion.div
                className={cn('px-4 py-2 hover:underline hover:underline-offset-2 transition-all')}>
                <Link href={url || ''}>
                    <h2 className='text-lg font-medium inline'>{name}</h2>
                    <FaCircle className={cn('w-3 h-3 ml-2 inline translate-y-[-1px]', type ? (type in typemap) ? typemap[type] : 'text-red-500' : 'text-red-500')} />
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
                    </motion.div>
                </Link>
            </motion.div>
        )
    }

    const ReadingList = ({ data }: { data: ParsedResult[] }) => (
        <motion.div
            className="flex flex-col w-full"
            // ! Uncomment this to animate the reading list
            // initial="hidden"
            // animate="show"
            // transition={{ duration: 0.4 }}
            // variants={
            //     {
            //         hidden: {},
            //         show: {
            //             transition: {
            //                 staggerChildren: 0.15,
            //             },
            //         },
            //     }
            // }
        >
            <motion.div
                className='flex flex-col md:flex-row w-full md:items-center'
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                <h2 className="text-6xl font-medium mb-2 md:mb-8">
                    Reading List
                </h2>
                <div className='flex md:ml-8 p-4'>
                    {Object.keys(typemap).map((type: string, index: number) => (
                        <span key={index} className='text-base font-medium inline mr-4'>
                            <FaCircle className={cn('w-3 h-3 inline translate-y-[-2px]', typemap[type])} /> {type}
                        </span>
                    ))}
                </div>
            </motion.div>
            <motion.div
                className={cn(
                    'flex flex-col',
                    'bg-white rounded-2xl',
                    'shadow-md p-4'
                )}
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                <div className='flex flex-col overflow-clip'>
                    {data.filter((reading: ParsedResult) => !reading.comments).map((reading: ParsedResult, index: number) => (
                        <ReadingListItem key={index} {...reading} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )

    const FeaturedReadingItem = ({ name, author, type, url, comments, status, date }: ParsedResult) => {
        return (
            <div className='flex flex-col mb-8 gap-3'>
                <Link href={url || ''} target='_blank'>
                    <h2 className='text-3xl font-medium mb-2'>{name}</h2>
                    <h3 className='text-lg italic'>{author}</h3>
                    {/* <p className='text-base'>{date}</p> */}
                    <p className='text-base mt-4'>{comments}</p>
                </Link>
            </div>
        )
    }

    const FeaturedReading = ({ data }: { data: ParsedResult[] }) => (
        <motion.div
            className={cn("flex flex-col h-full w-full",)}
            // ! Uncomment this to animate the featured reading
            // initial="hidden"
            // animate="show"
            // transition={{ duration: 0.4 }}
            // variants={
            //     {
            //         hidden: {},
            //         show: {
            //             transition: {
            //                 staggerChildren: 0.15,
            //             },
            //         },
            //     }
            // }
        >
            <motion.h2
                className="text-6xl font-medium mb-2 md:mb-8"
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                Featured Reads
            </motion.h2>
            {/* <motion.hr className='my-4' variants={FADE_IN_ANIMATION_VARIANTS} /> */}
            <motion.div
                className='bg-white rounded-2xl shadow-md p-8'
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                {data
                    .filter((reading: ParsedResult) => reading.comments)
                    .map((reading: ParsedResult, index: number) => (
                        <FeaturedReadingItem key={index} {...reading} />
                    ))}
            </motion.div>
        </motion.div>
    )

    const currentYear: number = new Date().getFullYear();
    return (
        <section>
            {/* TODO: DO the animate when in view trick here */}
            <motion.div
                className='mx-auto px-4 md:px-16 w-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}    
            >
                <div className='h-full flex flex-col-reverse lg:flex-row gap-8 max-w-4xl mx-auto'>
                    <Tabs defaultValue="list" className="w-full">
                        <TabsList className='mb-8'>
                            <TabsTrigger value="list" className="text-2xl font-medium rounded-xl">Reading List</TabsTrigger>
                            <TabsTrigger value="featured" className="text-2xl font-medium rounded-xl">Featured Reads</TabsTrigger>
                        </TabsList>
                        <TabsContent value="list">
                            <ReadingList data={data} />
                        </TabsContent>
                        <TabsContent value='featured'>
                            <FeaturedReading data={data} />
                        </TabsContent>
                    </Tabs>
                </div>
            </motion.div>
        </section>
    )
}