import type { Metadata } from "next"
import { supabase } from "@/lib/supabase"
import { BlogSearch } from "@/components/blog-search"

export const revalidate = 60

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "PercentCalc Blog – Math Tips & Percentage Guides",
  description: "Learn about percentage calculations, math tips, financial formulas, and practical everyday calculation guides.",
  openGraph: {
    title: "PercentCalc Blog – Math Tips & Percentage Guides",
    description: "Practical guides on percentage calculations and everyday math.",
    type: "website",
  },
}

export default async function Page() {
  const { data: dynamicBlogs } = await supabase
    .from('blogs')
    .select('title, slug, meta_description, created_at')
    .eq('site', 'thepercentcalc')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  const dynamicPosts = (dynamicBlogs || []).map(blog => ({
    href: `/blog/${blog.slug}`,
    title: blog.title,
    description: blog.meta_description,
  }))

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Blog
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Practical guides on percentages, math tips, and everyday calculations.
        </p>

        <BlogSearch posts={dynamicPosts} />
      </div>
    </main>
  )
}
