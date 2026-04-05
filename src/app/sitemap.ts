import { MetadataRoute } from 'next'
import { locationDb } from '@/lib/locationData'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://z1trailers.com'
  
  // 1. Tactical Static Routes (Priority 1.0 - 0.8)
  const staticRoutes = [
    '',
    '/get-a-quote',
    '/security-trailers',
    '/rent-security-trailer',
    '/buy-security-trailer',
    '/industries',
    '/locations',
    '/blog',
    '/compare/security-guard-vs-trailer',
    '/compare/lvt-alternative',
    '/hardware-deep-dive',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Dynamic Hardware Vectors (Priority 0.9)
  const hardwareSlugs = ['z1-scout', 'z1-guardian', 'z1-apex', 'z1-command'];
  const hardwareRoutes = hardwareSlugs.map(slug => ({
    url: `${baseUrl}/security-trailers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Industry Sectors (Priority 0.85) - Sector-5 Deployment
  const industrySlugs = ['construction-sites', 'parking-lots', 'events', 'oil-gas', 'law-enforcement'];
  const industryRoutes = industrySlugs.map(slug => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 4. Sanity Intelligence Briefings (AEO Optimization)
  let blogRoutes: any[] = [];
  try {
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]{"slug": slug.current, publishedAt}`);
    blogRoutes = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));
  } catch (err) {
    console.error('Sitemap Blog Fetch Failure:', err);
  }

  // 5. Recursive Location Matrix (GEO Optimization)
  const locationRoutes: any[] = [];
  Object.keys(locationDb).forEach(stateKey => {
    locationRoutes.push({
      url: `${baseUrl}/locations/${stateKey}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    });

    Object.keys(locationDb[stateKey].cities).forEach(cityKey => {
      locationRoutes.push({
        url: `${baseUrl}/locations/${stateKey}/${cityKey}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });
  });

  return [...staticRoutes, ...hardwareRoutes, ...industryRoutes, ...blogRoutes, ...locationRoutes]
}
