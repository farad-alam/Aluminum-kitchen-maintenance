"use client"

import * as React from "react"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { Menu, X, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { LanguageSwitcher } from "./LanguageSwitcher"

export function Header() {
  const t = useTranslations("Navigation")
  const [isOpen, setIsOpen] = React.useState(false)

  const links = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/areas", label: t("areas") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--color-brand-border) bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Mushtak Maintenance Logo"
            width={180}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-(--color-brand-navy-mid) hover:text-(--color-brand-gold) transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="whatsapp" className="gap-2">
            <PhoneCall className="h-4 w-4" />
            {t("contact")}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-(--color-brand-navy)"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t border-(--color-brand-border) bg-white px-4 py-6">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-(--color-brand-navy) hover:text-(--color-brand-gold)"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-(--color-brand-border)" />
            <div className="flex items-center justify-between">
              <LanguageSwitcher />
              <Button variant="whatsapp" size="sm" className="gap-2">
                <PhoneCall className="h-4 w-4" />
                {t("contact")}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
