import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { AreasWeServe } from "@/components/home/AreasWeServe";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";
import { generateSEO } from "@/lib/seo";
import { routing } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return generateSEO({
    title: isAr ? 'الرئيسية' : 'Home',
    description: isAr 
      ? 'نقدم خدمات متكاملة في فك، تركيب، وصيانة المطابخ الألمنيوم في الرياض بأعلى معايير الجودة والاحترافية.'
      : 'We provide comprehensive solutions for kitchen dismantling, installation, and maintenance with the highest quality standards in Riyadh.',
    locale
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Note: LocalBusiness schema is typically added in layout or homepage. 
  // For simplicity, we just inject it here as JSON-LD script.
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": locale === 'ar' ? "صيانة مطابخ ألمنيوم" : "Aluminum Kitchen Maintenance",
    "image": "https://mushtakmaintenance.com/images/logo.png",
    "@id": "https://mushtakmaintenance.com",
    "url": "https://mushtakmaintenance.com",
    "telephone": "+966500892742",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh",
      "addressCountry": "SA"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <ServicesPreview />
        <PortfolioPreview />
        <WhyChooseUs />
        <ProcessSteps />
        <AreasWeServe />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
    </>
  );
}
