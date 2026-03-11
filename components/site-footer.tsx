import Link from "next/link"

const TOOLS = [
  { href: "/percentage-of", title: "What is X% of Y?", description: "Find any percentage of any number" },
  { href: "/what-percent", title: "X is what % of Y?", description: "Find what percentage one number is of another" },
  { href: "/percentage-change", title: "Percentage Change", description: "Calculate increase or decrease" },
  { href: "/tip-calculator", title: "Tip Calculator", description: "Calculate tips and split bills" },
  { href: "/discount-calculator", title: "Discount Calculator", description: "Find sale prices and savings" },
]

export function ToolsGrid() {
  return (
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
  )
}

export function SiteFooter() {
  return (
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
  )
}
