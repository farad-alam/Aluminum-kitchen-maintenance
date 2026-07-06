"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, ArrowRight, CircleHelp } from "lucide-react"
import { Link } from "@/i18n/routing"

export function FAQ() {
  const t = useTranslations("FAQ")
  const questions = t.raw("questions") as { q: string; a: string }[]

  const [openIndex, setOpenIndex] = React.useState<number | null>(1) // Open the second one by default to match image

  return (
    <section className="bg-gradient-to-b from-gray-50 to-[#e9e9e9] py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">
            <CircleHelp className="w-3.5 h-3.5" />
            FAQS
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight">
            {t("title")}
          </h2>
        </div>

        {/* Questions List */}
        <div className="flex flex-col gap-3">
          {questions.slice(0, 5).map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="relative w-full rounded-[2.5rem]">
                {/* Gradient Border for Open State */}
                {isOpen && (
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-blue-200 via-indigo-200 to-rose-200 p-[1.5px] -z-10" />
                )}
                
                <div 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex flex-col transition-colors duration-300 cursor-pointer overflow-hidden ${
                    isOpen 
                      ? 'bg-white rounded-[calc(2.5rem-1.5px)]' 
                      : 'bg-[#e4e5e7] hover:bg-[#dcdde0] rounded-[2.5rem]'
                  }`}
                >
                  <div className="flex items-center justify-between p-3 md:p-4">
                    
                    {/* Left: Number & Question */}
                    <div className="flex items-center gap-4 md:gap-6 pl-2 md:pl-4">
                      <div className={`flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors ${
                        isOpen ? 'bg-[#f4f5f6] text-gray-500' : 'bg-white text-gray-800'
                      }`}>
                        {index + 1}
                      </div>
                      <span className={`text-sm md:text-base font-medium transition-colors ${
                        isOpen ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {faq.q}
                      </span>
                    </div>

                    {/* Right: Icon */}
                    <div className="pr-1 flex-shrink-0">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                        isOpen 
                          ? 'bg-white border border-gray-100 shadow-sm text-gray-400 rotate-90' 
                          : 'bg-gray-900 text-white'
                      }`}>
                        {isOpen ? (
                          <X className="w-4 h-4" strokeWidth={2} />
                        ) : (
                          <Plus className="w-5 h-5" strokeWidth={2.5} />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="pt-2 pb-6 md:pb-8 pl-16 md:pl-20 pr-6 md:pr-12 text-gray-500 text-sm md:text-[15px] leading-relaxed space-y-4">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Contact */}
        <div className="mt-16 text-center text-sm font-medium text-gray-500">
          Have any other questions? <br />
          <Link href="/contact" className="text-gray-800 font-bold inline-flex items-center gap-1.5 hover:text-black transition-colors mt-2">
            Contact Us <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>

      </div>
    </section>
  )
}
