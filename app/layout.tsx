import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next" // ✅ Add this line
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abizer Masavi - Portfolio",
  description: "B.Tech Student | Tech & FinTech Enthusiast",
  keywords: ["Abizer Masavi", "Portfolio", "Developer", "FinTech", "Computer Science"],
  authors: [{ name: "Abizer Masavi" }],
  openGraph: {
    title: "Abizer Masavi - Portfolio",
    description: "B.Tech Student | Tech & FinTech Enthusiast",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights /> {/* ✅ Add this after <Analytics /> */}
      </body>
    </html>
  )
}
