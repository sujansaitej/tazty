"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { initSmoothScroll } from "@/lib/smooth-scroll"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize smooth scroll for hash links
    initSmoothScroll()
    
    // Handle hash on route change
    if (window.location.hash) {
      const hash = window.location.hash
      const target = document.querySelector(hash)
      if (target) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          const elementPosition = target.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - 80
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }, 300)
      }
    } else {
      // Scroll to top on route change (without hash)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [pathname])

  return <>{children}</>
}

