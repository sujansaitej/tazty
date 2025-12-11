import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { RestaurantShowcase } from "@/components/restaurant-showcase"
import { DownloadApp } from "@/components/download-app"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
      <RestaurantShowcase />
      <DownloadApp />
      <Footer />
    </main>
  )
}
