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
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00C853]/20 mb-6">
            <Mail className="w-8 h-8 text-[#00C853]" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Updated with <span className="text-[#00C853]">Tazty</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new restaurant updates, and food recommendations delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00C853] transition-colors"
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <Button
              type="submit"
              disabled={status === "loading" || status === "success" || !email}
              className="px-8 py-4 rounded-full bg-[#00C853] hover:bg-[#00A843] text-white font-semibold transition-all disabled:opacity-50"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : status === "success" ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Subscribed!
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
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
