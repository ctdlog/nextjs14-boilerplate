import localFont from 'next/font/local'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

import '@/app/_styles/globals.css'

import CoreProvider from '@/app/_components/providers/CoreProvider'
import { cn } from '@/app/_styles/utils'

const myFont = localFont({
  src: '../app/_assets/fonts/PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='../../favicon.ico' sizes='any' />
      </head>
      <body className={cn(myFont.className, 'mx-auto max-w-lg text-white')}>
        <CoreProvider>
          {children}
          <Analytics />
        </CoreProvider>
      </body>
    </html>
  )
}
