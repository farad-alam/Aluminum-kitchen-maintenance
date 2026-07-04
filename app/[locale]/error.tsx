"use client"

import * as React from "react"
import { Button } from "@/components/ui/Button"
import { AlertCircle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center px-4">
      <AlertCircle className="h-12 w-12 text-red-500" />
      <h2 className="text-2xl font-bold text-(--color-brand-navy)">
        Something went wrong!
      </h2>
      <p className="text-(--color-brand-muted) max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <Button onClick={() => reset()} variant="default" className="mt-4">
        Try again
      </Button>
    </div>
  )
}
