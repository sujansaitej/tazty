"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Store, Clock, Star } from "lucide-react"

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, start])

  return count
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3, rootMargin: '50px' } // Add rootMargin for earlier trigger
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Store,
      value: 500,
      suffix: "+",
      label: "Restaurant Partners",
      description: "Local restaurants and hidden gems",
    },
    {
      icon: Clock,
      value: 15,
      suffix: " min",
      label: "Average Delivery",
      description: "Fresh food delivered fast",
    },
    {
      icon: Star,
      value: 5,
      suffix: " Stars",
      label: "App Rating",
      description: "Based on user reviews",
      isDecimal: true,
    },
  ]

  return (
    <section ref={ref} className="py-10 sm:py-12 md:py-16 bg-[#00C853]" style={{ fontFamily: "var(--font-open-sans), 'Open Sans', sans-serif" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const count = useCountUp(
              stat.isDecimal ? stat.value * 10 : stat.value,
              2000,
              isVisible
            )
            const displayValue = stat.isDecimal ? (count / 10).toFixed(1) : count

            return (
              <div key={index} className="text-center text-white px-2">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                  {displayValue}
                  {stat.suffix}
                </div>
                <div className="text-base sm:text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-white/80">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
