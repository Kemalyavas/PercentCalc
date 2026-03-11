import type { Metadata } from 'next'
import { CalculatorCard } from '@/components/calculator-card'

export const metadata: Metadata = {
  title: 'What Is X% of Y? – Percentage Calculator',
  description: 'Calculate what is X percent of Y instantly. Find any percentage of any number. Free, fast online percentage calculator.',
  alternates: { canonical: '/percentage-of' },
  openGraph: {
    title: 'What Is X% of Y? – Percentage Calculator',
    description: 'Calculate what is X percent of Y instantly. Find any percentage of any number.',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8 md:py-16">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Is X% of Y?
          </h1>
          <p className="text-muted-foreground">
            Calculate any percentage of any number instantly.
          </p>
        </div>
        <CalculatorCard title="What is X% of Y?" type="percentage-of" />
      </div>
    </main>
  )
}
