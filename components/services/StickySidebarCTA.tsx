"use client"

import * as React from "react"
import { PhoneCall, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useTranslations } from "next-intl"

export function StickySidebarCTA() {
  const tCTA = useTranslations("ContactCTA")
  const whatsappUrl = "https://wa.me/966500892742"
  const phoneUrl = "tel:+966500892742"

  return (
    <div className="sticky top-28 flex flex-col overflow-hidden rounded-2xl bg-(--color-brand-navy) text-white shadow-lg">
      <div className="bg-(--color-brand-gold) p-6 text-center">
        <h3 className="text-xl font-bold text-white">هل تحتاج لمساعدة فورية؟</h3>
        <p className="mt-2 text-sm text-(--color-brand-gold-pale)">
          تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر
        </p>
      </div>
      
      <div className="flex flex-col gap-4 p-6">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" className="w-full text-base font-semibold shadow-md">
            <MessageCircle className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
            تواصل عبر واتساب
          </Button>
        </a>
        <a href={phoneUrl}>
          <Button variant="outline" className="w-full text-base font-semibold border-white text-white hover:bg-white hover:text-(--color-brand-navy)">
            <PhoneCall className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
            اتصل بنا الآن
          </Button>
        </a>
        
        <div className="mt-4 flex items-center justify-center gap-2 border-t border-(--color-brand-navy-mid) pt-4 text-sm text-(--color-brand-surface-2)">
          <Clock className="h-4 w-4 text-(--color-brand-gold)" />
          <span>{tCTA("hours")}</span>
        </div>
      </div>
    </div>
  )
}
