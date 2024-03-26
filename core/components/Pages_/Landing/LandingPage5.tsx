"use client"

import { cn } from '@/lib/utils'
import Waves from '../../WavesV1'
import CustomCursor from '../../CustomCursor'


export default function LandingPage() {
    return (
        <>
            <CustomCursor />
            <div className={cn(
                // 'bg-[#d7d9f7]',
                'absolute top-0 left-0 h-full w-full',
                'flex flex-col items-center',
                'pt-24',
                // 'px-8 md:px-16',
                'overflow-hidden',
                '[&>*]:px-8 md:[&>*]:px-16',
            )}>
                {/* <div className='absolute top-0 left-0 w-full h-full bg-grid-black/[0.2] [mask-image:radial-gradient(white,transparent)]' /> */}
                {/* <div className='absolute top-0 left-0 lg:w-1/2 p-4 z-10 translate-y-[100px] ml-8'>
                <h2 className='text-3xl md:text-4xl lg:text-4xl font-medium'>
                    software engineer, machine teacher, purveyor of bad ideas
                </h2>
                </div> */}
                <div className={cn(
                    'relative flex flex-col w-full h-full justify-center',
                    'gap-4 pt-8',
                    // 'bg-neutral-200 border-neutral-300 border-2',
                    // 'max-w-[1300px]',
                    // 'scale-[1.2] z-0'
                    // '[mask-image:radial-gradient(white,transparent)]'
                )}>
                    {/* <div className={cn(
                        'max-w-[1300px] z-20 p-4',
                        // 'border-neutral-300 border-2'
                    )}>
                        <h2 className={cn(
                            'text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl',
                            'font-bold',
                            'uppercase',
                            'tracking-tight',
                            'leading-tight',
                            'pointer-events-auto',
                        )}>
                            I'm a software engineer, machine teacher, and purveyor of ideas. I do consulting and contract work under <span className='highlight' >EverTech</span>
                            . I specialize in <span className='highlight' >machine learning/AI</span> and <span className='highlight' >full-stack development</span>. I write about my work and other things that interest me, and I keep an updated reading list.
                        </h2>
                    </div> */}
                    <Waves />
                </div>
                <div
                    className={cn(
                        'flex flex-row w-full justify-between',
                        "text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]",
                        "font-bold",
                        "uppercase",
                        "tracking-tight",
                        "leading-tight",
                        'text-[var(--hero-text-color)]',
                    )}>
                    <h1 className='inline leading-tighter'>Ben</h1>
                    <h1 className='inline leading-tighter'>Everman<span className="highlight">.</span></h1>
                </div>
            </div >
        </>
    )
}