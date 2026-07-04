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
    <section className="bg-[#e6eedf] overflow-hidden relative flex flex-col justify-center py-16 lg:py-0 lg:h-[100svh] lg:min-h-[700px] lg:max-h-[1000px]">
      <div className="container mx-auto px-4 md:px-6 flex flex-col h-full justify-center max-w-7xl">
        
        {/* Header split layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-8 mb-8 lg:mb-10 w-full relative z-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-(--color-brand-navy) max-w-xl leading-tight">
            {t("title")}
          </h2>
          <p className="text-base lg:text-lg text-(--color-brand-navy)/80 max-w-md font-medium">
            {t("subtitle")}
          </p>
        </div>

        {/* Central Organic Layout with Grid Overlay */}
        <div className="relative w-full flex flex-col items-center justify-center flex-1 py-4 lg:py-8 min-h-0">
          
          {/* Center Organic Background Image (Absolute) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[70%] lg:w-[85%] lg:h-[110%] z-0 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 overflow-hidden shadow-2xl" 
              style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
            >
              <Image 
                src="/images/why_choose_us_center.png" 
                alt="Why Choose Us" 
                fill 
                className="object-cover scale-110" 
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </div>

          {/* 3-Column Grid for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full relative z-10 lg:px-8 items-center justify-items-center">
            {features.map((feature, index) => {
              const Icon = iconMap[index]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 shadow-2xl shadow-black/10 flex flex-col items-center text-center w-full max-w-[320px] hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="mb-4 inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-gray-50 border border-gray-100 shadow-sm">
                    <Icon className="h-6 w-6 lg:h-7 lg:w-7 text-red-500" />
                  </div>
                  <h3 className="mb-2 text-[16px] lg:text-[18px] font-bold text-(--color-brand-navy)">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] lg:text-sm text-(--color-brand-muted) font-medium leading-relaxed">
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
