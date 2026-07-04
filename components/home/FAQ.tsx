"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

export function FAQ() {
  const t = useTranslations("FAQ")
  const questions = t.raw("questions") as { q: string; a: string }[]

  return (
    <section className="bg-(--color-brand-surface) py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t("title")} 
          subtitle={t("subtitle")}
          className="mb-16"
        />

        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
