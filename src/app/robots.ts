import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/']
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/studio/']
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/studio/']
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/studio/']
      }
    ],
    sitemap: 'https://z1trailers.com/sitemap.xml',
    host: 'https://z1trailers.com'
  }
}
