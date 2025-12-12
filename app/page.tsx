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
      <div className="bg-white py-4 overflow-hidden w-full">
        <ScrollVelocity
          texts={['Tazty Delivery •', 'Fresh Food •', 'Fast Service •']}
          velocity={50}
          numCopies={20}
          className="text-[#004D40] text-4xl font-extrabold"
        />
      </div>
      <Stats />
      <FeaturesGrid />
      <HowItWorks />

      <Testimonials />
      <FAQ />
      <Contact />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <DownloadApp />
        <Newsletter />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
