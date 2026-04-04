import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="relative w-full h-[400px] md:h-[600px] my-12 rounded-xl overflow-hidden border border-brand-teal/20 shadow-2xl shadow-brand-teal/5">
          <Image
            src={urlForImage(value)?.url() as string}
            alt={value.alt || 'Blog Post Image'}
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mt-16 mb-8 tracking-tight heading-glow">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-gray-100 mt-16 mb-6 tracking-tight relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-brand-teal before:rounded-full">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-space-grotesk font-semibold text-gray-200 mt-12 mb-4">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg md:text-xl text-gray-400 font-inter leading-relaxed tracking-wide mb-8">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-brand-light-teal pl-6 py-2 my-10 italic text-xl md:text-2xl text-gray-300 font-inter bg-brand-darkest/30 rounded-r-xl border-y border-r border-y-brand-teal/10 border-r-brand-teal/10 p-6 shadow-inner">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-200">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-300">{children}</em>
    ),
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-brand-teal no-underline hover:text-brand-light-teal transition-colors duration-300 border-b border-brand-teal/30 hover:border-brand-teal"
        >
          {children}
        </a>
      )
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside ml-6 mb-8 text-lg md:text-xl text-gray-400 font-inter leading-relaxed space-y-3 marker:text-brand-teal">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside ml-6 mb-8 text-lg md:text-xl text-gray-400 font-inter leading-relaxed space-y-3 marker:text-brand-teal font-jetbrains-mono">
        {children}
      </ol>
    ),
  },
}

export const CustomPortableText = ({ value }: { value: any[] }) => {
  return <PortableTextReact value={value} components={components} />
}
