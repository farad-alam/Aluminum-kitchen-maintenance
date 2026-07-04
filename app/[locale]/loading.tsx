import * as React from "react"
import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2 text-(--color-brand-muted)">
        <Loader2 className="h-10 w-10 animate-spin text-(--color-brand-gold)" />
        <p className="text-sm font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
