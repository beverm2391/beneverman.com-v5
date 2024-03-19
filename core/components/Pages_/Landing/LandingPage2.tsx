import { cn } from '@/lib/utils';
import TextTransition from '../../TextTransition';

export default function LandingPage() {
    return (
        <div className={cn(
                'top-0 left-0 absolute w-full h-full flex flex-col pt-16 px-8 mb-8',
                'bg-[#f2e9e2]'
            )}>
            <div className={cn(
                'h-full',
                ' border-slate-900',
                'w-full px-[10vw]',
                'pb-24',
                )}>
                <div className="">
                    <h1 className="text-[11rem] font-bold tracking-tight uppercase">
                        <span>
                            Ben Everman.
                        </span>
                    </h1>
                </div>
                <div className="text-6xl">
                    <TextTransition />
                </div>
            </div>
        </div>
    );
} 