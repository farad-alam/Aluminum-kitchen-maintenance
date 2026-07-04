"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Star, Quote } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function Testimonials() {
  const t = useTranslations("Testimonials")
  const reviews = t.raw("reviews") as { name: string; role: string; text: string }[]

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      direction: "rtl" // Embla handles RTL if specified or detected
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  return (
    <section className="bg-(--color-brand-surface) py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
          className="mb-16"
        />

        <div className="mx-auto max-w-5xl overflow-hidden" ref={emblaRef} dir="rtl">
          <div className="flex -ml-4 rtl:-ml-0 rtl:-mr-4">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] rtl:pl-0 rtl:pr-4"
              >
                <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div>
                    <Quote className="mb-4 h-8 w-8 text-(--color-brand-gold-pale)" fill="currentColor" />
                    <div className="mb-6 flex gap-1 text-(--color-brand-gold)">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-(--color-brand-muted) text-lg leading-relaxed italic mb-8">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-(--color-brand-border) pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--color-brand-navy) text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-(--color-brand-navy)">{review.name}</span>
                      <span className="text-sm text-(--color-brand-muted)">{review.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
