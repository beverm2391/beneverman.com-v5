import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { BorderBeam } from '../../magicui/BorderBeam'

const BentoCard = ({ children, className }: { children?: ReactNode; className?: string }) => (
    <div
        className={cn(
            "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
            // "bg-white",
            "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className
        )}
    >
        {children}
        <div
            className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
)

export default function LandingPage() {
    const EverTech = ({ className }: { className?: string }) => (
        <span className={cn(
            'text-red-200 px-6 py-2 bg-slate-500 rounded-full inline-block text-4xl',
            className
        )}>
            EverTech
        </span>
    )

    return (
        <div className='absolute top-0 left-0 h-full w-full flex flex-col items-center pt-24 px-16 pb-16'>
            <div className='relative flex flex-col w-full h-full gap-8 max-w-[1300px]'>
                <div className='flex flex-row gap-8 w-full'>
                    <BentoCard className='p-8'>
                        <h1
                            className={cn(
                                "text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem]",
                                "font-bold",
                                "uppercase",
                                "tracking-tight",
                                "leading-tight",
                            )}>
                            Ben<br className="hidden" />{' '}Everman<span className="text-red-500">.</span>
                        </h1>
                    </BentoCard>
                    <BentoCard className='flex-grow'>
                    </BentoCard>
                </div>
                <div className='row-2 flex flex-row-reverse gap-8 h-full'>
                    <BentoCard className='text-6xl p-8 w-2/3'>
                        <BorderBeam size={250} duration={12} delay={9} />
                        <p className='leading-[1.3]'>
                            I do consulting and contract work under{' '}
                            <span className='text-red-500'>EverTech</span>
                            . I specialize in{' '}
                            <span className='text-red-500 '>machine learning</span>
                            {' '}and{' '}
                            <span className='text-red-500'>full-stack development</span>
                            .</p>
                    </BentoCard>
                    <BentoCard className='overflow-hidden flex-grow'>
                    </BentoCard>
                </div>
            </div>
        </div>
    )

    // return (
    //     <div className='absolute top-0 left-0 h-full w-full flex flex-col pt-24 px-8 pb-16'>
    //         <h1
    //             className={cn(
    //                 "text-[7rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[12rem]",
    //                 "font-bold",
    //                 "uppercase",
    //                 "tracking-tight",
    //                 "leading-tight",
    //             )}>
    //             Ben<br className="hidden" />{' '}Everman<span className="text-red-500">.</span>
    //         </h1>
    //         <div className='flex flex-col items-center text-5xl font-serif w-full antialiased mb-8'>
    //         </div>
    //         <div className='flex flex-row w-full'>
    //             <div className='flex flex-col text-7xl w-2/3'>
    //                 <p>I do consulting and contract work under <EverTech />. I specialize in <span className='text-red-200 '>machine learning</span> and <span className='text-red-200'>full-stack development</span>.</p>
    //             </div>
    //             <div>
    //                 <GradientComponent />
    //             </div>
    //         </div>
    //     </div>
    // )
}