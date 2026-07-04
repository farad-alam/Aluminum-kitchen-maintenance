import { setRequestLocale } from 'next-intl/server';
import { getServices } from '@/lib/data/services';
import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { StickySidebarCTA } from '@/components/services/StickySidebarCTA';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const services = getServices(locale);
  const service = services.find(s => s.slug === slug);
  
  if (!service) return {};

  return generateSEO({
    title: service.title,
    description: service.description,
    locale,
    canonicalUrl: `/services/${slug}`
  });
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  routing.locales.forEach((locale) => {
    const services = getServices(locale);
    services.forEach((s) => {
      params.push({ locale, slug: s.slug });
    });
  });
  return params;
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const services = getServices(locale);
  const service = services.find(s => s.slug === slug);
  const isAr = locale === 'ar';

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { label: isAr ? 'الرئيسية' : 'Home', href: '/' },
    { label: isAr ? 'الخدمات' : 'Services', href: '/services' },
    { label: service.title }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": isAr ? "صيانة مطابخ ألمنيوم" : "Aluminum Kitchen Maintenance",
      "image": "https://mushtakmaintenance.com/images/logo.png"
    },
    "areaServed": "Riyadh"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: isAr ? 'Home' : 'Home', item: '' },
    { name: isAr ? 'الخدمات' : 'Services', item: '/services' },
    { name: service.title, item: `/services/${slug}` }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="flex-1 bg-(--color-brand-surface)">
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] min-h-[300px] overflow-hidden bg-(--color-brand-navy)">
          <Image
            src="/images/hero_kitchen.png"
            alt={service.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-(--color-brand-navy) to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <Breadcrumb items={breadcrumbItems} />
              <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl max-w-3xl leading-tight">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:px-6 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              
              {/* Content text */}
              <section className="prose prose-lg max-w-none prose-p:text-(--color-brand-muted) prose-headings:text-(--color-brand-navy)">
                {service.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-6 text-lg leading-relaxed">{paragraph}</p>
                ))}
              </section>

              {/* Benefits */}
              <section className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-(--color-brand-navy) mb-6">
                  {isAr ? 'مميزات خدمتنا' : 'Our Service Benefits'}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-(--color-brand-navy-mid)">
                      <CheckCircle2 className="h-6 w-6 text-(--color-brand-success) shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Process */}
              <section>
                <h3 className="text-2xl font-bold text-(--color-brand-navy) mb-8">
                  {isAr ? 'خطوات العمل' : 'Working Process'}
                </h3>
                <div className="flex flex-col gap-6">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--color-brand-gold-pale) text-(--color-brand-gold) font-bold text-xl">
                        {idx + 1}
                      </div>
                      <div className="pt-2 flex flex-col">
                        <h4 className="text-xl font-bold text-(--color-brand-navy) mb-2">{step.title}</h4>
                        <p className="text-(--color-brand-muted)">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-(--color-brand-navy) mb-6">
                  {isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-lg font-medium">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-base text-(--color-brand-muted)">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <StickySidebarCTA />
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
