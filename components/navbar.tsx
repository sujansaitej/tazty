"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Store } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Restaurants", href: "#restaurants" },
    { name: "Download", href: "#download" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span
              className={`text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-[#00C853]" : "text-white"
              }`}
            >
              Tazty
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-[#00C853] ${
                  isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://seller.tazty.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className={`rounded-full font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "border-[#00C853] text-[#00C853] hover:bg-[#00C853] hover:text-white"
                    : "border-white/50 text-white bg-white/10 hover:bg-white/20"
                }`}
              >
                <Store className="w-4 h-4 mr-2" />
                Partner With Us
              </Button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`rounded-full font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-[#00C853] hover:bg-[#00A843] text-white"
                    : "bg-white text-[#00C853] hover:bg-white/90"
                }`}
              >
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`rounded-2xl p-6 ${isScrolled ? "bg-gray-50" : "bg-white/10 backdrop-blur-md"}`}>
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium py-2 transition-colors ${
                    isScrolled ? "text-gray-700 hover:text-[#00C853]" : "text-white hover:text-[#00FF6A]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href="https://seller.tazty.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full rounded-full font-semibold border-[#00C853] text-[#00C853] hover:bg-[#00C853] hover:text-white"
                >
                  <Store className="w-4 h-4 mr-2" />
                  Partner With Us
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full rounded-full font-semibold bg-[#00C853] hover:bg-[#00A843] text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
