"use client"

import '@/styles/hoverscatter.css'
import gsap from 'gsap'
import splitting from 'splitting'
import { useEffect } from 'react'

export default function HoverScatter() {
    useEffect(() => {
        type SplittingResult = {
            chars?: HTMLElement[]
        };

        // const anchors = document.querySelectorAll<HTMLAnchorElement>('a[aria-hidden]');
        const container = document.getElementById('hover-scatter');

        if (!container) {
            console.log('No container found')
            return
        }

        const anchors = container.querySelectorAll<HTMLAnchorElement>('a');

        if (!anchors) {
            console.log('No anchors found')
            return
        }

        for (const anchor of anchors) {
            // Perform the splitting operation
            const res: SplittingResult[] = splitting({
                target: anchor,
                by: 'chars'
            });

            // Find the first SVG element within the anchor tag
            const icon = anchor.querySelector<SVGSVGElement>('svg');

            if (res.length > 0 && res[0].chars) {
                const chars = res[0].chars;
                const icon = anchor.querySelector<SVGSVGElement>('svg');

                // Combine the characters and the icon into a single array, filtering out any undefined values
                const elements: (HTMLElement | SVGSVGElement)[] = icon ? [...chars, icon] : [...chars];

                // Apply random styles to each character and the icon
                for (const char of elements) {
                    char.style.setProperty('--r', String(gsap.utils.random(-15, 15, 1)));
                    char.style.setProperty('--y', String(gsap.utils.random(-50, 25, 1)));
                    char.style.setProperty('--x', String(gsap.utils.random(-25, 25, 1)));
                }
            }
        }
    }, [])

    return (
        <div className='text-5xl max-w-3xl mx-auto mt-16 font-semibold' id='hover-scatter'>
            <a href='#'>Hover over me</a>
            <a href='#'>Or me!</a>
        </div>
    )
}