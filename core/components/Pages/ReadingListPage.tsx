"use client"

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ParsedResult } from '@/types/reading-list';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/core/components/shadcn/tabs"
import '@/styles/reading.css'
import { FADE_IN_ANIMATION_VARIANTS } from '@/config/animations';

const typemap: { [key: string]: string } = {
    'book': 'text-blue-500',
    'article': 'text-green-500',
    'journal': 'text-yellow-500',
    'other': 'text-red-500',
}

export default function ReadingListPage({ data }: { data: ParsedResult[] }) {

    const ReadingListItem = ({ name, author, type, url, comments, status, date }: ParsedResult) => {
        return (
            <motion.div
                className={cn('py-2 hover:underline hover:underline-offset-2 transition-all text-[var(--text-body-color)')}>
                <Link href={url || ''} target='_blank'>
                    <h2 className='text-lg font-medium inline'>{name}</h2>
                    <FaCircle className={cn('w-3 h-3 ml-2 inline translate-y-[-1px]', type ? (type in typemap) ? typemap[type] : 'text-red-500' : 'text-red-500')} />
                </Link>
            </motion.div>
        )
    }

    const ReadingList = ({ data }: { data: ParsedResult[] }) => (
        <motion.div
            className="flex flex-col w-full text-[var(--text-body-color)]"
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
                <h2 className="text-5xl md:text-6xl font-medium mb-2 md:mb-8">
                    Reading List
                </h2>
                <div className='flex md:ml-8 pt-2 pb-4'>
                    {Object.keys(typemap).map((type: string, index: number) => (
                        <span key={index} className='text-sm font-medium inline mr-4'>
                            <FaCircle className={cn('w-3 h-3 inline translate-y-[-2px]', typemap[type])} /> {type}
                        </span>
                    ))}
                </div>
            </motion.div>
            <motion.div
                className={cn(
                    'flex flex-col',
                    // 'md:border rounded-2xl border-[var(--text-body-color)] md:p-4',
                    // 'bg-white rounded-2xl',
                    // 'shadow-md p-4'
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
            <div className='flex flex-col mb-8 gap-3 '>
                <Link href={url || ''} target="_blank">
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
            className={cn("flex flex-col h-full w-full text-[var(--font-body-color")}
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
                className="text-5xl md:text-6xl font-medium mb-8"
                variants={FADE_IN_ANIMATION_VARIANTS}
            >
                Featured Reads
            </motion.h2>
            {/* <motion.hr className='my-4' variants={FADE_IN_ANIMATION_VARIANTS} /> */}
            <motion.div
                className={cn(
                    // 'bg-white rounded-2xl shadow-md'
                    // 'md:border-2 border-neutral-200',
                    // 'p-0 md:p-8'
                )}
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
                className=''
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className='h-full flex flex-col-reverse lg:flex-row gap-8 px-2'>
                    <Tabs defaultValue="list" className="w-full">
                        <TabsList className='mb-8 bg-transparent border border-zinc-600 rounded-xl'>
                            <TabsTrigger
                                value="list"
                                className={cn(
                                    "text-lg md:text-xl",
                                    "data-[state=active]:bg-transparent data-[state=active]:text-[var(--hover-text-color)]",
                                    "data-[state=active]:shadow-none data-[state=active]:border-0",
                                    "text-[var(--text-body-color)]"
                                )}
                            >
                                Reading List
                            </TabsTrigger>
                            <TabsTrigger
                                value="featured"
                                className={cn(
                                    "text-lg md:text-xl",
                                    "data-[state=active]:bg-transparent data-[state=active]:text-[var(--hover-text-color)]",
                                    "data-[state=active]:shadow-none data-[state=active]:border-0",
                                    "text-[var(--text-body-color)]"
                                )}
                            >
                                Featured Reads
                            </TabsTrigger>
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