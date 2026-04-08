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
    title: `${post.seoTitle || post.title} | Z1 Trailers`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = await client.fetch(postBySlugQuery, { slug })

  if (!post) {
    notFound()
  }

  const authors = ["Zack H.", "Daniel K.", "Ryan Y."];
  const charSum = slug.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const derivedAuthor = authors[charSum % authors.length];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "isPartOf": {
      "@id": "https://www.z1trailers.com/#organization"
    },
    "image": post.mainImage ? ["https://z1trailers.com/images/LogoHR.png"] : [], 
    "datePublished": post.publishedAt || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": post.authorName || derivedAuthor,
      "url": post.authorLinkedin || "https://z1trailers.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Z1 Trailers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://z1trailers.com/images/LogoHR.png"
      }
    }
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 selection:bg-brand-teal selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <BatteryBackground />
      <BlogPostUI post={post} />
    </div>
  )
}
