"use client"

import * as React from "react"
import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar"
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-(--color-brand-surface-2) text-(--color-brand-navy)"
    >
      <Globe className="h-4 w-4 text-(--color-brand-gold)" />
      {locale === "ar" ? "English" : "عربي"}
    </button>
  )
}
