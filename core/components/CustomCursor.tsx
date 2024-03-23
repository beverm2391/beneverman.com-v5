"use client"

import { Cursor } from "@/lib/Cursor"
import { useEffect } from "react"

export default function CustomCursor() {

    useEffect(() => {
        const getCursorPos = (ev: MouseEvent) => {
            return {
                x: ev.clientX,
                y: ev.clientY
            };
        };

        let cursor = { x: 0, y: 0 }; // Track the cursor position

        window.addEventListener('mousemove', ev => cursor = getCursorPos(ev));
        const customCursor = new Cursor(document.querySelectorAll('.cursor'));
        return () => {
            window.removeEventListener('mousemove', ev => cursor = getCursorPos(ev));
        }
    }, [])

    return (
        <>
            <svg className="cursor" width="120" height="120" viewBox="0 0 120 120">
                <defs>
                    <filter id="cursor-filter" x="-50%" y="-50%" width="200%" height="200%"
                        filterUnits="objectBoundingBox">
                        <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" />
                    </filter>
                </defs>
                <circle className="cursor__inner" cx="60" cy="60" r="20" />
            </svg>
            <svg className="cursor" width="120" height="120" viewBox="0 0 120 120" data-amt="0.1">
                <circle className="cursor__inner" cx="60" cy="60" r="20" />
            </svg>
        </>
    )
}