import { Button } from "@/components/ui/button"
import { ShinyButton } from "@/components/ui/shiny-button"
import GradientText from "@/components/ui/GradientText"
import { ExternalLink, MapPin, Clock, Navigation, Phone, Mail } from "lucide-react"
import Aurora from "./Aurora"
import LightRays from "@/components/ui/light-rays"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#012010" }} // Darker green as requested (was #023e26)
    >
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#012010", "#00C853", "#00E676"]}
          blend={0.7}
          amplitude={1.2}
          speed={0.3}
        />
      </div>

      <div className="absolute inset-0 z-0 select-nonepointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays opacity-50"
        />
      </div>
      {/* ... float items ... */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Keeping existing animated items */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🍕</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🍔</div>
        <div className="absolute bottom-32 left-20 text-7xl opacity-20 animate-float" style={{ animationDelay: "2s" }}>🍜</div>
        <div className="absolute bottom-40 right-16 text-6xl opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>🥗</div>
        <div className="absolute top-1/3 left-1/4 text-5xl opacity-15 animate-float" style={{ animationDelay: "0.5s" }}>🌮</div>
        <div className="absolute top-1/2 right-1/3 text-5xl opacity-15 animate-float" style={{ animationDelay: "2.5s" }}>🍱</div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white px-4 h-10 rounded-full shadow-md">
              <span className="text-[#023e26] font-medium text-xs sm:text-sm">Powered by Govt. of India ONDC Network</span>
            </div>

            <div className="flex items-center gap-2 bg-white px-4 h-10 rounded-full shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#023e26]" />
              <span className="text-[#023e26] font-medium text-xs sm:text-sm">Launching in Madurai</span>
              <span className="w-2 h-2 bg-[#00C853] rounded-full animate-pulse" />
            </div>
          </div>

          <h1
            className="mb-8 font-extrabold tracking-tight text-white drop-shadow-xl animate-fade-in-up flex flex-col items-center"
            style={{ fontFamily: "'Supercell Magic', sans-serif" }}
          >
            <span className="block text-3xl sm:text-5xl lg:text-6xl mb-2 text-white">
              Madurai's Own & First
            </span>

            <GradientText
              colors={["#40ffaa", "#00ff2aff", "#40ffaa", "#bfff00ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-5xl sm:text-7xl lg:text-10xl mb-4 leading-[1.1] pb-2"
            >
              Hyperlocal Food Delivery
            </GradientText>

            <span className="text-balance text-4xl font-bold tracking-tight text-white lg:text-5xl">
              to Your Doorstep
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-4xl text-balance text-xl leading-relaxed text-white/95 lg:text-2xl font-medium drop-shadow-md">
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

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-full">
            {/* 1. Restaurant Partner Button */}
            <a
              href="https://play.google.com/store/apps/details?id=in.tazty.seller"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto order-2 lg:order-1"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-900/90 text-white hover:bg-gray-900 font-semibold text-base px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <span className="mr-2"></span>
                Restaurant Partner
                <span className="ml-3 text-xs bg-[#00C853] px-2 py-1 rounded-full">Live</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>

            {/* 2. Order Now Button - Center/Primary */}
            <div className="order-1 lg:order-2 my-2 lg:my-0">
              <ShinyButton
                href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
                target="_blank"
                rel="noopener noreferrer"
                className="scale-110 sm:scale-125 mx-4"
              >
                <span className="mr-1 text-[8px]"></span>
                Order Now
                <span className="ml-2 text-[8px] bg-[#00C853] text-white px-1.5 py-0.5 rounded-full font-bold">Live</span>

              </ShinyButton>
            </div>

            {/* 3. Restaurant Partner Web Button */}
            <a
              href="https://seller.tazty.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto order-3"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-900/90 text-white hover:bg-gray-900 font-semibold text-base px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <span className="mr-2"></span>
                Restaurant Partner Web
                <span className="ml-3 text-xs bg-[#00C853] px-2 py-1 rounded-full">Live</span>
                <ExternalLink className="ml-2 h-4 w-4" />
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
