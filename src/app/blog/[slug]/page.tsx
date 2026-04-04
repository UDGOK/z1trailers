import { client } from '@/sanity/lib/client'
import { postBySlugQuery, postPathsQuery } from '@/sanity/lib/queries'
import BlogPostUI from '@/components/blog/BlogPostUI'
import BatteryBackground from '@/components/blog/BatteryBackground'
import { notFound } from 'next/navigation'

export const revalidate = 60 // Revalidate every minute

export async function generateStaticParams() {
  const paths = await client.fetch(postPathsQuery)
  return paths.map((path: any) => ({
    slug: path.params.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = await client.fetch(postBySlugQuery, { slug })

  if (!post) {
    return { title: 'Post Not Found | Z1 Trailers' }
  }

  return {
    title: `${post.title} | Z1 Trailers Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = await client.fetch(postBySlugQuery, { slug })

  if (!post) {
    notFound()
  }

  return (
    <div className="relative min-h-screen pt-32 pb-24 selection:bg-brand-teal selection:text-white">
      <BatteryBackground />
      <BlogPostUI post={post} />
    </div>
  )
}
