"use client";
import { MaskContainer } from "@/core/components/aceternity/SVGMaskEffect";
import { cn } from "@/lib/utils";
import RetroGrid from "@/core/components/magicui/RetroGrid";

export function SVGMaskEffectDemo() {
    const MainText = () => (
        <div className="max-w-6xl text-black gap-4 w-full">
            <p className='text-4xl font-medium mb-4'>
                Hey! I'm,
            </p>
            <h1
                className={cn(
                    "text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[10rem]",
                    "font-bold",
                    // "uppercase",
                    "tracking-tight",
                    "leading-tight",
                )}>
                Ben<br className="hidden" />{' '}Everman<span className="text-red-500">.</span>
            </h1>
            <p className='leading-[1.3] text-4xl font-medium mb-8'>
                I do consulting and contract work under <span className='text-red-500'>EverTech</span>
                . I specialize in <span className='text-red-500 '>machine learning</span> and <span className='text-red-500'>full-stack development</span>.
            </p>
        </div>
    )

    const RevealText = () => (
        <div className="max-w-4xl font-black">
            <p className='text-4xl font-medium'>
                Hey! I'm,
            </p>
            a person trying to make a difference in the world.
        </div>
    )

    return (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center overflow-hidden text-black">
                <MaskContainer
                    revealText={
                        <MainText />
                    }
                    className="border rounded-md w-full"
                >
                    <RevealText />
                </MaskContainer>
        </div>
    );
}
