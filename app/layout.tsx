import type { Metadata } from 'next'
import { cn } from '@/lib/utils'

import { Inter, Arimo, Merriweather, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

import "@/styles/globals.css"
import Navbars from '@/core/components/Navbar/Navbars'

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
})

const arimo = Arimo({
  subsets: ['latin'],
  variable: "--font-arimo",
})

const merriweather = Merriweather({
  weight: ['300', '400', '700','900'],
  subsets: ['latin'],
  variable: "--font-merriweather",
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: "--font-playfair",
})

const satoshi = localFont({
  variable: "--font-satoshi",
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
    },
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
    <html
      lang="en"
      className={cn(
        inter.variable,
        arimo.variable,
        satoshi.variable,
        merriweather.variable,
        playfair.variable
      )}>
      <body>
        <main className="min-h-screen w-screen relative py-4 px-8">
          <Navbars/>
          {children}
        </main>
      </body>
    </html>
  )
}
