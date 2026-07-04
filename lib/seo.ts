import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
  locale?: string
}

export function generateSEO({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/og-default.jpg',
  locale = 'ar'
}: SEOProps): Metadata {
  const siteName = locale === 'ar' ? 'صيانة مطابخ ألمنيوم' : 'Aluminum Kitchen Maintenance'
  const domain = 'https://mushtakmaintenance.com'
  const url = canonicalUrl ? `${domain}${canonicalUrl}` : domain

  return {
    title: `${title} | ${siteName}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        'ar': canonicalUrl ? `${domain}${canonicalUrl}` : domain,
        'en': canonicalUrl ? `${domain}/en${canonicalUrl}` : `${domain}/en`
      }
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`]
    }
  }
}
