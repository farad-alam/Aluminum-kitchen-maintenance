"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Clock, ShieldCheck, Users, Zap, Coins, ThumbsUp } from "lucide-react"

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
    <section className="bg-[#e6eedf] py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header split layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-(--color-brand-navy) max-w-xl leading-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-(--color-brand-navy)/80 max-w-md font-medium mt-2">
            {t("subtitle")}
          </p>
        </div>

        {/* Central Organic Layout */}
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[700px] gap-8 lg:gap-0">
          
          {/* Left Cards */}
          <div className="flex flex-col gap-6 lg:gap-12 relative z-10 lg:w-1/3 items-center lg:items-end w-full">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = iconMap[index]
              const translateClasses = [
                "lg:ltr:translate-x-12 lg:rtl:-translate-x-12",
                "lg:ltr:translate-x-24 lg:rtl:-translate-x-24",
                "lg:ltr:translate-x-12 lg:rtl:-translate-x-12"
              ][index]

              return (
                <motion.div
                  key={`left-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-[2rem] p-6 shadow-2xl shadow-black/5 flex flex-col items-center text-center w-full max-w-[260px] transition-transform hover:scale-105 ${translateClasses}`}
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold text-(--color-brand-navy)">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-(--color-brand-muted) font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Center Organic Image */}
          <div className="relative w-full max-w-md aspect-[4/3] lg:aspect-square lg:w-1/3 shrink-0 z-0 my-12 lg:my-0 px-4 lg:px-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 overflow-hidden shadow-2xl" 
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            >
              <Image 
                src="/images/why_choose_us_center.png" 
                alt="Why Choose Us" 
                fill 
                className="object-cover scale-110 hover:scale-125 transition-transform duration-[2000ms]" 
              />
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 lg:gap-12 relative z-10 lg:w-1/3 items-center lg:items-start w-full">
            {features.slice(3, 6).map((feature, index) => {
              const Icon = iconMap[index + 3]
              const translateClasses = [
                "lg:ltr:-translate-x-12 lg:rtl:translate-x-12",
                "lg:ltr:-translate-x-24 lg:rtl:translate-x-24",
                "lg:ltr:-translate-x-12 lg:rtl:translate-x-12"
              ][index]

              return (
                <motion.div
                  key={`right-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-[2rem] p-6 shadow-2xl shadow-black/5 flex flex-col items-center text-center w-full max-w-[260px] transition-transform hover:scale-105 ${translateClasses}`}
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold text-(--color-brand-navy)">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-(--color-brand-muted) font-medium leading-relaxed">
                    {feature.desc}
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
