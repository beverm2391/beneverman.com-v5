import { cn } from "@/lib/utils";

export default function Box({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <div className={cn("border-black w-full aspect-square relative", className)}>
            <div className="absolute top-0 left-1/2 w-[95%] transform -translate-x-1/2 border-[1px] border-black" />
            <div className="absolute bottom-0 left-1/2 w-[95%] transform -translate-x-1/2 border-[1px] border-black" />
            <div className="absolute left-0 top-1/2 h-[95%] transform -translate-y-1/2 border-[1px] border-black" />
            <div className="absolute right-0 top-1/2 h-[95%] transform -translate-y-1/2 border-[1px] border-black" />
            {children}
        </div>
    )
}
