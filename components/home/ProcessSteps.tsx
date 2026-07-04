"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Phone, ClipboardCheck, Calculator, Wrench, CheckCircle } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function ProcessSteps() {
  const t = useTranslations("Process")
  const steps = t.raw("steps") as { title: string; desc: string }[]
  
  const iconMap = [Phone, ClipboardCheck, Calculator, Wrench, CheckCircle]

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
          className="mb-20"
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-10 left-0 hidden h-[2px] w-full bg-(--color-brand-surface-2) md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-4">
            {steps.map((step, index) => {
              const Icon = iconMap[index]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-(--color-brand-navy) shadow-lg ring-8 ring-white">
                    <Icon className="h-8 w-8 text-(--color-brand-gold)" />
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-(--color-brand-gold) font-bold text-white border-4 border-white">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-(--color-brand-navy)">
                    {step.title}
                  </h3>
                  <p className="text-sm text-(--color-brand-muted)">
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
