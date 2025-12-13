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
      <ResizableNavbar className="fixed top-4">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 z-50">
            <NavbarButton
              as="a"
              href="https://seller.tazty.in/"
              target="_blank"
              variant="secondary"
              className="bg-[#00C853] text-white hover:bg-[#00A843] border-none flex items-center gap-2"
            >
              <Store className="w-4 h-4" />
              Partner
            </NavbarButton>
            <NavbarButton
              as="a"
              href="https://play.google.com/store/apps/details?id=in.tazty.buyer"
              target="_blank"
              variant="primary"
              className="bg-[#00C853] text-white hover:bg-[#00A843] border-none flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download App
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
                    // If it's a hash link and we're not on home page, navigate to home first
                    if (isHashLink && pathname !== "/") {
                      e.preventDefault();
                      window.location.href = `/${item.link}`;
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative text-neutral-600 dark:text-neutral-300 font-medium py-2"
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
