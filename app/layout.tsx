import '@/styles/globals.css'
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Frontend Mentor - Shortly URL shortening API Challenge solution',
  icons: '/brand/favicon-32x32.png'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}