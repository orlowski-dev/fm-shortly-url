import '@/styles/globals.css'
import '@/styles/custom.css'
import { Metadata } from "next"
import React from "react"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700']
})


export const metadata: Metadata = {
  title: 'Frontend Mentor - Shortly URL shortening API Challenge solution',
  icons: '/brand/favicon-32x32.png'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  )
}