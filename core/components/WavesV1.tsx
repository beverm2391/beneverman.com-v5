"use client"

import React, { useEffect, useRef } from 'react';
import { type Sketch } from '@p5-wrapper/react';
import { NextReactP5Wrapper, HexToRGB } from '@/lib/utils';

export default function Waves() {

    const sketchRef = useRef<HTMLDivElement>(null); // need to type here to avoid the linter null checks below

    // Use p5 to create the sketch
    const sketch: Sketch = (s) => {
        s.setup = () => {
            if (!sketchRef.current) {
                console.error("sketchRef.current is null")
                return;
            } // Ensure the div container has been created
            const canvas = s.createCanvas(sketchRef.current.offsetWidth, sketchRef.current.offsetHeight); // Ensure the canvas fills the div container
            canvas.parent(sketchRef.current); // Assign the canvas to the div
            s.noFill(); // No fill color
            s.smooth(); // Anti-aliasing
        };

        // ! Params ================================
        let phase = 0; // Phase offset (starts at 0 and is incremented for the animation)
        let amplitude = 50 // Height of the wave
        let frequency = 0.004; // Frequency of the wave (peak to peak distance)

        // ! Style Params ================================
        const linesAmount = 25; // Number of lines
        const fadeAmount = 0.5 // Fade amount (0 = no fade, 1 = full fade)
        const noiseAmount = 0.1 // Noise amount (0 = no noise, 1 = full noise)

        // ! Colors ================================
        const color1 = HexToRGB("#23074d")
        const color2 = HexToRGB("#cc5333")

        s.draw = () => {
            s.clear(); // Clear the canvas each frame
            phase += 0.015; // Increment phase (this controls the speed of the wave)
            // //amplitude = s.map(s.mouseX, 0, s.width, 0, 200);
            // amplitude = 40 + 50 * s.sin(phase * 0.05); // Animate amplitude
            // amplitude = 60; // Height of the wave
            // const maxAmplitude = 90; // Maximum amplitude
            // const minAmplitude = 50; // Minimum amplitude
            // let amplitude = minAmplitude + (maxAmplitude - minAmplitude) * s.sin(phase * 0.05); // Animate amplitude

            for (var k = 0; k < linesAmount; k++) {

                const color = [ // Interpolate between color1 and color2
                    s.lerp(color1[0], color2[0], k / (linesAmount - 1)), // lerp = linear interpolation
                    s.lerp(color1[1], color2[1], k / (linesAmount - 1)),
                    s.lerp(color1[2], color2[2], k / (linesAmount - 1)),
                ];

                const alpha = s.map(k, 0, linesAmount - 1, 255 * (1 - fadeAmount), 255); // Fade the lines
                s.stroke(color[0], color[1], color[2], alpha); // Set stroke color

                // s.stroke(0, 0, 0, (k / (linesAmount - 1) * 255)); // Fade lines
                // s.stroke(0, 0, 0, 255);
                s.strokeWeight(1.8); // Thicker lines
                const offset = (1 - k / linesAmount) * 4;
                s.beginShape();
                for (var i = 0; i < (s.width + 4); i += 4) {
                    let y = s.height * 0.5;
                    y += s.sin(i * (frequency * 1) - phase / 1 + offset) * amplitude;
                    y += s.sin(i * (frequency * 2) - phase / 1 + offset) * amplitude;

                    // add noise for valiability
                    const lastSineNoise = s.noise(phase * 0.1 + (i / s.width) * 5) * noiseAmount;
                    y += s.sin(i * (frequency * 4) - phase + offset + lastSineNoise) * amplitude;
                    // y += s.sin(i * (frequency * 4) - phase / 1 + offset) * amplitude; // no noise
                    s.vertex(i, y);
                }
                s.endShape();
            };
        }

        // Adjust canvas size when the div container size changes
        s.windowResized = () => {
            console.log("resized!")
            // @ts-ignore
            s.resizeCanvas(sketchRef.current.offsetWidth, sketchRef.current.offsetHeight);
        };
    }

    return <div ref={sketchRef} className="w-full h-full -z-10" id="p5-sketch"><NextReactP5Wrapper sketch={sketch} /></div>;
};