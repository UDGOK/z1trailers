import { MetadataRoute } from 'next'
import { locationDb } from '@/lib/locationData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://z1trailers.com'
  
  // 1. Tactical Static Routes
  const staticRoutes = [
    '',
    '/get-a-quote',
    '/security-trailers',
    '/rent-security-trailer',
    '/buy-security-trailer',
    '/industries',
    '/locations',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Dynamic Hardware Vectors
  const hardwareSlugs = ['z1-scout', 'z1-guardian', 'z1-apex', 'z1-command'];
  const hardwareRoutes = hardwareSlugs.map(slug => ({
    url: `${baseUrl}/security-trailers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Recursive Location Matrix (AEO/GEO Optimization)
  const locationRoutes: any[] = [];
  
  Object.keys(locationDb).forEach(stateKey => {
    // Add State Page
    locationRoutes.push({
      url: `${baseUrl}/locations/${stateKey}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    });

    // Add every unique City Sector
    Object.keys(locationDb[stateKey].cities).forEach(cityKey => {
      locationRoutes.push({
        url: `${baseUrl}/locations/${stateKey}/${cityKey}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });
  });

  return [...staticRoutes, ...hardwareRoutes, ...locationRoutes]
}
