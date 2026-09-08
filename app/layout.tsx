import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'URI Production — SMM-агентство полного цикла',
  description: 'Стратегия, упаковка, съёмка и монтаж видео для брендов, которые хотят расти в социальных сетях.',
  keywords: 'SMM агентство, контент, продвижение, съёмка видео, URI Production',
  authors: [{ name: 'URI Production' }],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://uri-production.ru',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'URI Production — SMM-агентство полного цикла',
    description: 'Контент, который продаёт.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://uri-production.ru',
    images: [
      {
        url: 'https://uri-production.ru/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'URI Production — SMM-агентство',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URI Production — SMM-агентство полного цикла',
    description: 'Контент, который продаёт',
    images: ['https://uri-production.ru/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'URI Production',
            'url': 'https://uri-production.ru',
            'description': 'SMM-агентство полного цикла',
            'sameAs': [],
            'contactPoint': {
              '@type': 'ContactPoint',
              'contactType': 'Customer Support',
              'availableLanguage': ['ru']
            }
          })}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
