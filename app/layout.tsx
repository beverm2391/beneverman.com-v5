import type { Metadata } from 'next'
import { cn } from '@/lib/utils'

import { Inter, Arimo } from 'next/font/google'
import localFont from 'next/font/local'

import "../styles/globals.css"

const inter = Inter({ subsets: ['latin'] })
const arimo = Arimo({ subsets: ['latin'] })
const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    }
  ]
})

export const metadata: Metadata = {
  title: 'beneverman.com',
  description: 'my website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          arimo.className, 
          satoshi.className, 
        )}>
        {children}
      </body>
    </html>
  )
}
