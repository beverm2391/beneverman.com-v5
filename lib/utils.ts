import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import dynamic from "next/dynamic";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const NextReactP5Wrapper = dynamic(
  async () => (await import("@p5-wrapper/react")).ReactP5Wrapper,
  { ssr: false },
);

export const HexToRGB = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}
