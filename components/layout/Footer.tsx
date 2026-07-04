import * as React from "react"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const t = useTranslations("Navigation")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-(--color-brand-navy) text-white pt-16 pb-8 border-t-[4px] border-(--color-brand-gold)">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-lg w-fit">
              <Image
                src="/images/logo.png"
                alt="Mushtak Maintenance Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-(--color-brand-muted) text-sm max-w-xs mt-2 leading-relaxed">
              Premium aluminum kitchen maintenance, installation, and dismantling services in Riyadh, Saudi Arabia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-(--color-brand-surface-2)">
              <li><Link href="/" className="hover:text-(--color-brand-gold) transition-colors">{t("home")}</Link></li>
              <li><Link href="/services" className="hover:text-(--color-brand-gold) transition-colors">{t("services")}</Link></li>
              <li><Link href="/portfolio" className="hover:text-(--color-brand-gold) transition-colors">{t("portfolio")}</Link></li>
              <li><Link href="/about" className="hover:text-(--color-brand-gold) transition-colors">{t("about")}</Link></li>
              <li><Link href="/contact" className="hover:text-(--color-brand-gold) transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-(--color-brand-surface-2)">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-(--color-brand-gold) shrink-0" />
                <span>Riyadh, Saudi Arabia<br/>(Full address pending)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-(--color-brand-gold) shrink-0" />
                <a href="tel:+966500892742" className="hover:text-(--color-brand-gold) transition-colors" dir="ltr">
                  +966 50 089 2742
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-(--color-brand-gold) shrink-0" />
                <a href="mailto:info@mushtakmaintenance.com" className="hover:text-(--color-brand-gold) transition-colors">
                  info@mushtakmaintenance.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Business Hours</h3>
            <ul className="flex flex-col gap-2 text-sm text-(--color-brand-surface-2) mb-4">
              <li className="flex justify-between">
                <span>Saturday - Thursday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday:</span>
                <span>Closed</span>
              </li>
            </ul>
            
            <h3 className="text-lg font-bold text-white mt-2">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-(--color-brand-navy-mid) flex items-center justify-center hover:bg-(--color-brand-gold) transition-colors text-white font-bold text-sm">
                IN
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-(--color-brand-navy-mid) flex items-center justify-center hover:bg-(--color-brand-gold) transition-colors text-white font-bold text-sm">
                TW
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-(--color-brand-navy-mid) flex items-center justify-center hover:bg-(--color-brand-gold) transition-colors text-white font-bold text-sm">
                FB
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-(--color-brand-navy-mid) flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-(--color-brand-muted)">
          <p>© {currentYear} Mushtak Maintenance. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-(--color-brand-gold)">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-(--color-brand-gold)">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
