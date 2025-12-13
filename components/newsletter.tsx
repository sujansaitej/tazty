"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle, Loader2 } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus("success")
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gray-900 flex flex-col justify-center h-full overflow-hidden lg:overflow-visible">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-md mx-auto text-center xl:ml-[100px] 2xl:ml-[110px] relative z-20">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#00C853]/20 mb-4 sm:mb-5 md:mb-6">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#00C853]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
            Stay Updated with <span className="text-[#00C853]">Tazty</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-7 md:mb-8 max-w-xl mx-auto px-2">
            Subscribe to our newsletter for exclusive offers, new restaurant updates, and food recommendations delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto px-2">
            <div className="relative flex-1 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C853] transition-colors text-sm sm:text-base"
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <Button
              type="submit"
              disabled={status === "loading" || status === "success" || !email}
              className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-[#00C853] hover:bg-[#00A843] text-white font-semibold transition-all disabled:opacity-50 text-sm sm:text-base w-full sm:w-auto"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : status === "success" ? (
                <>
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                  Subscribed!
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-2">
            No spam, unsubscribe anytime. Read our{" "}
            <a href="#" className="text-[#00C853] hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
