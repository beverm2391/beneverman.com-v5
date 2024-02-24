'use client'

import { Gradient } from "whatamesh";
import '@/styles/gradient.css';
import { useEffect } from "react";

export default function GradientComponent() {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);

    return (
        <canvas
            id="gradient-canvas"
            className="rounded-[80px] mt-8"
            data-js-darken-top
            data-transition-in
        />
    )
}