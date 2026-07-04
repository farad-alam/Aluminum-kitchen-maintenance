"use client"

import * as React from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useLocale } from "next-intl"

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[]
}) {
  const locale = useLocale()
  const Chevron = locale === "ar" ? ChevronLeft : ChevronRight

  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex items-center space-x-2 space-x-reverse text-sm text-(--color-brand-muted)">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 space-x-reverse">
            {index > 0 && <Chevron className="h-4 w-4" />}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-(--color-brand-gold) transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-(--color-brand-navy) font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
