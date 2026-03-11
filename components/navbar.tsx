"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const NAV_LINKS = [
  { href: "/", label: "Percentage Calculator" },
  { href: "/percentage-change", label: "Percentage Change" },
  { href: "/tip-calculator", label: "Tip Calculator" },
  { href: "/discount-calculator", label: "Discount" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()

  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-foreground">
          PercentCalc
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href || (link.href === "/blog" && pathname.startsWith("/blog"))
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Toggle dark mode"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>
      </nav>
    </header>
  )
}
