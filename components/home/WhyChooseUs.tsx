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

        {/* Central Organic Layout */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between flex-1 gap-8 py-4 lg:py-8 min-h-0">
          
          {/* Center Organic Background Image (Absolute) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] lg:w-[75%] lg:h-[100%] z-0 pointer-events-none">
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

          {/* Left Cards */}
          <div className="flex flex-col gap-6 lg:gap-8 relative z-10 w-full lg:w-1/2 items-center lg:items-start lg:pl-16">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = iconMap[index]
              const translateClasses = [
                "lg:translate-x-0",
                "lg:translate-x-20",
                "lg:translate-x-8"
              ][index]
              
              const floatDuration = 4 + index * 0.5;

              return (
                <motion.div
                  key={`left-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    x: { duration: 0.5, delay: index * 0.1 },
                    y: { repeat: Infinity, duration: floatDuration, ease: "easeInOut", delay: index * 0.2 }
                  }}
                  className={`bg-white/95 backdrop-blur-sm rounded-[1.5rem] lg:rounded-[2rem] p-4 lg:p-5 shadow-2xl shadow-black/10 flex flex-col items-center text-center w-full max-w-[240px] hover:!scale-105 transition-transform ${translateClasses}`}
                >
                  <div className="mb-3 inline-flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-red-500" />
                  </div>
                  <h3 className="mb-1.5 text-[14px] lg:text-[15px] font-bold text-(--color-brand-navy)">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] lg:text-xs text-(--color-brand-muted) font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 lg:gap-8 relative z-10 w-full lg:w-1/2 items-center lg:items-end lg:pr-16">
            {features.slice(3, 6).map((feature, index) => {
              const Icon = iconMap[index + 3]
              const translateClasses = [
                "lg:-translate-x-0",
                "lg:-translate-x-20",
                "lg:-translate-x-8"
              ][index]

              const floatDuration = 4.5 + index * 0.5;

              return (
                <motion.div
                  key={`right-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    x: { duration: 0.5, delay: index * 0.1 },
                    y: { repeat: Infinity, duration: floatDuration, ease: "easeInOut", delay: index * 0.3 }
                  }}
                  className={`bg-white/95 backdrop-blur-sm rounded-[1.5rem] lg:rounded-[2rem] p-4 lg:p-5 shadow-2xl shadow-black/10 flex flex-col items-center text-center w-full max-w-[240px] hover:!scale-105 transition-transform ${translateClasses}`}
                >
                  <div className="mb-3 inline-flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-red-500" />
                  </div>
                  <h3 className="mb-1.5 text-[14px] lg:text-[15px] font-bold text-(--color-brand-navy)">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] lg:text-xs text-(--color-brand-muted) font-medium leading-relaxed">
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
