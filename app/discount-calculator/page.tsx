import type { Metadata } from 'next'
import { DiscountCalculator } from '@/components/discount-calculator'
import { ToolsGrid, SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Discount Calculator – Calculate Sale Prices Instantly',
  description: 'Calculate discounts and sale prices instantly. Enter original price and discount percentage to find your savings. Free online tool.',
  alternates: { canonical: '/discount-calculator' },
  openGraph: {
    title: 'Discount Calculator',
    description: 'Calculate discounts and sale prices instantly. Enter original price and discount percentage to find your savings.',
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
              Discount Calculator
            </h1>
            <p className="text-muted-foreground">
              Find sale prices and savings instantly.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <DiscountCalculator />
          </div>
        </div>
        <ToolsGrid />
      </main>
      <SiteFooter />
    </>
  )
}
