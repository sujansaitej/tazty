"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const launchDate = new Date("2025-12-12T00:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            🚀 Launch Date
          </div>

          <h2 className="mb-3 text-balance text-4xl font-bold lg:text-5xl">
            Launching on <span className="text-primary">December 12th, 2025</span>
          </h2>

          <p className="mb-10 text-lg text-muted-foreground">Get ready for hyperlocal food delivery in Madurai!</p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <Card key={item.label} className="bg-card p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary lg:text-5xl">{String(item.value).padStart(2, "0")}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </div>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Be the first to experience <span className="font-semibold text-primary">Our App</span> from your favorite
            local restaurants
          </p>
        </div>
      </div>
    </section>
  )
}
