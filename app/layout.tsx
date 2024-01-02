import type { Metadata } from 'next'
import { Teko } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const teko = Teko({
  preload: true,
  subsets: [
    'latin'
  ],
  style: [
    'normal'
  ],
  weight: [
    '300',
    '400'
  ],
  fallback: ["Verdana", "sans-serif"],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: '@JuanCSUCoder CV',
  description: 'Curriculum Vitae of Juan Camilo Sánchez Urrego. Open-Source developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={teko.className + " w-screen max-w-full"}>{children}</body>
    </html>
  )
}
