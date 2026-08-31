"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "The service provided was exceptional. They delivered on time and exceeded expectations, enhancing our operational efficiency significantly.",
    name: "Grace Lancaster",
    role: "Project Manager",
  },
  {
    quote:
      "Quality workmanship and thorough understanding of our needs made the whole process seamless. Highly recommended!",
    name: "Dave Romens",
    role: "Engineering Director",
  },
  {
    quote:
      "Their commitment to safety and quality was evident throughout the project. We would certainly work with them again.",
    name: "Jordan Brown",
    role: "Facility Manager",
  },
  {
    quote:
      "Reliable and professional team. Their expertise in electrical systems helped us mitigate many challenges in our plant operations.",
    name: "Lara Grace",
    role: "Operations Manager",
  },
  {
    quote:
      "They were proactive in identifying potential issues and provided effective solutions promptly. Excellent service!",
    name: "Jean Bradey",
    role: "Maintenance Supervisor",
  },
  {
    quote:
      "An outstanding team that delivered exactly what we needed with precision. Their support was invaluable!",
    name: "Steve Jones",
    role: "Plant Engineer",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#e8621a] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
            Client Feedback
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Trusted by project managers, engineers, and plant operators across Saudi Arabia's most
            demanding industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, visibleCount).map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col"
            >
              <StarRating />
              <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e4d8c] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#0a1628] font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {visibleCount < testimonials.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(testimonials.length)}
              className="border-2 border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white px-8 py-3 rounded font-semibold text-sm transition-all duration-200"
            >
              Read More Testimonials
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
