import { cn } from "@/lib/utils"

export default function DoubleHorizontalRule({ className } : { className?: string}) {
    return (
      <div className={cn("mt-12", className)}>
        <hr className="border-black border" />
        <div className="w-full h-[10px]" />
        <hr className="border-black border" />
      </div>
    )
  }