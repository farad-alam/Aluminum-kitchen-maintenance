"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { MousePointerClick, FileText, Settings, CheckCircle } from "lucide-react"

export function ProcessSteps() {
  const t = useTranslations("Process")
  const steps = t.raw("steps") as { title: string; desc: string }[]

  const icons = [MousePointerClick, FileText, Settings, CheckCircle]

  return (
    <section className="bg-[#faf9f7] py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-(--color-brand-gold) font-bold text-sm tracking-wider uppercase mb-3">
              {t("subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {t("title")}
            </h2>
          </motion.div>
        </div>

        {/* Steps Container */}
        <div className="max-w-5xl mx-auto w-full flex flex-col relative pb-10">
          
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0
            const Icon = icons[index]
            
            return (
              <div 
                key={index} 
                className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'} relative ${index > 0 ? '-mt-4 lg:-mt-8' : ''}`}
                style={{ zIndex: index }}
              >
                {/* The Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-[46%] relative bg-white rounded-[24px] lg:rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
                >
                  {/* Smaller Icon with Ripples */}
                  <div className={`absolute top-0 -translate-y-1/2 flex items-center justify-center ${
                    isLeft 
                      ? 'start-0 ltr:-translate-x-1/2 rtl:translate-x-1/2' 
                      : 'end-0 ltr:translate-x-1/2 rtl:-translate-x-1/2'
                  }`}>
                    <div className="absolute w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full border border-gray-100/30 bg-white/20 shadow-sm"></div>
                    <div className="absolute w-[56px] h-[56px] md:w-[60px] md:h-[60px] rounded-full border border-gray-100/50 bg-white/40 shadow-sm"></div>
                    <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex items-center justify-center z-10 border border-gray-50">
                      <Icon className="w-5 h-5 md:w-5 md:h-5 text-[#f06449]" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>

                {/* Connecting Line (Desktop Only) - Perfect side-to-side zig-zag */}
                {index < steps.length - 1 && (
                  <div className={`hidden lg:flex absolute w-[10%] h-[120px] xl:h-[130px] flex-col ${isLeft ? 'start-[45%]' : 'end-[45%]'} top-[50%] -z-10 opacity-70`}>
                    {isLeft ? (
                      <>
                        <div className="w-1/2 h-1/2 border-t-[2px] border-e-[2px] rounded-se-[1.5rem] border-dashed border-[#f06449]" />
                        <div className="w-1/2 h-1/2 border-b-[2px] border-s-[2px] rounded-es-[1.5rem] border-dashed border-[#f06449] self-end" />
                      </>
                    ) : (
                      <>
                        <div className="w-1/2 h-1/2 border-t-[2px] border-s-[2px] rounded-ss-[1.5rem] border-dashed border-[#f06449] self-end" />
                        <div className="w-1/2 h-1/2 border-b-[2px] border-e-[2px] rounded-ee-[1.5rem] border-dashed border-[#f06449]" />
                      </>
                    )}
                  </div>
                )}
              </div>
            )
          })}
          
        </div>
      </div>
    </section>
  )
}
