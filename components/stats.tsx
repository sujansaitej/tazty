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
      { threshold: 0.3 }
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
      value: 4.8,
      suffix: "/5",
      label: "App Rating",
      description: "Based on user reviews",
      isDecimal: true,
    },
  ]

  return (
    <section ref={ref} className="py-16 bg-[#00C853]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const count = useCountUp(
              stat.isDecimal ? stat.value * 10 : stat.value,
              2000,
              isVisible
            )
            const displayValue = stat.isDecimal ? (count / 10).toFixed(1) : count

            return (
              <div key={index} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {displayValue}
                  {stat.suffix}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
