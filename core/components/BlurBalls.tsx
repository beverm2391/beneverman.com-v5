"use client"

import '@/styles/blurballs.css';

export default function BlurrBalls() {
    const blurs = Array.from({ length: 80 }, (_, i) => <span key={i} className="blur_" />);

    return (
        <div className='blurballs'>
            <div>The quick brown fox jumps over the lazy dog</div>
            <div className="right">The quick brown fox jumps over the lazy dog</div>
            <div>The quick brown fox jumps over the lazy dog</div>
            <div className="right">The quick brown fox jumps over the lazy dog</div>
            <div>The quick brown fox jumps over the lazy dog</div>
            <div className="right">The quick brown fox jumps over the lazy dog</div>
            <div>The quick brown fox jumps over the lazy dog</div>

            <div id="blurs">{blurs}</div>

            <div className="filt">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="svgNoise" className="u-svg-none">
                    <defs>
                        <filter id="noiseEffect2" filterUnits="objectBoundingBox" x="-20%" y="-20%" width="140%" height="140%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="1" seed="1" stitchTiles="stitch" result="particle" />
                            <feDisplacementMap scale="110.1" in="SourceGraphic" in2="particle" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};