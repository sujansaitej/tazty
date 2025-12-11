import { Button } from "@/components/ui/button"
import { Smartphone, Star } from "lucide-react"
import Image from "next/image"

export function DownloadApp() {
  return (
    <section id="download" className="py-12 lg:py-20 bg-gradient-to-br from-[#00C853] to-[#00A843] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white blur-3xl" />
      </div>

      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 fill-white" />
              <span className="font-semibold">Get the Best Food Delivery Experience</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Download the Tazty App Now</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Order from your favorite local restaurants in Madurai. Fast delivery, great food, amazing experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#00C853] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Download Buyer App
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 rounded-full px-8 py-6 text-lg font-semibold"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=in.tazty.seller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seller App
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 text-white/90">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Restaurants</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <div className="text-3xl font-bold">15 min</div>
                <div className="text-sm">Avg Delivery</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-[400px]">
              <Image src="/app-screen-home.png" alt="Tazty App" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
