import Link from "next/link"
import { CalculatorCard } from "@/components/calculator-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const TOOLS = [
  { href: "/percentage-of", title: "What is X% of Y?", description: "Find any percentage of any number" },
  { href: "/what-percent", title: "X is what % of Y?", description: "Find what percentage one number is of another" },
  { href: "/percentage-change", title: "Percentage Change", description: "Calculate increase or decrease" },
  { href: "/tip-calculator", title: "Tip Calculator", description: "Calculate tips and split bills" },
  { href: "/discount-calculator", title: "Discount Calculator", description: "Find sale prices and savings" },
]

const FAQ_ITEMS = [
  {
    question: "How do I calculate what X% of Y is?",
    answer: "Multiply Y by X and divide by 100. For example, 20% of 150 = 150 × 20 ÷ 100 = 30. Or just use our calculator above — enter the percentage and the number, and get the result instantly."
  },
  {
    question: "How do I find what percentage X is of Y?",
    answer: "Divide X by Y and multiply by 100. For example, 30 is what percent of 150? → 30 ÷ 150 × 100 = 20%. Our 'X is what % of Y' calculator does this automatically."
  },
  {
    question: "How do I calculate percentage change?",
    answer: "Subtract the old value from the new value, divide by the old value, and multiply by 100. For example, from 80 to 100: (100 - 80) ÷ 80 × 100 = 25% increase."
  },
  {
    question: "How do I calculate a tip?",
    answer: "Multiply the bill amount by the tip percentage and divide by 100. For a $50 bill with 18% tip: 50 × 18 ÷ 100 = $9 tip. Use our Tip Calculator for quick results with bill splitting."
  },
  {
    question: "How do I calculate a discount?",
    answer: "Multiply the original price by the discount percentage and divide by 100 to find the savings. Subtract the savings from the original price to get the sale price. Example: 30% off $80 = $24 savings, final price $56."
  },
  {
    question: "Is this calculator free? Is my data stored?",
    answer: "Yes, completely free with no ads. All calculations happen in your browser — nothing is sent to any server. Your data never leaves your device."
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="mx-auto max-w-6xl px-6 py-16">
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
        </div>

        {/* Tools Grid */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-6 text-xl font-semibold text-foreground">All Calculators</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50"
              >
                <h3 className="text-sm font-semibold text-foreground">{tool.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="mb-6 text-xl font-semibold text-foreground">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PercentCalc
          </p>
          <nav className="flex flex-wrap justify-center gap-4">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {tool.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/privacy-policy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <span className="text-xs text-muted-foreground">&middot;</span>
            <p className="text-xs text-muted-foreground">
              100% client-side
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
