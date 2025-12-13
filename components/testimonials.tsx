"use client"

import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Food Enthusiast",
      image: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Tazty has completely changed how I order food in Madurai! The delivery is super fast and I love discovering local hidden gems I never knew existed.",
    },
    {
      name: "Rajesh Kumar",
      role: "Business Professional",
      image: "/placeholder-user.jpg",
      rating: 5,
      review:
        "As someone who works long hours, Tazty is a lifesaver. Fresh food from my favorite local restaurants delivered in just 15 minutes. Amazing service!",
    },
    {
      name: "Anitha Devi",
      role: "Home Chef",
      image: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Even as someone who loves cooking, sometimes I need a break. Tazty brings authentic Madurai flavors right to my doorstep. Love the variety!",
    },
    {
      name: "Karthik Rajan",
      role: "College Student",
      image: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Best food delivery app for students! Affordable prices, quick delivery, and the app is super easy to use. My go-to for late night cravings.",
    },
    {
      name: "Meera Sundaram",
      role: "Working Mom",
      image: "/placeholder-user.jpg",
      rating: 5,
      review:
        "With two kids and a busy schedule, Tazty has been a blessing. Hot, fresh food delivered fast. The kids love the variety of restaurants available!",
    },
    {
      name: "Suresh Balaji",
      role: "Restaurant Owner",
      image: "/placeholder-user.jpg",
      rating: 5,
      review:
        "Partnering with Tazty through ONDC was the best decision for my restaurant. Our orders have increased significantly and the platform is very transparent.",
    },
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#0B1120]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 sm:mb-12 md:mb-16 max-w-3xl text-center">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#00C853]/10 text-[#00C853] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            Customer Love
          </span>
          <h2 className="mb-3 sm:mb-4 text-balance text-2xl sm:text-3xl md:text-4xl font-bold lg:text-5xl text-white px-2">
            What Our <span className="text-[#00C853]">Customers</span> Say
          </h2>
          <p className="text-balance text-sm sm:text-base md:text-lg text-gray-300 px-2">
            Join thousands of happy customers who trust Tazty for their daily food cravings in Madurai.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#00C853]/30 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 text-[#00C853]/10 group-hover:text-[#00C853]/20 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">"{testimonial.review}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#00C853] to-[#00A843] flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-gray-900 truncate">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
