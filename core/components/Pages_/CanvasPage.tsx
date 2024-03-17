"use client"

import { Boxes } from "../BackgroundBoxes";
import InfiniteTube from "../InfiniteTubeV2";
import TestR3F from "../TestR3F";
import Waves from "../WavesV1";

export default function CanvasPage() {
    return (
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(transparent,white)] overflow-hidden">
            <Boxes />
        </div>
    )
}