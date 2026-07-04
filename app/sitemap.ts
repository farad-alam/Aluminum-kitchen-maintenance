import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://mushtakmaintenance.com'

  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ar: domain,
          en: `${domain}/en`,
        },
      },
    },
    // We will add more routes here in subsequent phases
  ]
}
