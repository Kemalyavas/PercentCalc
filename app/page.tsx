import { CalculatorCard } from "@/components/calculator-card"
import { ToolsGrid, SiteFooter } from "@/components/site-footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

        <ToolsGrid />

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

      <SiteFooter />
    </div>
  )
}
