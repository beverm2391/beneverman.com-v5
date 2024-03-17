import { FADE_IN_ANIMATION_VARIANTS } from "@/config/animations"
import { motion } from "framer-motion"

import "@/styles/responsive-grid.css"

export default function ResponsiveGrid() {
    return (
        <div className="absolute top-0 left-0 w-full h-full responsive-grid overflow-hidden">
            <div className="vertical-grid">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i}></div>
                ))}
                <div className='show-580'></div>
                <div className='show-580'></div>
                <div className='show-760'></div>
                <div className='show-760'></div>
                <div className='show-940'></div>
                <div className='show-940'></div>
                <div className='show-1120'></div>
                <div className='show-1120'></div>
                <div className='show-1300'></div>
                <div className='show-1300'></div>
                <div className='show-1300'></div>
                <div className='show-1300'></div>
                <div className='show-1300'></div>
                <div className='show-1300'></div>
            </div>
            <div className="horizontal-grid">
                {Array.from({ length: 41 }).map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        </div>
    )
}