"use client"

import { useState, useEffect } from "react"
import moment from "moment-jalaali"
import { Clock, Calendar } from "lucide-react"

moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" })

export function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)

  useEffect(() => {
    setCurrentTime(new Date())
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!currentTime) {
    return (
      <div className="bg-foreground/95 text-background py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm">
            <div className="h-5 w-48 bg-background/20 rounded animate-pulse" />
            <div className="h-5 w-48 bg-background/20 rounded animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  const utcTime = currentTime.toUTCString().split(" ")[4]
  const gregorianDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const persianDate = moment(currentTime).format("dddd jD jMMMM jYYYY")
  const tehranTime = currentTime.toLocaleTimeString("fa-IR", {
    timeZone: "Asia/Tehran",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

  return (
    <div className="bg-foreground/95 text-background py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-background/70">ساعت تهران:</span>
              <span className="font-bold text-primary" dir="ltr">{tehranTime}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-background/70">UTC:</span>
              <span className="font-mono" dir="ltr">{utcTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">{persianDate}</span>
            </div>
            <div className="hidden md:block text-background/70" dir="ltr">
              {gregorianDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
