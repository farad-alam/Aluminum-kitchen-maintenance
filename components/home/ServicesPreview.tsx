"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Wrench, Hammer, RefreshCw } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Link } from "@/i18n/routing"

export function ServicesPreview() {
  const t = useTranslations("ServicesPreview")
  const tCTA = useTranslations("CTA")

  const services = [
    {
      id: "maintenance",
      icon: RefreshCw,
      href: "/services/aluminum-kitchen-maintenance",
      title: t("maintenance.title"),
      desc: t("maintenance.desc"),
      image: "/images/service_maintenance.png"
    },
    {
      id: "installation",
      icon: Hammer,
      href: "/services/aluminum-kitchen-installation",
      title: t("installation.title"),
      desc: t("installation.desc"),
      image: "/images/service_installation.png"
    },
    {
      id: "dismantling",
      icon: Wrench,
      href: "/services/aluminum-kitchen-dismantling",
      title: t("dismantling.title"),
      desc: t("dismantling.desc"),
      image: "/images/service_dismantling.png"
    },
  ]

  return (
    <section className="bg-(--color-brand-white) py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-(--color-brand-surface) shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md border border-transparent hover:border-(--color-brand-gold-pale)">
                  
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                  </div>

                  <div className="p-8 flex flex-col flex-1 relative">
                    {/* Icon floating over image */}
                    <div className="absolute -top-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-(--color-brand-gold-pale) text-(--color-brand-gold) transition-colors group-hover:bg-(--color-brand-gold) group-hover:text-white shadow-lg">
                      <service.icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="mt-8 mb-3 text-2xl font-bold text-(--color-brand-navy) group-hover:text-(--color-brand-gold) transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-(--color-brand-muted) flex-1 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="mt-6 flex items-center text-sm font-semibold text-(--color-brand-gold)">
                      {tCTA("learnMore")}
                      <svg className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
