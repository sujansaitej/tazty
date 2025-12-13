"use client";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Download, Store } from "lucide-react";

export function Navbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "How It Works", link: "#how-it-works" },
    // { name: "Restaurants", link: "#restaurants" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative w-full">
      <ResizableNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 relative z-20 flex-shrink-0 ml-auto">
            <NavbarButton
              as="a"
              href="https://seller.tazty.in/"
              target="_blank"
              variant="secondary"
              className="bg-[#00C853] text-white hover:bg-[#00A843] border-none flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2"
            >
              <Store className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Partner</span>
            </NavbarButton>
            <NavbarButton
              as="a"
              href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
              target="_blank"
              variant="primary"
              className="bg-[#00C853] text-white hover:bg-[#00A843] border-none flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Download App</span>
              <span className="sm:hidden">App</span>
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="lg:hidden">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => {
              const isHashLink = item.link.startsWith("#");
              
              return (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    
                    // If it's a hash link and we're not on home page, navigate to home first
                    if (isHashLink && pathname !== "/") {
                      window.location.href = `/${item.link}`;
                    } else if (isHashLink && pathname === "/") {
                      // Smooth scroll to section on same page
                      const target = document.querySelector(item.link);
                      if (target) {
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - 80;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                        // Update URL
                        window.history.pushState(null, '', item.link);
                      }
                    } else if (!isHashLink) {
                      // Regular page navigation
                      window.location.href = item.link;
                    }
                    
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative text-neutral-600 dark:text-neutral-300 font-medium py-2"
                  data-no-smooth-scroll="true"
                  suppressHydrationWarning
                >
                  <span className="block">{item.name}</span>
                </a>
              );
            })}
            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                as="a"
                href="https://seller.tazty.in/"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full flex items-center justify-center gap-2 border border-gray-200"
              >
                <Store className="w-4 h-4" />
                Partner With Us
              </NavbarButton>
              <NavbarButton
                as="a"
                href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-[#00C853] text-white hover:bg-[#00A843] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download App
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}
