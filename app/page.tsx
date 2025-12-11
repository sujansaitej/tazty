import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { FeaturesGrid } from "@/components/features-grid"
import { HowItWorks } from "@/components/how-it-works"
import { RestaurantShowcase } from "@/components/restaurant-showcase"
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
      <Services />
      <Stats />
      <FeaturesGrid />
      <HowItWorks />
      <RestaurantShowcase />
      <Testimonials />
      <FAQ />
      <Contact />
      <DownloadApp />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
