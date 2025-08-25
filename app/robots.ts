import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/private/',
        '/api/',
        '/*.json$',
      ],
    },
    sitemap: 'https://vertexone.vn/sitemap.xml',
    host: 'https://vertexone.vn',
  }
}
