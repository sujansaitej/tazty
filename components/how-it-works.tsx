import { Smartphone, Search, ShoppingCart, Truck } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      title: "Download App",
      description: "Get the Tazty app from Play Store and create your account in seconds.",
      step: "01",
    },
    {
      icon: Search,
      title: "Choose Restaurant",
      description: "Browse local restaurants, explore menus, and find your favorite dishes.",
      step: "02",
    },
    {
      icon: ShoppingCart,
      title: "Place Order",
      description: "Add items to cart, customize your order, and checkout securely.",
      step: "03",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Track your order in real-time and enjoy hot, fresh food at your doorstep.",
      step: "04",
    },
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 sm:mb-12 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-3 sm:mb-4 text-balance text-2xl sm:text-3xl md:text-4xl font-bold lg:text-5xl">
            How <span className="text-[#00C853]">Tazty</span> Works
          </h2>
          <p className="text-balance text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Four simple steps to satisfy your cravings with the best local food in Madurai.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                {/* Step number */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#00C853]/10 flex items-center justify-center">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#00C853]">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="mt-10 sm:mt-12 mb-4 sm:mb-6 flex justify-center">
                  <div className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-[#00C853] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">{step.description}</p>
              </div>

              {/* Connecting line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 sm:top-16 left-[calc(50%+32px)] sm:left-[calc(50%+36px)] md:left-[calc(50%+40px)] w-[calc(100%-64px)] sm:w-[calc(100%-72px)] md:w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-[#00C853] to-[#00C853]/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
