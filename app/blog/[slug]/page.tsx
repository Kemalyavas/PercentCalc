import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase, type Blog } from '@/lib/supabase'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MarkdownRenderer } from '@/components/markdown-renderer'

interface Props {
  params: Promise<{ slug: string }>
}

async function getBlog(slug: string): Promise<Blog | null> {
  const { data } = await supabase
    .from('blogs')
    .select('*')
    .eq('site', 'thepercentcalc')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  return data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlog(slug)
  if (!blog) return { title: 'Not Found' }

  return {
    title: `${blog.title} – PercentCalc Blog`,
    description: blog.meta_description,
    alternates: { canonical: `/blog/${blog.slug}` },
  }
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params
  const blog = await getBlog(slug)
  if (!blog) notFound()

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-3xl px-4 py-12">
        <article className="prose">
          <MarkdownRenderer content={blog.content} />
        </article>
        <div className="mt-12 text-center">
          <Link href="/">
            <Button size="lg">Try PercentCalc Now</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
