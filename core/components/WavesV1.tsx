import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Waves = () => {
    const sketchRef = useRef(null);

    // Use p5 to create the sketch
    useEffect(() => {
        const sketch = (s: p5) => {
            // Phase and amplitude are used to animate the wave
            let phase = 0; // Phase offset (starts at 0 and is incremented)

            s.setup = () => {
                // Ensure the canvas fills the div container
                // @ts-ignore
                const canvas = s.createCanvas(sketchRef.current.offsetWidth, sketchRef.current.offsetHeight);
                // @ts-ignore
                canvas.parent(sketchRef.current); // Assign the canvas to the div
                s.noFill(); // No fill color
                s.smooth(); // Anti-aliasing
            };

            let amplitude = 50
            let frequency = 0.004;

            s.draw = () => {
                s.clear(); // Clear the canvas each frame

                // Update phase and amplitude for animation
                phase += 0.015; // Increment phase (this controls the speed of the wave)
                // //amplitude = s.map(s.mouseX, 0, s.width, 0, 200);
                // amplitude = 40 + 50 * s.sin(phase * 0.05); // Animate amplitude
                const linesAmount = 20;

                // amplitude = 60; // Height of the wave
                // const maxAmplitude = 90; // Maximum amplitude
                // const minAmplitude = 50; // Minimum amplitude
                // let amplitude = minAmplitude + (maxAmplitude - minAmplitude) * s.sin(phase * 0.05); // Animate amplitude

                for (var k = 0; k < linesAmount; k++) {
                    // s.stroke(0, 0, 0, (k / (linesAmount/2 - 1) * 255));
                    s.stroke(0, 0, 0, 255);
                    s.strokeWeight(1.8); // Thicker lines
                    const offset = (1 - k / linesAmount) * 4;
                    s.beginShape();
                    for (var i = 0; i < (s.width + 4); i += 4) {
                        let y = s.height * 0.5;
                        y += s.sin(i * (frequency*1) - phase/1 + offset) * amplitude;
                        y += s.sin(i * (frequency*2) - phase/1 + offset) * amplitude;

                        // add noise for valiability
                        // const lastSineNoise = s.noise(phase * 0.1 + (i / s.width) * 5) * 1;
                        // y += s.sin(i * (frequency*4) - phase + offset + lastSineNoise) * amplitude;

                        y += s.sin(i * (frequency*4) - phase/1 + offset) * amplitude; // normal sine wave
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
        };

        let myp5 = new p5(sketch);

        return () => {
            myp5.remove();
        };
    }, []);


    return <div ref={sketchRef} className="w-full h-full -z-10" id="p5-sketch"></div>;
};

export default Waves;