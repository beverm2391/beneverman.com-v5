import type { Metadata } from 'next'
import { cn } from '@/lib/utils'

import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import "@/styles/globals.css"
import Navbars from '@/core/components/Navbar/Navbars'
import Logo from '@/core/components/Logo'
import Head from 'next/head'

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

const etbook = localFont({
  variable: "--font-etbook",
  src: [
    // {
    //   path: '../public/fonts/ETBook/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff',
    //   weight: '400',
    //   style: 'normal',
    // },
    {
      path: '../public/fonts/ETBook/et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ETBook/et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/ETBook/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/ETBook/et-book/et-book-semi-bold-old-style-figures/et-book-semi-bold-old-style-figures.woff',
      weight: '500',
      style: 'normal',
    }
  ]
})

const jetbrainsmono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Ben Everman',
  description: 'Software Engineer, Neural Network Wrangler, and Serial Learner',
  metadataBase: new URL('https://www.beneverman.com'),
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
        satoshi.variable,
        etbook.variable,
        jetbrainsmono.variable,
      )}>
      <body>
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <main className={cn(
          "min-h-screen w-screen py-4 px-4 md:px-8",
          "relative",
          "background"
        )}>
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <Navbars />
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
