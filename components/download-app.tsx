import { Button } from "@/components/ui/button"
import { Smartphone, Star } from "lucide-react"
import Image from "next/image"

export function DownloadApp() {
  return (
    <section id="download" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#00C853] to-[#00A843] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-10 left-4 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-4 sm:right-10 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-white blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col justify-center h-full">
        <div className="flex flex-col items-center text-center max-w-lg mx-auto lg:mr-48 xl:mr-64 relative">
          {/* Left content (Text) */}
          <div className="text-white w-full">
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              <span className="font-semibold text-xs sm:text-sm md:text-base">Get the Best Food Delivery Experience</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-balance px-2">Download the Tazty App Now</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 leading-relaxed px-2">
              Order from your favorite local restaurants in Madurai. Fast delivery, great food, amazing experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8 justify-center w-full px-2">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#00C853] hover:bg-white/90 rounded-full px-6 sm:px-7 md:px-8 py-5 sm:py-5.5 md:py-6 text-sm sm:text-base md:text-lg font-semibold shadow-xl w-full sm:w-auto"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                  Download Tazty App
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 rounded-full px-6 sm:px-7 md:px-8 py-5 sm:py-5.5 md:py-6 text-sm sm:text-base md:text-lg font-semibold w-full sm:w-auto"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=in.tazty.seller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Restaurant Partner App
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-white/90 justify-center flex-wrap px-2">
              <div>
                <div className="text-2xl sm:text-2.5xl md:text-3xl font-bold">500+</div>
                <div className="text-xs sm:text-sm">Restaurants</div>
              </div>
              <div className="w-px h-8 sm:h-10 md:h-12 bg-white/30" />
              <div>
                <div className="text-2xl sm:text-2.5xl md:text-3xl font-bold">15 min</div>
                <div className="text-xs sm:text-sm">Avg Delivery</div>
              </div>
              <div className="w-px h-8 sm:h-10 md:h-12 bg-white/30" />
              <div>
                <div className="text-2xl sm:text-2.5xl md:text-3xl font-bold">4.8★</div>
                <div className="text-xs sm:text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Image at the Edge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] lg:translate-x-1/2 hidden lg:block z-50 pointer-events-none overflow-hidden">
          <div className="relative w-[150px] lg:w-[180px] h-[300px] lg:h-[360px] drop-shadow-2xl">
            <Image src="/app-screen-home.png" alt="Tazty App" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
