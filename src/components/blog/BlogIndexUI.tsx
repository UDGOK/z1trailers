'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Cpu } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'

export default function BlogIndexUI({ posts }: { posts: any[] }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-brand-teal" />
            <span className="text-brand-teal font-jetbrains-mono uppercase tracking-[0.2em] text-sm">
              Intelligence Briefings
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-black text-white mb-6 uppercase tracking-tight">
            Field <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-light-teal">Reports</span>
          </h1>
          <p className="text-xl text-gray-400 font-inter leading-relaxed">
            Tactical deployments, security protocol updates, and operational intel from our surveillance endpoints nationwide.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={`/blog/${post.slug.current}`} className="group block h-full">
              <article className="h-full bg-brand-navy/60 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-brand-teal/50 transition-colors duration-500 flex flex-col hover:shadow-2xl hover:shadow-brand-teal/10 group-hover:-translate-y-2 transform">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10" />
                  {post.mainImage && (
                    <Image
                      src={urlForImage(post.mainImage)?.url() || ''}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                  {post.categories?.[0] && (
                    <span className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-brand-teal/40 text-brand-teal font-jetbrains-mono text-xs uppercase px-3 py-1 rounded-full tracking-wider">
                      {post.categories[0]}
                    </span>
                  )}
                </div>
                
                <div className="p-8 flex flex-col flex-1 relative">
                  <h2 className="text-2xl font-space-grotesk font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-brand-light-teal transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 font-inter mb-6 line-clamp-3 ext-sm flex-1">
                    {post.excerpt || 'Read the full intelligence briefing for operational details.'}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                       {post.authorImage ? (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-teal">
                            <Image 
                               src={urlForImage(post.authorImage)?.width(100).url() || ''} 
                               alt={post.authorName} 
                               fill 
                               className="object-cover" 
                            />
                          </div>
                       ) : (
                          <div className="w-8 h-8 rounded-full bg-brand-teal/20 border border-brand-teal/50 flex items-center justify-center">
                            <span className="text-brand-teal text-xs font-bold font-jetbrains-mono">Z1</span>
                          </div>
                       )}
                       <span className="text-sm font-jetbrains-mono tracking-wider text-gray-500 uppercase">
                         {post.authorName || 'HQ Command'}
                       </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-teal/20 group-hover:text-brand-teal transition-colors duration-300 text-gray-500">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
        {posts.length === 0 && (
          <div className="col-span-full py-24 text-center">
             <div className="inline-block p-6 rounded-2xl bg-brand-navy/60 backdrop-blur-md border border-brand-teal/20 text-brand-teal font-jetbrains-mono mb-4 text-xl">
               NO DATA FOUND
             </div>
             <p className="text-gray-400 font-inter max-w-md mx-auto">
               Command has not published any field reports yet. Check back later for operational updates.
             </p>
          </div>
        )}
      </div>
    </div>
  )
}
