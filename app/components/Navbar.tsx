"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628] shadow-lg"
          : "bg-gradient-to-b from-[#0a1628]/90 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-28 h-10 sm:w-32 sm:h-11">
              <Image
                src="/images/Company_logo.png"
                alt="iBuild General Contractors"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block border-l border-white/20 pl-3">
              <p className="text-white font-semibold text-xs leading-tight">Electrical Industrial</p>
              <p className="text-[#00a8cc] text-xs leading-tight">Service & Machine Maintenance</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-[#e8621a] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-[#e8621a] hover:bg-[#cf5515] text-white px-5 py-2 rounded text-sm font-semibold transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0a1628] border-t border-white/10 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-200 hover:text-[#e8621a] px-4 py-2.5 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2 pb-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-[#e8621a] hover:bg-[#cf5515] text-white px-5 py-2 rounded text-sm font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
