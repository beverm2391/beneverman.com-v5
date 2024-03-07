"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

import "@/styles/textreveal.css"

export default function TextReveal({ children, className } : { children?: React.ReactNode, className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) { console.error('containerRef is not defined'); return; } // check if containerRef is defined
        const updateCursor = ({ x, y } = { x: 0, y: 0 }) => {
            containerRef.current && containerRef.current.style.setProperty('--x', `${x}px`);
            containerRef.current && containerRef.current.style.setProperty('--y', `${y}px`);
        };
        containerRef.current && containerRef.current.addEventListener('pointermove', updateCursor); // add event listener
        return () => { containerRef.current && containerRef.current.removeEventListener('pointermove', updateCursor)}; // remove event listener
    }, []);

    return (
        <div ref={containerRef} className={cn("mask-container", className)}>
            {children}
        </div>
    )
}