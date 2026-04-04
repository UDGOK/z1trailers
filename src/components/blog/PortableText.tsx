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
        <figure className="my-16">
          <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden border border-brand-teal/20 shadow-2xl shadow-brand-teal/5 group">
            <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
              src={urlForImage(value)?.url() as string}
              alt={value.alt || 'Tactical Visual'}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Tactical HUD Overlay for Images */}
            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-brand-teal/30 px-3 py-1 font-jetbrains-mono text-[10px] text-brand-teal uppercase tracking-widest">
              HD-THERMAL OVERLAY // {value.caption ? 'ACTIVE' : 'READY'}
            </div>
          </div>
          {value.caption && (
            <figcaption className="mt-4 text-center font-jetbrains-mono text-[11px] text-brand-teal/60 uppercase tracking-[0.2em] italic">
              [ {value.caption} ]
            </figcaption>
          )}
        </figure>
      )
    },
    simpleTable: ({ value }: any) => {
      if (!value?.rows) return null;
      return (
        <div className="my-16 overflow-x-auto border border-brand-teal/20 rounded-xl bg-brand-navy/40 backdrop-blur-sm shadow-[0_0_30px_rgba(27,154,170,0.05)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-teal/10 border-b border-brand-teal/20">
                {value.rows[0]?.cells?.map((cell: string, i: number) => (
                  <th key={i} className="p-6 font-space-grotesk font-black text-brand-teal uppercase tracking-widest text-xs">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {value.rows.slice(1).map((row: any, i: number) => (
                <tr key={i} className="border-b border-white/5 hover:bg-brand-teal/5 transition-colors group">
                  {row.cells?.map((cell: string, j: number) => (
                    <td key={j} className="p-6 font-inter text-gray-300 text-sm border-r border-white/5 last:border-r-0 group-hover:text-white transition-colors">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
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
