"use client"

import { Phone, Mail, MapPin, Clock, Building2, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/glowing-background-stars-card"
import { motion } from "framer-motion"

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Speak directly with our team",
      value: "+91 9952520699",
      href: "tel:+919952520699",
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Send us a message anytime",
      value: "support@tazty.in",
      href: "mailto:support@tazty.in",
    },
    {
      icon: MapPin,
      title: "Our Location",
      subtitle: "Serving Madurai",
      value: "Madurai, Tamil Nadu",
      href: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      subtitle: "When we're available",
      value: "Mon - Sun: 9 AM - 6 PM",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 sm:mb-12 md:mb-16 max-w-3xl text-center">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#00C853]/10 text-[#00C853] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            Contact Us
          </span>
          <h2 className="mb-3 sm:mb-4 text-balance text-2xl sm:text-3xl md:text-4xl font-bold lg:text-5xl text-gray-900 px-2">
            Get in <span className="text-[#00C853]">Touch</span>
          </h2>
          <p className="text-balance text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Have questions about Tazty? We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-16 max-w-sm sm:max-w-2xl lg:max-w-none mx-auto sm:mx-auto lg:mx-0">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const CardContent = (
              <div className="w-full sm:w-full">
                <GlowingStarsBackgroundCard className="h-[280px] sm:h-[280px] md:h-[300px] lg:h-[300px] xl:h-[320px] w-full transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00C853]/20 cursor-pointer">
                  <GlowingStarsTitle className="text-lg sm:text-xl transition-colors duration-300 mb-2 sm:mb-3" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility' }}>{item.title}</GlowingStarsTitle>
                  <div className="flex justify-between items-end mt-auto gap-3 sm:gap-4">
                    <div className="flex flex-col gap-1.5 sm:gap-2 min-w-0 flex-1 pr-2 sm:pr-3">
                      <GlowingStarsDescription className="text-xs sm:text-sm text-gray-300 transition-colors duration-300" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility' }}>
                        {item.subtitle}
                      </GlowingStarsDescription>
                      <p className="font-bold text-[#00C853] text-xs sm:text-sm md:text-base break-words transition-all duration-300 group-hover:text-[#00E676] group-hover:scale-[1.02]" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility' }}>
                        {item.value}
                      </p>
                    </div>
                    <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 flex-shrink-0 rounded-full bg-white/10 flex items-center justify-center border border-white/20 transition-all duration-500 ease-out group-hover:bg-white/20 group-hover:scale-110 group-hover:border-[#00C853]/50 group-hover:shadow-lg group-hover:shadow-[#00C853]/30">
                      <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 text-white transition-all duration-500 ease-out group-hover:text-[#00C853] group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                  </div>
                </GlowingStarsBackgroundCard>
              </div>
            )

            return item.href ? (
              <motion.a
                key={index}
                href={item.href}
                className="block h-full group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="transform transition-transform duration-300 ease-out hover:-translate-y-1">
                  {CardContent}
                </div>
              </motion.a>
            ) : (
              <motion.div
                key={index}
                className="h-full group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="transform transition-transform duration-300 ease-out hover:-translate-y-1">
                  {CardContent}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Partnership CTA */}
        <div className="w-full">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#00C853] to-[#018c3a] p-6 sm:p-8 md:p-10 lg:p-12 lg:px-12 xl:px-16 2xl:px-24 min-h-[200px] sm:min-h-[230px] md:min-h-[250px] flex items-center justify-center">
            {/* Disabled Boxes animation for better performance - using simple gradient overlay instead */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-gradient-to-br from-[#00C853]/20 to-[#018c3a]/20 opacity-50" />

            {/* Content with Overlay for visibility */}
            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
              <div className="flex-shrink-0 order-1 lg:order-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <Handshake className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left px-2 order-2 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                  Ready to Partner with Us?
                </h3>
                <p className="text-green-50 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                  Are you a restaurant owner in Madurai? Join our platform and reach more customers with our hyperlocal delivery service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto lg:flex-shrink-0 order-3 lg:order-3 lg:min-w-0">
                <a href="tel:+919952520699" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-[#00C853] hover:bg-white/90 rounded-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 font-semibold shadow-lg shadow-black/5 text-xs sm:text-sm md:text-base flex items-center justify-center"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="hidden sm:inline">Call for Partnership</span>
                    <span className="sm:hidden">Call Us</span>
                  </Button>
                </a>
                <a href="mailto:partnerships@tazty.in" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent text-white border-white/40 hover:bg-white/10 rounded-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 font-semibold backdrop-blur-sm text-xs sm:text-sm md:text-base flex items-center justify-center"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="hidden sm:inline">Email Partnerships</span>
                    <span className="sm:hidden">Email Us</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
