import type { Metadata } from 'next'
import { CalculatorCard } from '@/components/calculator-card'
import { ToolsGrid, SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'X Is What Percent of Y? – Percentage Calculator',
  description: 'Find what percentage one number is of another. Calculate X is what percent of Y instantly. Free online calculator.',
  alternates: { canonical: '/what-percent' },
  openGraph: {
    title: 'X Is What Percent of Y? – Percentage Calculator',
    description: 'Find what percentage one number is of another instantly.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-2xl px-4 py-8 md:py-16">
          <div className="mb-8 space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              X Is What Percent of Y?
            </h1>
            <p className="text-muted-foreground">
              Find what percentage one number is of another instantly.
            </p>
          </div>
          <CalculatorCard title="X is what % of Y?" type="what-percent" />
        </div>
        <ToolsGrid />
      </main>
      <SiteFooter />
    </>
  )
}
