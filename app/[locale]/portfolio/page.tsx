import { setRequestLocale } from 'next-intl/server';
import { generateSEO } from '@/lib/seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { routing } from '@/i18n/routing';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return generateSEO({
    title: isAr ? 'أعمالنا' : 'Our Portfolio',
    description: isAr 
      ? 'شاهد أحدث أعمالنا في صيانة وتركيب مطابخ الألمنيوم في الرياض.'
      : 'View our latest works in aluminum kitchen maintenance and installation in Riyadh.',
    locale,
    canonicalUrl: '/portfolio'
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === 'ar';

  const breadcrumbItems = [
    { label: isAr ? 'الرئيسية' : 'Home', href: '/' },
    { label: isAr ? 'أعمالنا' : 'Portfolio' }
  ];

  return (
    <main className="flex-1 bg-(--color-brand-surface) pb-24">
      {/* Page Header */}
      <div className="bg-(--color-brand-navy) py-12 mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            {isAr ? 'معرض أعمالنا' : 'Our Portfolio'}
          </h1>
          <p className="mt-4 text-(--color-brand-surface-2) text-lg max-w-2xl">
            {isAr 
              ? 'تصفح بعضاً من أحدث مشاريعنا المنجزة في مجالات صيانة، تركيب، وتجديد المطابخ.' 
              : 'Browse some of our latest completed projects in kitchen maintenance, installation, and renovation.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <PortfolioGrid locale={locale} />
      </div>
    </main>
  );
}
