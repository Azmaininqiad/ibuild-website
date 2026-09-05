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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-4">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
          Ready to Power Your Next Project?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          Get a free consultation and detailed quotation for your electrical panel, installation,
          or commissioning requirements. Our team responds within 24 hours.
        </p>

        {/* Contact methods grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/966551491354"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-white/5 hover:bg-[#25D366]/10 border border-white/10 hover:border-[#25D366]/50 rounded-xl p-6 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">
              <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">WhatsApp Business</p>
              <p className="text-gray-400 text-xs">Click to chat directly</p>
              <p className="text-[#25D366] font-semibold text-sm mt-1">+966 55 149 1354</p>
            </div>
          </a>

          {/* Email */}
          <div className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-[#e8621a]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#e8621a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm mb-2">Email Directly</p>
              <div className="space-y-1.5">
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">General Inquiries</p>
                  <a
                    href="mailto:globalengineeringsalessupport@gmail.com"
                    className="text-[#00a8cc] text-xs hover:text-white transition-colors break-all"
                  >
                    globalengineeringsalessupport@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Sales & Quotations</p>
                  <a
                    href="mailto:ibrahimhossain04@gmail.com"
                    className="text-[#00a8cc] text-xs hover:text-white transition-colors"
                  >
                    ibrahimhossain04@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call */}
          <div className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-[#1e4d8c]/40 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#00a8cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm mb-2">Call Us</p>
              <div className="space-y-1.5">
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Office (Sun–Thu, 8am–5pm)</p>
                  <a
                    href="tel:+966133635459"
                    className="text-[#00a8cc] text-xs hover:text-white transition-colors"
                  >
                    +966 13 363 5459
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Mobile (24/7 Urgent)</p>
                  <a
                    href="tel:+966551491354"
                    className="text-[#00a8cc] text-xs hover:text-white transition-colors"
                  >
                    +966 55 149 1354
                  </a>
                </div>
              </div>
            </div>
          </div>
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
