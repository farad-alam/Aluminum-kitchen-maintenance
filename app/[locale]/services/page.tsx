import { setRequestLocale } from 'next-intl/server';
import { getServices } from '@/lib/data/services';
import { generateSEO } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return generateSEO({
    title: isAr ? 'خدماتنا' : 'Our Services',
    description: isAr 
      ? 'نقدم مجموعة متكاملة من خدمات صيانة وتركيب وفك مطابخ الألمنيوم.'
      : 'We offer a complete range of aluminum kitchen maintenance, installation, and dismantling services.',
    locale,
    canonicalUrl: '/services'
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const services = getServices(locale);
  const isAr = locale === 'ar';

  return (
    <main className="flex-1 bg-(--color-brand-surface)">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <Breadcrumb 
          items={[
            { label: isAr ? 'الرئيسية' : 'Home', href: '/' },
            { label: isAr ? 'الخدمات' : 'Services' }
          ]} 
        />
      </div>

      <div className="container mx-auto px-4 pb-24 md:px-6">
        <SectionHeading 
          title={isAr ? 'خدماتنا الاحترافية' : 'Our Professional Services'} 
          subtitle={isAr ? 'اختر الخدمة التي تناسب احتياجات مطبخك' : 'Choose the service that fits your kitchen needs'}
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-(--color-brand-gold-pale)">
              {/* Card Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <img 
                  src="/images/hero_kitchen.png" 
                  alt={service.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-(--color-brand-navy) mb-3 group-hover:text-(--color-brand-gold) transition-colors">
                  {service.title}
                </h3>
                <p className="text-(--color-brand-muted) mb-6 line-clamp-3">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="outline" className="w-full justify-between">
                      {isAr ? 'اكتشف المزيد' : 'Learn More'}
                      {isAr ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
