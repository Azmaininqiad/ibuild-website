import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d2045]">
        {/* Circuit pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M10 10 H50 V50 H10 Z M20 10 V5 M40 10 V5 M50 20 H55 M50 40 H55 M10 20 H5 M10 40 H5 M20 50 V55 M40 50 V55"
                stroke="#00a8cc"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="20" cy="10" r="2" fill="#00a8cc" />
              <circle cx="40" cy="10" r="2" fill="#00a8cc" />
              <circle cx="50" cy="20" r="2" fill="#00a8cc" />
              <circle cx="50" cy="40" r="2" fill="#00a8cc" />
              <circle cx="10" cy="20" r="2" fill="#00a8cc" />
              <circle cx="10" cy="40" r="2" fill="#00a8cc" />
              <circle cx="20" cy="50" r="2" fill="#00a8cc" />
              <circle cx="40" cy="50" r="2" fill="#00a8cc" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e8621a]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-4">
          Ready to Start?
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
          Ready to Power Your Next Project?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Get a free consultation and detailed quotation for your electrical panel, installation,
          or commissioning requirements. Our team responds within 24 hours.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#e8621a] hover:bg-[#cf5515] text-white px-10 py-4 rounded font-bold text-base transition-colors duration-200 shadow-lg shadow-[#e8621a]/20"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+966551491354"
            className="border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded font-bold text-base transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call +966 55 149 1354
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free Consultation
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            24-Hour Response
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            ISO 9001 Certified
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            SABIC Approved Vendor
          </span>
        </div>
      </div>
    </section>
  );
}
