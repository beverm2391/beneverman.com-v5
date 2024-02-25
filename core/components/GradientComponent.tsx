'use client'

import { Gradient } from "whatamesh";
import '@/styles/gradient.css';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GradientComponent() {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);

    return (
        <canvas
            id="gradient-canvas"
            className="w-full h-full"
            data-js-darken-top
            data-transition-in
        />
    )
}