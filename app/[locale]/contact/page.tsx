import { setRequestLocale } from 'next-intl/server';
import { generateSEO } from '@/lib/seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { routing } from '@/i18n/routing';
import { MapPin, Phone, Mail, Clock, MessageCircle, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/Button';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return generateSEO({
    title: isAr ? 'اتصل بنا' : 'Contact Us',
    description: isAr 
      ? 'تواصل مع شركة مشتاق لصيانة مطابخ الألمنيوم. احصل على استشارة وعرض سعر مجاني.'
      : 'Contact Mushtak Aluminum Kitchen Maintenance. Get a free consultation and quotation.',
    locale,
    canonicalUrl: '/contact'
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === 'ar';

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": isAr ? 'اتصل بنا' : 'Contact Us',
    "description": isAr 
      ? 'تواصل مع شركة مشتاق لصيانة مطابخ الألمنيوم.'
      : 'Contact Mushtak Aluminum Kitchen Maintenance.',
    "mainEntity": {
      "@type": "HomeAndConstructionBusiness",
      "name": isAr ? "صيانة مطابخ ألمنيوم" : "Aluminum Kitchen Maintenance",
      "telephone": "+966500892742",
      "email": "info@mushtakmaintenance.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh",
        "addressCountry": "SA"
      }
    }
  };

  const breadcrumbItems = [
    { label: isAr ? 'الرئيسية' : 'Home', href: '/' },
    { label: isAr ? 'اتصل بنا' : 'Contact Us' }
  ];

  const whatsappUrl = "https://wa.me/966500892742";
  const phoneUrl = "tel:+966500892742";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="flex-1 bg-(--color-brand-surface) pb-24">
        
        {/* Page Header */}
        <div className="bg-(--color-brand-navy) py-12 mb-12">
          <div className="container mx-auto px-4 md:px-6">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              {isAr ? 'تواصل معنا' : 'Get In Touch'}
            </h1>
            <p className="mt-4 text-(--color-brand-surface-2) text-lg max-w-2xl">
              {isAr 
                ? 'فريقنا جاهز للرد على استفساراتكم وتقديم الدعم اللازم لصيانة وتجديد مطبخكم.' 
                : 'Our team is ready to answer your inquiries and provide necessary support for your kitchen maintenance and renovation.'}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-(--color-brand-border)">
            
            {/* Left: Contact Info & Map Placeholder */}
            <div className="p-8 md:p-12 bg-(--color-brand-surface)">
              <h2 className="text-3xl font-bold text-(--color-brand-navy) mb-8">
                {isAr ? 'معلومات التواصل' : 'Contact Information'}
              </h2>
              
              <div className="flex flex-col gap-6 mb-12">
                <div className="flex items-start gap-4 text-lg">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-(--color-brand-gold-pale) flex items-center justify-center text-(--color-brand-gold)">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="pt-2">
                    <p className="font-bold text-(--color-brand-navy)">{isAr ? 'العنوان' : 'Address'}</p>
                    <p className="text-(--color-brand-muted)">الرياض، المملكة العربية السعودية<br/>(Full address pending)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-lg">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-(--color-brand-gold-pale) flex items-center justify-center text-(--color-brand-gold)">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="pt-2">
                    <p className="font-bold text-(--color-brand-navy)">{isAr ? 'رقم الهاتف' : 'Phone Number'}</p>
                    <a href={phoneUrl} className="text-(--color-brand-muted) hover:text-(--color-brand-gold) transition-colors" dir="ltr">
                      +966 50 089 2742
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-lg">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-(--color-brand-gold-pale) flex items-center justify-center text-(--color-brand-gold)">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="pt-2">
                    <p className="font-bold text-(--color-brand-navy)">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</p>
                    <a href="mailto:info@mushtakmaintenance.com" className="text-(--color-brand-muted) hover:text-(--color-brand-gold) transition-colors">
                      info@mushtakmaintenance.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-lg">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-(--color-brand-gold-pale) flex items-center justify-center text-(--color-brand-gold)">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="pt-2">
                    <p className="font-bold text-(--color-brand-navy)">{isAr ? 'ساعات العمل' : 'Working Hours'}</p>
                    <p className="text-(--color-brand-muted)">
                      {isAr ? 'السبت - الخميس: ٨:٠٠ ص - ٦:٠٠ م' : 'Saturday - Thursday: 8:00 AM - 6:00 PM'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-400">
                <MapPin className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-gray-500 font-medium">{isAr ? 'خريطة جوجل (ستضاف لاحقاً)' : 'Google Map (Pending)'}</p>
              </div>
            </div>

            {/* Right: Direct Contact CTA (No Form) */}
            <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl font-bold text-(--color-brand-navy) mb-4">
                {isAr ? 'أسرع طريقة للوصول إلينا' : 'Fastest Way to Reach Us'}
              </h2>
              <p className="text-lg text-(--color-brand-muted) mb-12 max-w-md">
                {isAr 
                  ? 'نحن لا نستخدم نماذج التواصل التقليدية لضمان سرعة الاستجابة. تواصل معنا مباشرة عبر واتساب أو الاتصال الهاتفي.' 
                  : 'We do not use traditional contact forms to ensure quick responses. Reach out directly via WhatsApp or phone call.'}
              </p>

              <div className="flex flex-col w-full max-w-sm gap-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="whatsapp" className="w-full h-16 text-xl rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    <MessageCircle className="mr-3 h-7 w-7 rtl:ml-3 rtl:mr-0" />
                    {isAr ? 'محادثة عبر واتساب' : 'Chat on WhatsApp'}
                  </Button>
                </a>
                
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-(--color-brand-border)"></div>
                  <span className="flex-shrink-0 mx-4 text-(--color-brand-muted) font-medium">{isAr ? 'أو' : 'OR'}</span>
                  <div className="flex-grow border-t border-(--color-brand-border)"></div>
                </div>

                <a href={phoneUrl}>
                  <Button size="lg" variant="default" className="w-full h-16 text-xl rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    <PhoneCall className="mr-3 h-7 w-7 rtl:ml-3 rtl:mr-0" />
                    {isAr ? 'اتصل الآن' : 'Call Now'}
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
