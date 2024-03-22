import { cn } from "@/lib/utils";
import RetroGrid from "../../magicui/RetroGrid";

export default function LandingPage() {
    return (
        <div className={cn(
            // 'bg-[#d7d9f7]',
            'absolute top-0 left-0 h-full w-full',
            'flex flex-col items-center',
            'pt-24 px-16 pb-16'
        )}>
            <div className='relative flex flex-col w-full h-full gap-8 max-w-[1300px] pt-16'>
                <h1
                    className={cn(
                        "text-6xl md:text-7xl lg:text-[9rem] xl:text-[10rem] 2xl:text-[11rem]",
                        "font-bold",
                        "uppercase",
                        "tracking-tight",
                        "leading-tight",
                    )}>
                    Ben<br className="hidden" />{' '}Everman<span className="text-red-500">.</span>
                </h1>
                <p className='leading-[1.3] text-5xl font-medium'>
                    I do consulting and contract work under <span className='text-red-500'>EverTech</span>
                    . I specialize in <span className='text-red-500 '>machine learning</span> and <span className='text-red-500'>full-stack development</span>
                    .</p>
            </div>
        </div >
    )
}