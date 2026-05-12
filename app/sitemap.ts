import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://big7technologies.com'
  
  const routes = [
    '',
    '/about',
    '/careers',
    '/contact',
    '/products',
    '/products/servafri',
    '/developers',
    '/blog',
    '/blog/servafri-story',
    '/research',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
