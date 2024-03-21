"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function TextTransition() {
    const texts = [
        "software engineer",
        "tinkerer",
        "machine teacher",
        "neural networker",
        "purveyor of fine ideas",
    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Change the text every 2.4 seconds (400ms for animation out, 400ms for animation in, and 1600ms of visibility)
        // The total duration matches the transition duration + delay so the text stays visible for 2 seconds
        const cycleTexts = setInterval(() => {
            setIndex((currentIndex) => (currentIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(cycleTexts);
    }, [texts.length]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={texts[index]}
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0, }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className='relative inline'
            >
                {texts[index]}.
            </motion.div>
            .
        </AnimatePresence>
    )
}