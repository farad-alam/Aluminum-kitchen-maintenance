import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-start",
        align === "right" && "items-end text-end",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight text-(--color-brand-navy) sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[700px] text-lg text-(--color-brand-muted)">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "h-1 w-20 rounded-full bg-(--color-brand-gold)",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  )
}
