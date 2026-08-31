"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/images/Hero.png",
    alt: "MDB 3200A Main Distribution Board",
    caption: "Panel Board Manufacturing",
  },
  {
    src: "/images/Hero_Alt.png",
    alt: "Offshore Platform Electrical Operations",
    caption: "Offshore Field Operations",
  },
  {
    src: "/images/Service_card_3_3.png",
    alt: "Pump Control Panel with VFDs",
    caption: "Pump Control & Automation",
  },
  {
    src: "/images/Service_card_3_4.png",
    alt: "Offshore team in safety gear",
    caption: "Safety-First Execution",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e8621a]/20 border border-[#e8621a]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e8621a] animate-pulse" />
            <span className="text-[#e8621a] text-sm font-medium">Since 2013 · ISO Certified</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your Trusted Partner for{" "}
            <span className="text-[#e8621a]">Electrical Power</span>{" "}
            Solutions in Saudi Arabia
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
            From custom panel board manufacturing to MV cable termination and offshore commissioning —
            end-to-end electrical infrastructure for industrial, commercial, and utility sectors
            across the Eastern Province.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/contact"
              className="bg-[#e8621a] hover:bg-[#cf5515] text-white px-8 py-3.5 rounded font-semibold text-base transition-colors duration-200 shadow-lg"
            >
              Request a Free Quote
            </Link>
            <Link
              href="/projects"
              className="border border-white/40 hover:border-white text-white px-8 py-3.5 rounded font-semibold text-base transition-colors duration-200 backdrop-blur-sm"
            >
              View Our Projects
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 border-t border-white/20 pt-8">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Projects Delivered" },
              { value: "3", label: "ISO Certifications" },
              { value: "24h", label: "Response Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-[#e8621a]">{stat.value}</p>
                <p className="text-gray-300 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? "w-8 bg-[#e8621a]" : "w-2 bg-white/40"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide caption bottom-right */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-10 hidden sm:block">
        <span className="text-white/60 text-sm">{slides[current].caption}</span>
      </div>
    </section>
  );
}
