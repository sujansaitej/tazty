"use client"

import { Phone, Mail, MapPin, Clock, Building2, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Boxes } from "@/components/ui/background-boxes"

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
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00C853]/10 text-[#00C853] font-semibold text-sm mb-4">
            Contact Us
          </span>
          <h2 className="mb-4 text-balance text-4xl font-bold lg:text-5xl text-gray-900">
            Get in <span className="text-[#00C853]">Touch</span>
          </h2>
          <p className="text-balance text-lg text-gray-600">
            Have questions about Tazty? We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const CardContent = (
              <div className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#00C853]/30 hover:shadow-xl transition-all duration-300 h-full text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00C853]/10 text-[#00C853] transition-all duration-300 group-hover:bg-[#00C853] group-hover:text-white group-hover:scale-110">
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.subtitle}</p>
                <p className="font-semibold text-[#00C853]">{item.value}</p>
              </div>
            )

            return item.href ? (
              <a key={index} href={item.href} className="block">
                {CardContent}
              </a>
            ) : (
              <div key={index}>{CardContent}</div>
            )
          })}
        </div>

        {/* Partnership CTA */}
        <div className="w-full">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00C853] to-[#018c3a] p-8 lg:p-12 lg:px-24 min-h-[250px] flex items-center justify-center">
            {/* Background Animation */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:radial-gradient(transparent,white)]">
              <Boxes />
            </div>

            {/* Content with Overlay for visibility */}
            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8 w-full">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Ready to Partner with Us?
                </h3>
                <p className="text-green-50 text-lg max-w-xl">
                  Are you a restaurant owner in Madurai? Join our platform and reach more customers with our hyperlocal delivery service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+919952520699">
                  <Button
                    size="lg"
                    className="bg-white text-[#00C853] hover:bg-white/90 rounded-full px-6 py-6 font-semibold shadow-lg shadow-black/5"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Partnership
                  </Button>
                </a>
                <a href="mailto:partnerships@tazty.in">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white/40 hover:bg-white/10 rounded-full px-6 py-6 font-semibold backdrop-blur-sm"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Partnerships
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
