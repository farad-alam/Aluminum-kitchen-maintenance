type JSONLD = Record<string, any>

export function generateLocalBusinessSchema(locale: string): JSONLD {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": locale === 'ar' ? "صيانة مطابخ ألمنيوم" : "Aluminum Kitchen Maintenance",
    "image": "https://mushtakmaintenance.com/images/logo.png",
    "@id": "https://mushtakmaintenance.com",
    "url": "https://mushtakmaintenance.com",
    "telephone": "+966500892742",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh",
      "postalCode": "",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  }
}

export function generateBreadcrumbSchema(items: { name: string, item: string }[]): JSONLD {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": `https://mushtakmaintenance.com${breadcrumb.item}`
    }))
  }
}
