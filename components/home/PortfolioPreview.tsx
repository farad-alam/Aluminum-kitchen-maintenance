"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { Link } from "@/i18n/routing"
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider"

export function PortfolioPreview() {
  const t = useTranslations("PortfolioPreview")
  const tCTA = useTranslations("CTA")

  // Shared project data with before/after capabilities
  const projects = [
    { 
      id: '1', 
      title: 'Full Kitchen Renovation',
      image: '/images/kitchen_after_1.png',
      beforeImage: '/images/kitchen_before_1.png'
    },
    { 
      id: '2', 
      title: 'Hinges and Doors Repair',
      image: '/images/kitchen_after_2.png',
      beforeImage: '/images/kitchen_before_2.png'
    },
    { id: '3', title: 'Villa Kitchen Installation', image: '/images/hero_kitchen_3.png' },
    { id: '4', title: 'Kitchen Color Change', image: '/images/hero_kitchen_4.png' },
    { id: '5', title: 'Apartment Kitchen Installation', image: '/images/hero_kitchen_5.png' },
    { id: '6', title: 'Sliding Drawers Maintenance', image: '/images/hero_kitchen.png' },
  ];

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
                {project.beforeImage ? (
                  <BeforeAfterSlider beforeImage={project.beforeImage} afterImage={project.image} />
                ) : (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      <Button variant="default" className="scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 pointer-events-auto">
                        {tCTA("viewAll")}
                      </Button>
                    </div>
                  </>
                )}
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
