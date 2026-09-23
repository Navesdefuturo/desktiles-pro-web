import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getPost, getAllPosts } from '@/lib/posts'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — DeskTiles`,
    description: post.description,
    openGraph: {
      title: `${post.title} — DeskTiles`,
      description: post.description,
      type: 'article',
      url: `https://desktiles.app/blog/${post.slug}`,
      siteName: 'DeskTiles',
      publishedTime: post.date,
      images: [{ url: 'https://desktiles.app/opengraph-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — DeskTiles`,
      description: post.description,
    },
  }
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-[22px] font-semibold text-[#1D1D1F] mt-12 mb-4 tracking-[-0.02em]">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-outside ml-5 space-y-2 text-[#3D3D3F]">
          {items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
      continue
    } else if (line === '---') {
      elements.push(<hr key={i} className="border-[#D2D2D7]/60 my-10" />)
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      // inline: **bold** and [link](/path)
      const rendered = renderInline(line)
      elements.push(
        <p key={i} className="text-[17px] text-[#3D3D3F] leading-[1.7]">
          {rendered}
        </p>
      )
    }
    i++
  }

  return elements
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  const regex = /(\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\))/g
  let last = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    if (match[0].startsWith('**')) {
      parts.push(<strong key={match.index} className="font-semibold text-[#1D1D1F]">{match[2]}</strong>)
    } else {
      parts.push(
        <Link key={match.index} href={match[4]} className="text-[#1D1D1F] underline underline-offset-2 hover:text-[#6E6E73]">
          {match[3]}
        </Link>
      )
    }
    last = match.index + match[0].length
  }

  if (last < text.length) parts.push(text.slice(last))
  return parts.length === 1 ? parts[0] : parts
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-20 px-6">
        <div className="max-w-[680px] mx-auto">

          <Link href="/blog" className="text-[13px] text-[#8E8E93] hover:text-[#1D1D1F] transition-colors mb-10 inline-block">
            ← Blog
          </Link>

          <p className="text-[12px] text-[#8E8E93] mb-4 uppercase tracking-widest font-medium">
            {post.date} · {post.readingTime}
          </p>

          <h1 className="text-[clamp(26px,3.5vw,40px)] font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-[1.15] mb-16">
            {post.title}
          </h1>

          <div className="space-y-6">
            {renderContent(post.content)}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
