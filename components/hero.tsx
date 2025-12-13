import { Button } from "@/components/ui/button"
import { ShinyButton } from "@/components/ui/shiny-button"
import GradientText from "@/components/ui/GradientText"
import { ExternalLink, MapPin, Clock, Navigation, Phone, Mail } from "lucide-react"
import Aurora from "./Aurora"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden"
      style={{ backgroundColor: "#012010" }} // Darker green as requested (was #023e26)
    >
      {/* Simplified Aurora effect - optimized for performance */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#012010", "#00C853", "#00E676"]}
          blend={0.5}
          amplitude={0.8}
          speed={0.2}
        />
      </div>
      
      {/* Simplified floating food icons - only 3 items with simple animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 text-3xl sm:text-4xl md:text-5xl opacity-15 animate-float-simple" style={{ willChange: 'transform' }}>🍕</div>
        <div className="absolute bottom-32 right-4 sm:right-20 text-4xl sm:text-5xl md:text-6xl opacity-15 animate-float-simple" style={{ animationDelay: "2s", willChange: 'transform' }}>🍜</div>
        <div className="absolute bottom-40 left-4 sm:left-20 text-3xl sm:text-4xl md:text-5xl opacity-15 animate-float-simple" style={{ animationDelay: "4s", willChange: 'transform' }}>🥗</div>
      </div>

      <div className="container relative z-10 mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 text-center overflow-hidden">
        <div className="mx-auto max-w-6xl w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center gap-2 bg-white px-3 sm:px-4 h-9 sm:h-10 rounded-full shadow-md">
              <span className="text-[#023e26] font-medium text-[10px] xs:text-xs sm:text-sm">Powered by Govt. of India ONDC Network</span>
            </div>

            <div className="flex items-center gap-2 bg-white px-3 sm:px-4 h-9 sm:h-10 rounded-full shadow-md">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#023e26]" />
              <span className="text-[#023e26] font-medium text-[10px] xs:text-xs sm:text-sm">Launching in Madurai</span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00C853] rounded-full animate-pulse" />
            </div>
          </div>

          <h1
            className="mb-6 sm:mb-8 font-extrabold tracking-tight text-white drop-shadow-xl animate-fade-in-up flex flex-col items-center px-4"
            style={{ fontFamily: "'Supercell Magic', sans-serif" }}
          >
            <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 text-white text-center">
              Madurai's Own & First
            </span>

            <GradientText
              colors={["#40ffaa", "#00ff2aff", "#40ffaa", "#bfff00ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl mb-3 sm:mb-4 leading-[1.1] pb-2 text-center px-2"
            >
              Hyperlocal Food Delivery
            </GradientText>

            <span className="text-balance text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center">
              to Your Doorstep
            </span>
          </h1>

          <p className="mx-auto mb-8 sm:mb-10 max-w-4xl text-balance text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/95 font-medium drop-shadow-md px-4">
            Connecting you with your favorite local restaurants and hidden gems in{" "}
            <span className="font-extrabold text-[#69F0AE]">
              Madurai
            </span>
            . Fresh, fast, and directly from your neighborhood. Built on the{" "}
            <span className="font-extrabold text-[#69F0AE]">
              ONDC network
            </span>{" "}
            for a smooth partner experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            <a
              href="tel:+919952520699"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-xs sm:text-sm"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">+91 9952520699</span>
            </a>
            <a
              href="mailto:support@tazty.in"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-xs sm:text-sm"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium break-all sm:break-normal">support@tazty.in</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 w-full max-w-5xl mx-auto px-2 sm:px-3 md:px-4">
            {/* 1. Restaurant Partner Button */}
            <a
              href="https://play.google.com/store/apps/details?id=in.tazty.seller"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-auto md:flex-1 lg:flex-none order-2 lg:order-1 flex-shrink-0 min-w-0"
            >
              <Button
                size="lg"
                className="w-full md:w-full lg:w-auto bg-gray-900/90 text-white hover:bg-gray-900 font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 flex items-center justify-center min-w-0"
              >
                <span className="mr-1 sm:mr-2 flex-shrink-0"></span>
                <span className="hidden md:inline truncate">Restaurant Partner</span>
                <span className="md:hidden truncate">Partner App</span>
                <span className="ml-1.5 sm:ml-2 md:ml-3 text-[10px] sm:text-xs bg-[#00C853] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap flex-shrink-0">Live</span>
                <ExternalLink className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
              </Button>
            </a>

            {/* 2. Order Now Button - Center/Primary */}
            <div className="order-1 lg:order-2 flex-shrink-0 w-full md:w-auto min-w-0">
              <ShinyButton
                href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <span className="mr-1 text-[8px] flex-shrink-0"></span>
                <span className="truncate">Order Now</span>
                <span className="ml-2 text-[8px] bg-[#00C853] text-white px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap flex-shrink-0">Live</span>
              </ShinyButton>
            </div>

            {/* 3. Restaurant Partner Web Button */}
            <a
              href="https://seller.tazty.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-auto md:flex-1 lg:flex-none order-3 flex-shrink-0 min-w-0"
            >
              <Button
                size="lg"
                className="w-full md:w-full lg:w-auto bg-gray-900/90 text-white hover:bg-gray-900 font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 flex items-center justify-center min-w-0"
              >
                <span className="mr-1 sm:mr-2 flex-shrink-0"></span>
                <span className="hidden md:inline truncate">Restaurant Partner Web</span>
                <span className="md:hidden truncate">Partner Web</span>
                <span className="ml-1.5 sm:ml-2 md:ml-3 text-[10px] sm:text-xs bg-[#00C853] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap flex-shrink-0">Live</span>
                <ExternalLink className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Divider removed as requested: straight bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10" />
    </section>
  )
}
