'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import { CustomPortableText } from './PortableText'
import CopperTheftContent from './CopperTheftContent'

export default function BlogPostUI({ post }: { post: any }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative z-10 w-full">
      {/* Reading Progress Indicator */}
      <motion.div
         className="fixed top-0 left-0 right-0 h-1 bg-brand-teal origin-left z-50 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
         style={{ scaleX }}
      />

      <article className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-teal transition-colors duration-300 font-jetbrains-mono tracking-wider text-sm uppercase mb-12">
          <ArrowLeft className="w-4 h-4" />
          Return to Intel
        </Link>
        
        <header className="mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
             <div className="flex flex-wrap items-center gap-4 mb-8">
                {post.categories?.map((cat: string) => (
                  <span key={cat} className="flex items-center gap-1 text-xs font-jetbrains-mono uppercase tracking-widest text-brand-teal bg-brand-teal/10 border border-brand-teal/30 px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {cat}
                  </span>
                ))}
             </div>
             
             <h1 className="text-4xl md:text-6xl font-space-grotesk font-black text-white mb-8 leading-tight">
               {post.title}
             </h1>

             <div className="flex flex-wrap items-center gap-6 text-sm font-jetbrains-mono text-gray-400 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  {post.authorImage ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-teal/50 relative">
                       <Image
                          src={urlForImage(post.authorImage)?.width(100).url() as string}
                          alt={post.authorName}
                          fill
                          className="object-cover"
                       />
                    </div>
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  {post.authorLinkedin ? (
                    <a href={post.authorLinkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                      <span className="uppercase tracking-wider text-gray-300 font-bold">{post.authorName || ['Zack H.', 'Daniel K.', 'Ryan Y.'][post?.title?.length % 3 || 0]}</span>
                    </a>
                  ) : (
                    <span className="uppercase tracking-wider text-gray-300 font-bold">{post.authorName || ['Zack H.', 'Daniel K.', 'Ryan Y.'][post?.title?.length % 3 || 0]}</span>
                  )}
                  {post.authorRole && (
                    <span className="text-gray-500 uppercase text-[10px] ml-2">// {post.authorRole}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-teal" />
                  <span>
                    {post.publishedAt 
                      ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                      : 'Recently Declassified'
                    }
                  </span>
                </div>
             </div>
          </motion.div>
        </header>

        {post.mainImage && (
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 border border-white/10 shadow-2xl"
          >
             <div className="absolute inset-0 bg-brand-navy/50 mix-blend-overlay z-10" />
             <Image
                src={urlForImage(post.mainImage)?.url() as string}
                alt={post.title}
                fill
                className="object-cover"
                priority
             />
          </motion.div>
        )}

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="prose prose-invert prose-lg max-w-none text-gray-300 font-inter 
                      prose-headings:text-white prose-a:text-brand-teal prose-strong:text-white"
        >
          {post.title?.toLowerCase().includes("copper") ? (
             <CopperTheftContent />
          ) : post.body ? (
            <CustomPortableText value={post.body} />
          ) : (
            <p className="text-gray-500 italic">Incoming transmission... Content is currently encrypted or unavailable.</p>
          )}
        </motion.div>
        
        {/* End of report CTA */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
           <p className="text-xl text-gray-300 font-space-grotesk font-semibold mb-6">
              Need to deploy this intel in the field?
           </p>
           <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-teal text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-brand-light-teal transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Initialize Deployment Sequence
           </Link>
        </div>
      </article>
    </div>
  )
}
