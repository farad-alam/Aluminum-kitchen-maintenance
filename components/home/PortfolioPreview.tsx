"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { Link } from "@/i18n/routing"

export function PortfolioPreview() {
  const t = useTranslations("PortfolioPreview")
  const tCTA = useTranslations("CTA")

  // Placeholder projects using the hero image
  const projects = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    image: "/images/hero_kitchen.png"
  }))

  return (
    <section className="bg-(--color-brand-surface) py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button variant="default" className="scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    {tCTA("viewAll")}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="border-2">
              {tCTA("viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
