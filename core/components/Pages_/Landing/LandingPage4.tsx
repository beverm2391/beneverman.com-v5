import { cn } from "@/lib/utils";
import RetroGrid from "../../magicui/RetroGrid";
import { PinContainer } from "../../aceternity/3DPin";

export default function LandingPage() {
    return (
        <div className={cn(
            // 'bg-[#d7d9f7]',
            'absolute top-0 left-0 h-full w-full',
            'flex flex-col items-center',
            'pt-24 px-16 pb-16'
        )}>
            <div className='relative flex flex-col w-full h-full gap-4 max-w-[1300px] pt-8'>
                <p className='text-4xl font-medium'>
                    Hey! I'm,
                </p>
                <h1
                    className={cn(
                        "text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]",
                        "font-bold",
                        // "uppercase",
                        "tracking-tight",
                        "leading-tight",
                        "relative"
                    )}>
                    Ben<br className="hidden" />{' '}Everman<span className="text-red-500">.</span>
                </h1>
                <p className='leading-[1.3] text-4xl font-medium mb-8'>
                    I do consulting and contract work under <span className='text-red-500'>EverTech</span>
                    . I specialize in <span className='text-red-500 '>machine learning</span> and <span className='text-red-500'>full-stack development</span>.
                </p>
                <div className='flex flex-row w-full gap-8'>
                </div>
            </div>
        </div >
    )
}