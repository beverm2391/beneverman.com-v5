"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const Button = ({ children, ...props }: { children: React.ReactNode }) => {
    const [clicks, setClicks] = useState(0)
    const handleClick = () => setClicks(clicks + 1)
    return (
        <button
            className={cn(
                "px-4 py-2 bg-transparent text-white rounded-md",
                "focus:outline-none focus:ring-2",
            )}
            onClick={handleClick}
            {...props}
        >
            <p>{clicks}</p>
            {children}
        </button>
    )
}

const ClientComponents = {
    Button,
}

export default ClientComponents