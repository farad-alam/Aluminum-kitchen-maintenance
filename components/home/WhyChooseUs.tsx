"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Clock, ShieldCheck, Users, Zap, Coins, ThumbsUp } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs")

  const iconMap = [
    ThumbsUp,
    Zap,
    Users,
    ShieldCheck,
    Coins,
    Clock
  ]

  const features = t.raw("features") as { title: string; desc: string }[]

  return (
    <section className="bg-(--color-brand-surface) py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-brand-navy) text-white">
                  <Icon className="h-6 w-6 text-(--color-brand-gold)" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-(--color-brand-navy)">
                  {feature.title}
                </h3>
                <p className="text-(--color-brand-muted) leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
