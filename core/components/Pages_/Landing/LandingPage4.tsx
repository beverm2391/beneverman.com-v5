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
                    <PinContainer
                        title="/ui.aceternity.com"
                        href="https://twitter.com/mannupaaji"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Aceternity UI
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Customizable Tailwind CSS and Framer Motion Components.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                </div>
            </div>

        </div >
    )
}