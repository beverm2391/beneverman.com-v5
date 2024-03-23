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
                'pt-24 px-8 md:px-16'
            )}>
                {/* <div className='absolute top-0 left-0 lg:w-1/2 p-4 z-10 translate-y-[100px] ml-8'>
                <h2 className='text-3xl md:text-4xl lg:text-4xl font-medium'>
                    software engineer, machine teacher, purveyor of bad ideas
                </h2>
            </div> */}
                <div className={cn(
                    'relative flex flex-col w-full h-full',
                    'gap-4 max-w-[1300px] pt-8',
                    'bg-neutral-200 border-neutral-300 border-2',
                    // 'scale-[1.2] z-0'
                    // '[mask-image:radial-gradient(white,transparent)]'
                )}>
                    {/* <a href=""> */}
                        <Waves />
                    {/* </a> */}
                </div>
                <div
                    className={cn(
                        'realtive flex flex-row w-full justify-between',
                        "text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]",
                        "font-bold",
                        "uppercase",
                        "tracking-tight",
                        "leading-tight",
                        "relative"
                    )}>
                    <h1>Ben</h1>
                    <h1>Everman<span className="text-red-500">.</span></h1>
                </div>
            </div >
        </>
    )
}