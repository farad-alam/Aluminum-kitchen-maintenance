"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const t = useTranslations("Testimonials")
  const reviews = t.raw("reviews") as { name: string; role: string; text: string }[]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      direction: "rtl" // Next-intl standardizes RTL layout nicely
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onInit = React.useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  // To simulate the 3D effect across exactly 3 items, we can duplicate them to create a continuous loop effect, 
  // but Embla handles `loop: true` natively.
  const displayReviews = [...reviews, ...reviews] // Duplicate to ensure enough slides for center focus if there are only 3

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Beautiful Sunburst Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/images/testimonials-bg.png" 
          alt="Background Texture" 
          fill 
          className="object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/80 via-transparent to-white/90" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        {/* Minimalist Heading */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-8 md:w-16 bg-gray-200"></div>
          <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            They Use Our Service
          </span>
          <div className="h-[1px] w-8 md:w-16 bg-gray-200"></div>
        </div>

        {/* Carousel Container */}
        <div className="mx-auto max-w-6xl" dir="rtl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 rtl:-ml-0 rtl:-mr-4 py-8">
              {displayReviews.map((review, index) => {
                // The actual active slide must exactly match the Embla selected index (0-5)
                const isActive = selectedIndex === index;

                return (
                  <div 
                    key={index} 
                    className="min-w-0 flex-[0_0_90%] md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-4 rtl:pl-0 rtl:pr-4"
                  >
                    <div 
                      className={`h-full transition-all duration-500 ease-out ${
                        isActive 
                          ? "scale-100 opacity-100 z-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative" 
                          : "scale-[0.92] opacity-50 z-0 shadow-md pointer-events-none"
                      }`}
                    >
                      {/* The Card */}
                      <div className="flex h-full flex-col justify-between rounded-xl bg-white overflow-hidden border border-gray-50">
                        {/* Top Review Section */}
                        <div className="p-8 md:p-10 pb-12">
                          <Quote className="mb-6 h-12 w-12 text-[#98b8f5] rotate-180 opacity-80" fill="currentColor" strokeWidth={0} />
                          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            "{review.text}"
                          </p>
                        </div>
                        
                        {/* Bottom Author Section */}
                        <div className="flex items-center gap-4 bg-[#f8f9fc] border-t border-gray-100 p-6 md:p-8">
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-[#98b8f5] to-[#719df0] shadow-sm">
                            {/* Avatar Fallback initials */}
                            <span className="font-bold text-white text-lg">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-gray-900 text-base">{review.name}</span>
                            <span className="text-sm font-semibold text-[#719df0] mt-0.5">{review.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={scrollPrev} 
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-[#719df0] hover:text-[#5284eb] hover:bg-gray-50 hover:shadow-md transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 rtl:hidden" />
              <ChevronRight className="h-5 w-5 hidden rtl:block" />
            </button>

            <div className="flex items-center gap-3">
              {reviews.map((_, originalIndex) => (
                <button 
                  key={originalIndex} 
                  onClick={() => scrollTo(originalIndex)}
                  aria-label={`Go to slide ${originalIndex + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    (selectedIndex % reviews.length) === originalIndex 
                      ? 'w-3.5 h-3.5 bg-[#719df0] shadow-sm ring-4 ring-[#719df0]/20' 
                      : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={scrollNext} 
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-[#719df0] hover:text-[#5284eb] hover:bg-gray-50 hover:shadow-md transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 rtl:hidden" />
              <ChevronLeft className="h-5 w-5 hidden rtl:block" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  )
}
