"use client"

import * as React from "react"
import { Phone, MessageCircle } from "lucide-react"

export function FloatingCTA() {
  const whatsappUrl = "https://wa.me/966500892742"
  const phoneUrl = "tel:+966500892742"

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <a
        href={phoneUrl}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-(--color-brand-navy) text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-(--color-brand-navy) focus:ring-offset-2"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-(--color-brand-navy) px-3 py-1 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-[#25D366] px-3 py-1 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          WhatsApp Us
        </span>
      </a>
    </div>
  )
}
