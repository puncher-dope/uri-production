import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/.well-known/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Yandexbot',
        allow: '/',
        crawlDelay: 0.5,
      },
    ],
    sitemap: 'https://uri-production.ru/sitemap.xml',
  }
}
