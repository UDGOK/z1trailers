import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://z1trailers.com'
  
  // Tactical Static Architecture
  const routes = [
    '',
    '/get-a-quote',
    '/security-trailers',
    '/rent-security-trailer',
    '/buy-security-trailer',
    '/industries',
    '/locations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }))

  return [...routes]
}
