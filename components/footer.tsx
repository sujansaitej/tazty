import { Instagram, Twitter, Facebook, Linkedin, Youtube, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/tazty.app", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/tazty_in", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/tazty.in", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/tazty", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@tazty", label: "YouTube" },
  ]

  return (
    <footer className="border-t bg-white py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-5 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-3 sm:mb-4">
              <img src="/logo.png" alt="Tazty Logo" className="h-8 sm:h-9 md:h-10 w-auto object-contain" />
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 mb-3 sm:mb-4 max-w-sm">
              Hyperlocal food delivery connecting you with your favorite local restaurants in Madurai. Fresh, fast, and directly from your neighborhood.
            </p>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 mb-2">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C853] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Registered Address:</p>
                <span className="break-words">No.58/2, 1st Floor, VP Road Sankalpa (KM Nilayam), Madivala, Bengaluru, Karnataka - 560068</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
              <div className="pl-0 sm:pl-6">
                <p className="font-semibold text-gray-900 mb-1">Operational Address:</p>
                <span className="break-words">1st Floor, 23, Kamaraj Nagar, 4th Street, Chinna Chokkikulam, Madurai - 625002, Tamil Nadu</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-gray-100 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 w-fit">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center flex-shrink-0">
                <span className="text-[#00C853] font-bold text-[10px] sm:text-xs">ONDC</span>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-600">Powered by Govt. of India ONDC Network</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 sm:mb-5 md:mb-6 font-bold text-sm sm:text-base text-gray-900">Products & Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-center justify-between">
                <a href="https://play.google.com/store/apps/details?id=in.tazty.buyer" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C853] transition-colors">
                  Restaurant Partner App
                </a>
                <span className="text-[10px] bg-[#00C853] text-white px-1.5 py-0.5 rounded">Live</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="https://seller.tazty.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C853] transition-colors">
                  Restaurant Partner Web
                </a>
                <span className="text-[10px] bg-[#00C853] text-white px-1.5 py-0.5 rounded">Live</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="https://play.google.com/store/apps/details?id=in.tazty.seller" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C853] transition-colors">
                  Tazty App
                </a>
                <span className="text-[10px] bg-[#00C853] text-white px-1.5 py-0.5 rounded">Live</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Tazty Delivery Partner App</span>
                <span className="text-[10px] bg-yellow-500 text-white px-1.5 py-0.5 rounded">Coming Soon</span>
              </li>
              <li>
                <a href="#" className="hover:text-[#00C853] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00C853] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 sm:mb-5 md:mb-6 font-bold text-sm sm:text-base text-gray-900">Legal & Support</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
              <li>
                <Link href="/buyer-terms" className="hover:text-[#00C853] transition-colors">
                  Buyer Terms
                </Link>
              </li>
              <li>
                <Link href="/buyer-privacy" className="hover:text-[#00C853] transition-colors">
                  Buyer Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/buyer-faqs" className="hover:text-[#00C853] transition-colors">
                  Buyer FAQs
                </Link>
              </li>
              <li>
                <Link href="/partner-terms" className="hover:text-[#00C853] transition-colors">
                  Partner Terms
                </Link>
              </li>
              <li>
                <Link href="/partner-privacy" className="hover:text-[#00C853] transition-colors">
                  Partner Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="mt-4 sm:mt-5 md:mt-6">
              <h5 className="font-bold text-gray-900 text-[10px] sm:text-xs mb-1 sm:mb-2">Grievance Officer</h5>
              <p className="text-[10px] sm:text-xs text-gray-600">Tharik Ali R</p>
              <a href="mailto:support@tazty.in" className="text-[10px] sm:text-xs text-[#00C853] hover:underline break-all">support@tazty.in</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 sm:mb-5 md:mb-6 font-bold text-sm sm:text-base text-gray-900">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6">
              <li>
                <a href="tel:+919952520699" className="flex items-center gap-1.5 sm:gap-2 hover:text-[#00C853] transition-colors">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="break-all">+91 9952520699</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@tazty.in" className="flex items-center gap-1.5 sm:gap-2 hover:text-[#00C853] transition-colors">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="break-all">support@tazty.in</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <h4 className="mb-3 sm:mb-4 font-bold text-gray-900 text-xs sm:text-sm">Follow Us</h4>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#00C853] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* App Download Badges */}
        <div className="border-t border-b py-6 sm:py-7 md:py-8 mb-6 sm:mb-7 md:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
            <span className="text-gray-600 font-medium text-xs sm:text-sm">Download the app:</span>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 bg-gray-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current flex-shrink-0">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] sm:text-[10px] opacity-80">GET IT ON</div>
                  <div className="text-xs sm:text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <p className="text-center md:text-left px-2">&copy; 2025 Tazty. All rights reserved. Owned by Valar Digital Commerce Private Limited.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
            <Link href="/buyer-privacy" className="hover:text-[#00C853] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/buyer-terms" className="hover:text-[#00C853] transition-colors">
              Terms of Service
            </Link>
            <Link href="/buyer-faqs" className="hover:text-[#00C853] transition-colors">
              Refund Policy (See Terms)
            </Link>
            <a href="mailto:support@tazty.in" className="hover:text-[#00C853] transition-colors break-all">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
