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
    <footer className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Tazty Logo" className="w-10 h-10 rounded-full object-cover" />
              <h3 className="text-3xl font-bold text-[#00C853]">Tazty</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 mb-4 max-w-sm">
              Hyperlocal food delivery connecting you with your favorite local restaurants in Madurai. Fresh, fast, and directly from your neighborhood.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <MapPin className="w-4 h-4 text-[#00C853]" />
              <div>
                <p className="font-semibold text-gray-900">Registered Address:</p>
                <span>No.58/2, 1st Floor, VP Road Sankalpa (KM Nilayam), Madivala, Bengaluru, Karnataka - 560068</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <div className="pl-6">
                <p className="font-semibold text-gray-900">Operational Address:</p>
                <span>1st Floor, 23, Kamaraj Nagar, 4th Street, Chinna Chokkikulam, Madurai - 625002, Tamil Nadu</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-2 w-fit">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#00C853] font-bold text-xs">ONDC</span>
              </div>
              <span className="text-xs text-gray-600">Powered by Govt. of India ONDC Network</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 font-bold text-gray-900">Products & Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
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
            <h4 className="mb-6 font-bold text-gray-900">Legal & Support</h4>
            <ul className="space-y-3 text-sm text-gray-600">
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
            <div className="mt-6">
              <h5 className="font-bold text-gray-900 text-xs mb-2">Grievance Officer</h5>
              <p className="text-xs text-gray-600">Tharik Ali R</p>
              <p className="text-xs text-gray-600">Phone: +91 8073294079</p>
              <a href="mailto:support@tazty.in" className="text-xs text-[#00C853] hover:underline">support@tazty.in</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-bold text-gray-900">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600 mb-6">
              <li>
                <a href="tel:+919952520699" className="flex items-center gap-2 hover:text-[#00C853] transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 9952520699
                </a>
              </li>
              <li>
                <a href="mailto:support@tazty.in" className="flex items-center gap-2 hover:text-[#00C853] transition-colors">
                  <Mail className="w-4 h-4" />
                  support@tazty.in
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <h4 className="mb-4 font-bold text-gray-900 text-sm">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#00C853] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* App Download Badges */}
        <div className="border-t border-b py-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <span className="text-gray-600 font-medium">Download the app:</span>
            <div className="flex gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-80">GET IT ON</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; 2025 Tazty. All rights reserved. Owned by Valar Digital Commerce Private Limited.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/buyer-privacy" className="hover:text-[#00C853] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/buyer-terms" className="hover:text-[#00C853] transition-colors">
              Terms of Service
            </Link>
            <Link href="/buyer-faqs" className="hover:text-[#00C853] transition-colors">
              Refund Policy (See Terms)
            </Link>
            <a href="mailto:support@tazty.in" className="hover:text-[#00C853] transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
