import { MetadataRoute } from 'next'
import { projects, categorySlugs } from '@/data/projects'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sonhailandscape.com'
  
  // Main pages
  const staticPages = [
    '',
    '/about',
    '/bao-gia-thiet-ke-farm',
    '/chung-toi',
    '/reels',
    '/project',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Category pages
  const categoryPages = categorySlugs.map((slug) => ({
    url: `${baseUrl}/project/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...categoryPages, ...projectPages]
}
