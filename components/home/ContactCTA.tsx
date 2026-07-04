"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { MessageCircle, PhoneCall, Clock } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function ContactCTA() {
  const tCTA = useTranslations("ContactCTA")
  const whatsappUrl = "https://wa.me/966500892742"
  const phoneUrl = "tel:+966500892742"

  return (
    <section className="bg-(--color-brand-navy) py-24 text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full border-[20px] border-(--color-brand-gold)" />
        <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full border-[20px] border-(--color-brand-gold)" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{tCTA("title")}</h2>
        <p className="text-xl text-(--color-brand-surface-2) mb-12 max-w-2xl mx-auto">
          {tCTA("subtitle")}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="whatsapp" className="w-full sm:w-auto text-lg px-10 h-16 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <MessageCircle className="mr-2 h-6 w-6 rtl:ml-2 rtl:mr-0" />
              تواصل عبر واتساب
            </Button>
          </a>
          <a href={phoneUrl}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 h-16 rounded-full border-2 border-white text-white hover:bg-white hover:text-(--color-brand-navy) shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <PhoneCall className="mr-2 h-6 w-6 rtl:ml-2 rtl:mr-0" />
              اتصل بنا الآن
            </Button>
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-(--color-brand-gold-pale)">
          <Clock className="h-5 w-5" />
          <span className="font-medium">{tCTA("hours")}</span>
        </div>
      </div>
    </section>
  )
}
