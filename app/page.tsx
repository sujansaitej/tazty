import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { FeaturesGrid } from "@/components/features-grid"
import ScrollVelocity from "@/components/ui/ScrollVelocity"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { DownloadApp } from "@/components/download-app"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      {/* Simplified scroll velocity - using CSS animation instead of heavy JS */}
      <div className="bg-white py-3 sm:py-4 overflow-hidden w-full">
        <div className="whitespace-nowrap animate-scroll-simple">
          <span className="inline-block text-[#004D40] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">
            Tazty Delivery • Fresh Food • Fast Service • Tazty Delivery • Fresh Food • Fast Service • Tazty Delivery • Fresh Food • Fast Service •
          </span>
        </div>
      </div>
      <Stats />
      <FeaturesGrid />
      <HowItWorks />

      <Testimonials />
      <FAQ />
      <Contact />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <DownloadApp />
        <Newsletter />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
