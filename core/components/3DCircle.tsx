"use client"
import { useEffect } from "react";
import { gsap } from "gsap";

export default function ThreeDCircle() {
    const Animation = () => {
        // Targeting elements with class 'circle' for animation
        gsap.to(".circle", {
            y: -20, // Reduced for subtlety
            ease: "sine.inOut",
            stagger: { each: 0.1, from: "end", repeat: -1, yoyo: true },
            borderColor: "#f87171"
        });
    };

    useEffect(() => {
        Animation();
    }, []);

    return (
        <main className="flex items-center justify-center text-white p-8">
            <section className="w-[500px] h-[500px] relative grid place-items-center rotate-x-50 overflow-hidden">
                <div className="circle rounded-full absolute w-full h-full border border-neutral-600 shadow-md"></div>
                <div className="circle rounded-full absolute w-[95%] h-[95%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[90%] h-[90%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[85%] h-[85%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[80%] h-[80%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[75%] h-[75%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[70%] h-[70%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[65%] h-[65%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[60%] h-[60%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[55%] h-[55%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[50%] h-[50%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[45%] h-[45%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[40%] h-[40%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[35%] h-[35%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[30%] h-[30%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[25%] h-[25%] border border-neutral-600"></div>
                <div className="circle rounded-full absolute w-[20%] h-[20%] border border-neutral-600"></div>
            </section>
        </main>
    )
}