import { FC, memo } from "react"
import { cn } from "@/lib/utils"

const Code: FC<any> = memo(({ className, ...props }) => {
    return (
        <code
            className={cn(
                "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm bg-gray-800 text-gray-100",
                className
            )}
            {...props}
        />
    )
})

const ClientComponents = {
    code: Code,
}

export default ClientComponents