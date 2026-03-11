import type { Metadata } from 'next'
import { TipCalculator } from '@/components/tip-calculator'

export const metadata: Metadata = {
  title: 'Tip Calculator – Calculate Tips Instantly',
  description: 'Calculate tips quickly. Choose tip percentage, split the bill, see per-person amounts. Free, fast, no ads.',
  alternates: { canonical: '/tip-calculator' },
  openGraph: {
    title: 'Tip Calculator',
    description: 'Calculate tips quickly. Choose tip percentage, split the bill, see per-person amounts.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8 md:py-16">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tip Calculator
          </h1>
          <p className="text-muted-foreground">
            Calculate tips, split bills, and find per-person amounts instantly.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <TipCalculator />
        </div>
      </div>
    </main>
  )
}
