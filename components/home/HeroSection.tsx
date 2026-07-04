"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { PhoneCall, ShieldCheck, Wrench, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export function HeroSection() {
  const tHero = useTranslations("Hero")
  const tCTA = useTranslations("CTA")

  const whatsappUrl = "https://wa.me/966500892742"
  const phoneUrl = "tel:+966500892742"

  const images = [
    "/images/hero_kitchen.png",
    "/images/hero_kitchen_2.png",
    "/images/hero_kitchen_3.png",
    "/images/hero_kitchen_4.png",
    "/images/hero_kitchen_5.png",
  ]

  const [emblaRef] = useEmblaCarousel(
    { loop: true, watchDrag: false },
    [Autoplay({ delay: 5000 })]
  )

  return (
    <section className="relative w-full overflow-hidden bg-(--color-brand-surface) py-20 lg:py-32">
      {/* Background Slider with glassmorphism overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {images.map((src, index) => (
              <div key={index} className="relative min-w-0 flex-[0_0_100%] h-full">
                <Image
                  src={src}
                  alt={`Luxury Aluminum Kitchen ${index + 1}`}
                  fill
                  className="object-cover object-center opacity-90"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-white/30 pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pointer-events-none">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 pointer-events-auto"
          >
            <div className="inline-flex w-fit items-center rounded-full bg-(--color-brand-gold-pale) px-3 py-1 text-sm font-medium text-(--color-brand-gold)">
              <ShieldCheck className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
              {tHero("badges.warranty")}
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-(--color-brand-navy) sm:text-5xl lg:text-6xl leading-tight">
              {tHero("title")}
            </h1>
            
            <p className="max-w-[600px] text-lg text-(--color-brand-navy-mid)">
              {tHero("subtitle")}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp" className="w-full sm:w-auto text-base">
                  {tCTA("whatsapp")}
                </Button>
              </a>
              <a href={phoneUrl}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base gap-2 bg-white">
                  <PhoneCall className="h-5 w-5" />
                  {tCTA("call")}
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-8 pt-8 border-t border-(--color-brand-border)">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-(--color-brand-gold-pale) p-3">
                  <CheckCircle2 className="h-6 w-6 text-(--color-brand-gold)" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-(--color-brand-navy)">{tHero("badges.projects")}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-(--color-brand-gold-pale) p-3">
                  <Wrench className="h-6 w-6 text-(--color-brand-gold)" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-(--color-brand-navy)">{tHero("badges.experience")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
