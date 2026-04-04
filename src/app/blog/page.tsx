import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import BlogIndexUI from '@/components/blog/BlogIndexUI'
import BatteryBackground from '@/components/blog/BatteryBackground'

export const revalidate = 60 // Revalidate every minute

export const metadata = {
  title: 'Field Reports | Z1 Trailers',
  description: 'Tactical insights, deployment strategies, and security innovations from the field.',
}

export default async function BlogIndexPage() {
  const posts = await client.fetch(postsQuery)

  return (
    <div className="relative min-h-screen pt-32 pb-24 selection:bg-brand-teal selection:text-white">
      <BatteryBackground />
      <BlogIndexUI posts={posts} />
    </div>
  )
}
