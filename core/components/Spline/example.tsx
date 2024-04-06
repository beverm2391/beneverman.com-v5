"use client"

import Spline from '@splinetool/react-spline';

export default function Model({ className }: { className?: string }) {
  return (
    <Spline scene="https://prod.spline.design/YW01VowI-cgt6zmr/scene.splinecode" className={className}/>
  );
}