import { CalculatorCard } from "@/components/calculator-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Percentage Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Quick and easy percentage calculations for everyday use
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CalculatorCard 
            title="What is X% of Y?"
            type="percentage-of"
          />
          <CalculatorCard 
            title="X is what % of Y?"
            type="what-percent"
          />
          <CalculatorCard 
            title="Percentage Change"
            type="percentage-change"
          />
        </div>
      </main>
    </div>
  )
}
