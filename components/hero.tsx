import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Clock, Navigation, Phone, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#00C853" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🍕</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>
          🍔
        </div>
        <div className="absolute bottom-32 left-20 text-7xl opacity-20 animate-float" style={{ animationDelay: "2s" }}>
          🍜
        </div>
        <div
          className="absolute bottom-40 right-16 text-6xl opacity-20 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          🥗
        </div>
        <div className="absolute top-1/3 left-1/4 text-5xl opacity-15 animate-float" style={{ animationDelay: "0.5s" }}>
          🌮
        </div>
        <div
          className="absolute top-1/2 right-1/3 text-5xl opacity-15 animate-float"
          style={{ animationDelay: "2.5s" }}
        >
          🍱
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#00C853] font-bold text-xs">ONDC</span>
              </div>
              <span className="text-white font-medium text-sm">Powered by Govt. of India ONDC Network</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm">Launching in Madurai</span>
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <h1 className="mb-6 text-balance font-bold tracking-tight text-white drop-shadow-lg">
            <span className="block text-5xl lg:text-7xl mb-2">Hyperlocal</span>
            <span className="block text-6xl lg:text-8xl" style={{ color: "#00FF6A" }}>
              Food Delivery
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-balance text-lg leading-relaxed text-white/95 lg:text-xl font-medium drop-shadow">
            Connecting you with your favorite local restaurants and hidden gems in{" "}
            <span className="font-bold" style={{ color: "#00FF6A" }}>
              Madurai
            </span>
            . Fresh, fast, and directly from your neighborhood. Built on the{" "}
            <span className="font-bold" style={{ color: "#00FF6A" }}>
              ONDC network
            </span>{" "}
            for a smooth partner experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
              <span className="text-2xl">🍽️</span>
              <span className="text-white font-medium text-sm">Local Restaurants</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
              <Clock className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm">15-min Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
              <Navigation className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm">Hyperlocal Focus</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <a
              href="tel:+919952520699"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">+91 9952520699</span>
            </a>
            <a
              href="mailto:support@tazty.in"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium text-sm">support@tazty.in</span>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {/* Restaurant Partner Button */}
            <a
              href="https://play.google.com/store/apps/details?id=in.tazty.seller"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full bg-gray-900/90 text-white hover:bg-gray-900 font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <span className="mr-2">▶</span>
                Restaurant Partner
                <span className="ml-3 text-xs bg-[#00C853] px-2 py-1 rounded-full">Live</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>

            {/* Restaurant Partner Web Button */}
            <a
              href="https://seller.tazty.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full bg-gray-900/90 text-white hover:bg-gray-900 font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <span className="mr-2">🌐</span>
                Restaurant Partner Web
                <span className="ml-3 text-xs bg-[#00C853] px-2 py-1 rounded-full">Live</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>

            {/* Tazty App Button */}
            <a
              href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full bg-gray-900/90 text-white hover:bg-gray-900 font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <span className="mr-2">▶</span>
                Tazty App
                <span className="ml-3 text-xs bg-[#00C853] px-2 py-1 rounded-full">Live</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
