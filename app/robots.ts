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
    sitemap: 'https://vertex-one-sandy.vercel.app//sitemap.xml',
    host: 'https://vertex-one-sandy.vercel.app/',
  }
}
