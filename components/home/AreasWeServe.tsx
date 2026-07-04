"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Link } from "@/i18n/routing"

export function AreasWeServe() {
  const t = useTranslations("AreasWeServe")
  const districts = t.raw("districts") as string[]

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
          className="mb-16"
        />

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {districts.map((district, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* Note: we would map these to english slugs in a real scenario or pass objects in JSON */}
              <Link href="/areas" className="flex items-center gap-2 rounded-full border border-(--color-brand-border) bg-(--color-brand-surface) px-6 py-3 text-sm font-medium text-(--color-brand-navy) transition-colors hover:border-(--color-brand-gold) hover:bg-(--color-brand-gold-pale) hover:text-(--color-brand-gold)">
                <MapPin className="h-4 w-4" />
                {district}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
