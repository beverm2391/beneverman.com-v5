'use client'

import { Gradient } from "whatamesh";
import '@/styles/gradient.css';
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function GradientComponent({ className }: { className?: string }) {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);

    return (
        <canvas
            id="gradient-canvas"
            className={cn("w-full h-full", className)}
            data-js-darken-top
            data-transition-in
        />
    )
}