import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thepercentcalc.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  title: 'PercentCalc — Free Percentage Calculator',
  description: 'Calculate percentages instantly. Find X% of Y, what percent X is of Y, and percentage change. Free, fast, no ads.',
  keywords: ['percentage calculator', 'percent calculator', 'percentage change calculator', 'what is percent of', 'calculate percentage', 'percentage increase calculator', 'percentage decrease calculator', 'tip calculator'],
  openGraph: {
    title: 'PercentCalc — Free Percentage Calculator',
    description: 'Calculate percentages instantly. Find X% of Y, what percent X is of Y, and percentage change.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'PercentCalc — Free Percentage Calculator',
    description: 'Calculate percentages instantly. Free, fast, no ads.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
