import { Utensils, ShoppingBag, Store } from "lucide-react"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: Utensils,
      title: "Food Delivery",
      subtitle: "From Restaurants",
      offer: "Wide variety",
      image: "/delicious-restaurant-food-plates.jpg",
    },
    {
      icon: ShoppingBag,
      title: "Quick Commerce",
      subtitle: "Instant Grocery",
      offer: "15-min delivery",
      image: "/fresh-grocery-vegetables-basket.jpg",
    },
    {
      icon: Store,
      title: "Dine Out",
      subtitle: "Eat out & Save",
      offer: "Best offers",
      image: "/restaurant-dining.png",
    },
  ]

  return (
    <section className="py-16 px-4 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="w-8 h-8 text-[#00C853]" strokeWidth={2.5} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-[#00C853] font-semibold text-lg mb-4">{service.offer}</p>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#00C853] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
