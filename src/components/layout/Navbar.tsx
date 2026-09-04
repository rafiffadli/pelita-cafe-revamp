"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  Menu as MenuIcon, 
  X as CloseIcon, 
  PhoneCall, 
  Coffee, 
  Clock, 
  MapPin,
  UtensilsCrossed 
} from "lucide-react";

interface NavbarProps {
  onOpenMenuModal?: () => void;
}

export function Navbar({ onOpenMenuModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Branches", href: "#branches" },
    { label: "Reservation", href: "#reserve" },
  ];

  return (
    <>
      {/* Top Banner with Operating Hours & Branches */}
      <div className="bg-roast text-canvas-subtle text-xs py-2 px-4 border-b border-espresso-700/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-light">
              <MapPin className="w-3.5 h-3.5 text-caramel" />
              <strong className="font-semibold text-caramel">Sepang:</strong> Sat–Thu 9am–7pm
            </span>
            <span className="flex items-center gap-1.5 font-light">
              <MapPin className="w-3.5 h-3.5 text-caramel" />
              <strong className="font-semibold text-caramel">Putrajaya:</strong> Sat–Wed 9am–10pm
            </span>
          </div>
          <div className="flex items-center gap-4 text-canvas-subtle/80">
            <span className="flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5 text-caramel" />
              Boutique Coffee Roastery
            </span>
            <span className="text-espresso-400">•</span>
            <a
              href={`tel:${BRAND_INFO.whatsappNumber}`}
              className="hover:text-caramel transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              012-337 7807
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass-nav-scrolled" : "glass-nav"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#hero" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-36 sm:w-44 h-10 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src={BRAND_INFO.logoDark}
                  alt="Pelita Cafe"
                  fill
                  priority
                  className="object-contain"
                  sizes="176px"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-espresso/90 hover:text-terracotta relative py-2 transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-terracotta hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (onOpenMenuModal) {
                    onOpenMenuModal();
                  } else {
                    const el = document.getElementById("menu");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="gap-2 border-espresso/20 hover:border-espresso text-espresso"
              >
                <UtensilsCrossed className="w-4 h-4" />
                View Menu
              </Button>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="burgundy" size="sm" className="gap-2">
                  Order via WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-espresso hover:bg-espresso/10 focus:outline-none focus:ring-2 focus:ring-espresso"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-over / Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-espresso/10 bg-[#FFFDF9]/95 backdrop-blur-xl px-6 py-6 animate-fade-in shadow-xl">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-espresso font-serif text-lg font-medium hover:text-terracotta transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-espresso/10 my-2" />
              
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenMenuModal) {
                      onOpenMenuModal();
                    } else {
                      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full gap-2 justify-center"
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  View Menu Book
                </Button>

                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="burgundy" className="w-full justify-center">
                    Order via WhatsApp
                  </Button>
                </a>
              </div>

              <div className="pt-4 text-xs text-espresso/60 space-y-1">
                <p className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-caramel" />
                  Sepang: Sat–Thu 9am–7pm
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-caramel" />
                  Putrajaya: Sat–Wed 9am–10pm
                </p>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
