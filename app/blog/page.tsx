import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog — DeskTiles',
  description: 'Tips and ideas for Mac power users who work on multiple projects.',
  alternates: { canonical: 'https://desktiles.app/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-20 px-6">
        <div className="max-w-[720px] mx-auto">

          <h1 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-3">
            Blog
          </h1>
          <p className="text-[16px] text-[#6E6E73] mb-16">
            Tips and ideas for Mac power users.
          </p>

          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-t border-[#D2D2D7]/60 pt-10">
                <p className="text-[12px] text-[#6E6E73] mb-3 uppercase tracking-widest font-medium">
                  {post.date} · {post.readingTime}
                </p>
                <h2 className="text-[22px] font-semibold text-[#1D1D1F] leading-snug tracking-[-0.02em] mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#6E6E73] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-[16px] text-[#6E6E73] leading-relaxed mb-5">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[14px] font-medium text-[#1D1D1F] underline underline-offset-2 hover:text-[#6E6E73] transition-colors"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
