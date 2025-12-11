import { MapPin, Zap, Heart, CheckCircle, Globe } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: MapPin,
      title: "Hyperlocal Focus",
      description: "Discover amazing restaurants and food joints in your immediate neighborhood.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "15-minute average delivery time from local restaurants to your doorstep.",
    },
    {
      icon: Heart,
      title: "Support Local",
      description: "Every order directly supports local restaurant owners and the Madurai food culture.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Curated restaurants with verified quality and hygiene standards.",
    },
    {
      icon: Globe,
      title: "Built on ONDC",
      description: "Powered by ONDC — an open, interoperable network based on the Beckn protocol.",
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold lg:text-5xl text-gray-900">
            Why Choose <span className="text-[#00C853]">Tazty</span>?
          </h2>
          <p className="text-balance text-lg text-gray-600">
            We're building more than just a food delivery app - we're creating a platform that celebrates and supports
            Madurai's rich food culture.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#00C853]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00C853]/10 text-[#00C853] transition-all duration-300 group-hover:bg-[#00C853] group-hover:text-white group-hover:scale-110">
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
