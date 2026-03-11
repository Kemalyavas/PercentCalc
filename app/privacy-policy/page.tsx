import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy — PercentCalc",
  description: "Privacy policy for PercentCalc. Everything runs in your browser — we collect zero personal data.",
  openGraph: {
    title: "Privacy Policy — PercentCalc",
    description: "How we handle your data at PercentCalc.",
    type: "website",
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <div className="prose">
          <h1>Privacy Policy</h1>
          <h2>Overview</h2>
          <p>
            PercentCalc (&quot;we&quot;, &quot;our&quot;, &quot;the tool&quot;) is a free percentage calculator. We are committed to protecting your privacy.
          </p>
          <p>
            <strong>The short version:</strong> Everything runs entirely in your browser. We do not store or process your calculations on any server.
          </p>

          <h2>Data We Do NOT Collect</h2>
          <ul>
            <li><strong>Your calculations:</strong> All calculations are performed 100% client-side using JavaScript. Nothing is sent to our servers.</li>
            <li><strong>Personal information:</strong> We do not collect names, email addresses, or any personally identifiable information. There is no account system.</li>
          </ul>

          <h2>Data We Collect</h2>
          <h3>Analytics (Vercel Analytics)</h3>
          <p>We use <strong>Vercel Analytics</strong> to understand general usage patterns. Vercel Analytics collects:</p>
          <ul>
            <li>Page views and navigation paths</li>
            <li>Referrer URL</li>
            <li>Browser type and operating system</li>
            <li>Country-level geographic data</li>
            <li>Screen size and device type</li>
          </ul>
          <p>Vercel Analytics does <strong>not</strong> use cookies and does not track individual users. All data is aggregated and anonymized.</p>

          <h3>Hosting</h3>
          <p>This website is hosted on <strong>Vercel</strong>. Standard server logs may be collected for security purposes.</p>

          <h2>Cookies</h2>
          <p>PercentCalc does <strong>not</strong> set any cookies. Your theme preference is stored in <code>localStorage</code>.</p>

          <h2>Third-Party Services</h2>
          <table>
            <thead><tr><th>Service</th><th>Purpose</th><th>Data Shared</th></tr></thead>
            <tbody>
              <tr><td>Vercel</td><td>Hosting</td><td>Standard server logs</td></tr>
              <tr><td>Vercel Analytics</td><td>Anonymous analytics</td><td>Aggregated page views</td></tr>
              <tr><td>Google Fonts</td><td>Font delivery</td><td>Standard request headers</td></tr>
            </tbody>
          </table>

          <h2>Contact</h2>
          <p>Questions? Reach us at <a href="mailto:kemalyavaass@gmail.com">kemalyavaass@gmail.com</a>.</p>
        </div>

        <div className="mt-16 border-t border-border pt-12 text-center">
          <p className="mb-4 text-lg font-medium text-foreground">Ready to calculate?</p>
          <Button asChild size="lg">
            <Link href="/" className="gap-2">
              Try PercentCalc Now <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </article>
    </main>
  )
}
