import type { Metadata } from 'next'
import { CalculatorCard } from '@/components/calculator-card'

export const metadata: Metadata = {
  title: 'Percentage Change Calculator – Calculate Increase & Decrease',
  description: 'Calculate percentage change between two numbers instantly. Find percentage increase or decrease. Free online calculator, no sign-up.',
  alternates: { canonical: '/percentage-change' },
  openGraph: {
    title: 'Percentage Change Calculator',
    description: 'Calculate percentage increase or decrease between two numbers instantly.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8 md:py-16">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Percentage Change Calculator
          </h1>
          <p className="text-muted-foreground">
            Calculate percentage increase or decrease between two values instantly.
          </p>
        </div>
        <CalculatorCard title="Percentage Change" type="percentage-change" />
      </div>
    </main>
  )
}
