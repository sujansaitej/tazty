"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react"
import Link from 'next/link'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Curated list for home page
  const faqs = [
    {
      question: "What is Tazty?",
      answer: "Tazty is a food ordering and delivery app connecting customers with restaurants in Madurai and nearby areas. Note: Tazty does not cook or sell food. Restaurants prepare the food, and Tazty handles ordering and delivery."
    },
    {
      question: "How do I place an order?",
      answer: "Open the app → choose a restaurant → browse the menu → add items to cart → choose payment method → confirm order. You will receive real-time updates until delivery."
    },
    {
      question: "Why was my order not accepted?",
      answer: "Possible reasons: Item unavailable, high order volume, restaurant temporarily closed, operational issues, or delivery location out of range. If payment was taken, you will receive a full automatic refund."
    },
    {
      question: "Can I cancel my order?",
      answer: "The in-app cancellation feature will be available soon. For now, please contact Tazty support if you want to cancel an order."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery time depends on restaurant prep time, distance, traffic, weather, and delivery partner availability. You can track your order live in the app."
    },
    {
      question: "How do I track my order?",
      answer: "The app shows restaurant acceptance, preparation progress, delivery partner assignment, and live location (when available)."
    },
    {
      question: "What payment methods are supported?",
      answer: "Currently supported: UPI, Debit/Credit Cards, and Net Banking. Wallets and Cash on Delivery (COD) are not available."
    },
    {
      question: "Payment deducted but order not confirmed?",
      answer: "A refund will be automatically issued. Refund time: 2–5 working days (varies by bank). If not received after 7 days, contact support."
    },
    {
      question: "Wrong, missing, or damaged items?",
      answer: "Please call or email customer care within 2 hours of receiving your order with photos or videos showing the issue. Support will review and assist with refunds or resolutions."
    },
    {
      question: "Order marked delivered but not received?",
      answer: "This may happen due to incorrect address or delivery left with security/neighbor. Report immediately to Tazty support for investigation."
    },
    {
      question: "Are there delivery charges or extra fees?",
      answer: "Charges may include delivery charges, packaging charges, platform service fees, and GST. No surge fees are applied."
    },
    {
      question: "How do I contact Tazty support?",
      answer: "Email: support@tazty.in, Phone: +91 9952520699, or use In-app Support. Include your order number for faster help."
    }
  ]

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00C853]/10 text-[#00C853] font-semibold text-sm mb-4">
            Got Questions?
          </span>
          <h2 className="mb-4 text-balance text-4xl font-bold lg:text-5xl text-gray-900">
            Frequently Asked <span className="text-[#00C853]">Questions</span>
          </h2>
          <p className="text-balance text-lg text-gray-600">
            For more details, check our comprehensive FAQs page.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12 grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 h-fit ${openIndex === index
                ? "border-[#00C853]/30 bg-white shadow-lg"
                : "border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md"
                }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${openIndex === index ? "bg-[#00C853] text-white" : "bg-[#00C853]/10 text-[#00C853]"
                      }`}
                  >
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed pl-20 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/buyer-faqs">
            <span className="inline-flex items-center justify-center gap-2 bg-[#00C853] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00A843] transition-colors shadow-lg hover:shadow-xl cursor-pointer">
              View All FAQs
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
