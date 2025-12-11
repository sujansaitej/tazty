export function Footer() {
  return (
    <footer className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-3xl font-bold text-[#00C853]">Tazty</h3>
            <p className="text-sm leading-relaxed text-gray-600 mb-4">
              Hyperlocal food delivery connecting you with your favorite local restaurants in Madurai.
            </p>
            <p className="text-xs text-gray-500">Powered by ONDC Network</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 font-bold text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
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
              <li>
                <a href="#" className="hover:text-[#00C853] transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00C853] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="mb-6 font-bold text-gray-900">For Partners</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="https://seller.tazty.in/" className="hover:text-[#00C853] transition-colors">
                  Partner with us
                </a>
              </li>
              <li>
                <a href="https://seller.tazty.in/" className="hover:text-[#00C853] transition-colors">
                  Restaurant Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00C853] transition-colors">
                  Delivery Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-bold text-gray-900">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="tel:+919952520699" className="hover:text-[#00C853] transition-colors">
                  +91 9952520699
                </a>
              </li>
              <li>
                <a href="mailto:support@tazty.in" className="hover:text-[#00C853] transition-colors">
                  support@tazty.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; 2025 Tazty. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#00C853] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#00C853] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
