import { setRequestLocale } from 'next-intl/server';
import { generateSEO } from '@/lib/seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle2, Target, Award, Users } from 'lucide-react';
import Image from 'next/image';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return generateSEO({
    title: isAr ? 'من نحن' : 'About Us',
    description: isAr 
      ? 'تعرف على شركة مشتاق لصيانة وتركيب مطابخ الألمنيوم في الرياض.'
      : 'Learn more about Mushtak Maintenance and Installation of Aluminum Kitchens in Riyadh.',
    locale,
    canonicalUrl: '/about'
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === 'ar';

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": isAr ? 'من نحن' : 'About Us',
    "description": isAr 
      ? 'تعرف على شركة مشتاق لصيانة وتركيب مطابخ الألمنيوم في الرياض.'
      : 'Learn more about Mushtak Maintenance and Installation of Aluminum Kitchens in Riyadh.',
    "publisher": {
      "@type": "Organization",
      "name": isAr ? "صيانة مطابخ ألمنيوم" : "Aluminum Kitchen Maintenance",
    }
  };

  const breadcrumbItems = [
    { label: isAr ? 'الرئيسية' : 'Home', href: '/' },
    { label: isAr ? 'من نحن' : 'About Us' }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="flex-1 bg-(--color-brand-surface)">
        
        {/* Page Header */}
        <div className="bg-(--color-brand-navy) py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              {isAr ? 'من نحن' : 'About Us'}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-24">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-(--color-brand-navy) lg:text-4xl">
                {isAr ? 'رواد صيانة وتركيب المطابخ في الرياض' : 'Pioneers in Kitchen Maintenance & Installation in Riyadh'}
              </h2>
              <p className="text-lg text-(--color-brand-muted) leading-relaxed">
                {isAr 
                  ? 'نحن فريق متخصص يمتلك خبرة واسعة تمتد لأكثر من 10 سنوات في تقديم حلول متكاملة لمطابخ الألمنيوم. نهدف إلى تقديم خدمات احترافية تلبي احتياجات عملائنا بأعلى معايير الجودة والسرعة.'
                  : 'We are a specialized team with over 10 years of extensive experience in providing comprehensive solutions for aluminum kitchens. We aim to deliver professional services that meet our clients\' needs with the highest standards of quality and speed.'
                }
              </p>
              <p className="text-lg text-(--color-brand-muted) leading-relaxed">
                {isAr
                  ? 'من خلال التزامنا بالشفافية والدقة، أصبحنا الخيار الأول للعديد من الأسر والمطاعم في الرياض لفك، تركيب، وصيانة المطابخ.'
                  : 'Through our commitment to transparency and precision, we have become the top choice for many families and restaurants in Riyadh for dismantling, installing, and maintaining kitchens.'
                }
              </p>
            </div>
            
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/hero_kitchen.png"
                alt={isAr ? 'صيانة مطابخ ألمنيوم' : 'Aluminum Kitchen Maintenance'}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats / Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { label: isAr ? 'سنوات الخبرة' : 'Years Experience', value: '+10', icon: Award },
              { label: isAr ? 'مشروع منجز' : 'Projects Completed', value: '+500', icon: Target },
              { label: isAr ? 'فنيين متخصصين' : 'Specialized Techs', value: '15', icon: Users },
              { label: isAr ? 'عميل راضٍ' : 'Satisfied Clients', value: '100%', icon: CheckCircle2 },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm text-center">
                <stat.icon className="h-10 w-10 text-(--color-brand-gold) mb-4" />
                <span className="text-3xl font-bold text-(--color-brand-navy) mb-2">{stat.value}</span>
                <span className="text-sm text-(--color-brand-muted) font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-(--color-brand-navy) text-white p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="text-(--color-brand-gold)" />
                {isAr ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-(--color-brand-surface-2) leading-relaxed">
                {isAr 
                  ? 'أن نكون الشركة الرائدة والأكثر ثقة في تقديم خدمات المطابخ الألمنيوم على مستوى المملكة العربية السعودية، من خلال الابتكار والجودة العالية.'
                  : 'To be the leading and most trusted company providing aluminum kitchen services across Saudi Arabia, through innovation and high quality.'
                }
              </p>
            </div>
            
            <div className="bg-white border-2 border-(--color-brand-gold-pale) p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-bold text-(--color-brand-navy) mb-4 flex items-center gap-3">
                <Award className="text-(--color-brand-gold)" />
                {isAr ? 'رسالتنا' : 'Our Mission'}
              </h3>
              <p className="text-(--color-brand-muted) leading-relaxed">
                {isAr 
                  ? 'تقديم خدمات احترافية، سريعة، وموثوقة لعملائنا، مع ضمان استخدام أفضل المواد وقطع الغيار لتحقيق رضاهم التام.'
                  : 'Delivering professional, fast, and reliable services to our clients, ensuring the use of the best materials and spare parts to achieve total satisfaction.'
                }
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
