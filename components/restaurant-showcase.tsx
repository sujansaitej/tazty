import { Button } from "@/components/ui/button"
import { Star, Clock, MapPin } from "lucide-react"

export function RestaurantShowcase() {
  const restaurants = [
    {
      name: "Meenakshi Bhavan",
      cuisine: "South Indian • Vegetarian",
      rating: 4.5,
      time: "15 min",
      image: "/south-indian-dosa-idli-restaurant.jpg",
    },
    {
      name: "Amma Mess",
      cuisine: "Chettinad • Non-Veg",
      rating: 4.7,
      time: "12 min",
      image: "/chettinad-chicken-curry-restaurant.jpg",
    },
    {
      name: "Kumar Sweets",
      cuisine: "Sweets • Snacks",
      rating: 4.4,
      time: "10 min",
      image: "/indian-sweets-jalebi-ladoo.jpg",
    },
    {
      name: "Madurai Biryani House",
      cuisine: "Biryani • Mughlai",
      rating: 4.6,
      time: "18 min",
      image: "/madurai-chicken-biryani.jpg",
    },
    {
      name: "Chaat Corner",
      cuisine: "Street Food • Chaat",
      rating: 4.3,
      time: "8 min",
      image: "/indian-chaat-pani-puri-street-food.jpg",
    },
    {
      name: "Filter Coffee Club",
      cuisine: "Beverages • Snacks",
      rating: 4.8,
      time: "10 min",
      image: "/south-indian-filter-coffee.jpg",
    },
  ]

  return (
    <section id="restaurants" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold lg:text-5xl text-gray-900">
            Discover Local <span className="text-[#00C853]">Favorites</span>
          </h2>
          <p className="text-balance text-lg text-gray-600">
            From traditional South Indian cuisine to modern fusion dishes, explore Madurai's best local restaurants and
            hidden gems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-bold shadow-lg">
                  <Star className="h-4 w-4 fill-[#00C853] text-[#00C853]" />
                  <span className="text-gray-900">{restaurant.rating}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{restaurant.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{restaurant.cuisine}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">{restaurant.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <MapPin className="h-4 w-4 text-[#00C853]" />
                    <span className="font-medium">Nearby</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-[#00C853] text-[#00C853] hover:bg-[#00C853] hover:text-white bg-transparent"
          >
            View All Restaurants
          </Button>
        </div>
      </div>
    </section>
  )
}
