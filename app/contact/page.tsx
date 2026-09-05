import Image from "next/image";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Electrical Industrial Service & Machine Maintenance",
  description:
    "Get in touch with our team for electrical panel manufacturing, installation, testing & commissioning inquiries. Based in Al Khobar & Dammam, Saudi Arabia.",
};

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
    border: "border-[#25D366]/20 hover:border-[#25D366]/50",
    label: "WhatsApp Business",
    subtitle: "Click to chat directly with our project team",
    details: [
      {
        href: "https://wa.me/966551491354",
        text: "+966 55 149 1354",
        external: true,
        highlight: true,
      },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "text-[#e8621a]",
    bg: "bg-[#e8621a]/10",
    border: "border-[#e8621a]/20 hover:border-[#e8621a]/40",
    label: "Email Directly",
    subtitle: "For specific inquiries",
    details: [
      {
        label: "General Inquiries",
        href: "mailto:globalengineeringsalessupport@gmail.com",
        text: "globalengineeringsalessupport@gmail.com",
        external: false,
        highlight: false,
      },
      {
        label: "Sales & Quotations",
        href: "mailto:ibrahimhossain04@gmail.com",
        text: "ibrahimhossain04@gmail.com",
        external: false,
        highlight: false,
      },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "text-[#00a8cc]",
    bg: "bg-[#00a8cc]/10",
    border: "border-[#00a8cc]/20 hover:border-[#00a8cc]/40",
    label: "Call Us",
    subtitle: "Speak directly with our team",
    details: [
      {
        label: "Office (Sun–Thu, 8:00 AM – 5:00 PM)",
        href: "tel:+966133635459",
        text: "+966 13 363 5459",
        external: false,
        highlight: false,
      },
      {
        label: "Mobile (24/7 for urgent matters)",
        href: "tel:+966551491354",
        text: "+966 55 149 1354",
        external: false,
        highlight: false,
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section className="relative min-h-[360px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Service_card_1_3.png"
            alt="Electrical team at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
            Reach Out
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-xl leading-tight">
            Let&apos;s Talk About Your{" "}
            <span className="text-[#e8621a]">Next Project</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Our team responds within 24 hours. Whether it&apos;s a quote, a technical question, or a
            general inquiry — we&apos;re here.
          </p>
        </div>
      </section>

      {/* ── CONTACT METHODS ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
              Contact Methods
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628]">
              Choose How to Reach Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className={`rounded-2xl border p-8 transition-all duration-300 ${method.border}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${method.bg} flex items-center justify-center mb-5 ${method.color}`}>
                  {method.icon}
                </div>

                <h3 className="text-[#0a1628] font-bold text-lg mb-1">{method.label}</h3>
                <p className="text-gray-400 text-sm mb-5">{method.subtitle}</p>

                <div className="space-y-3">
                  {method.details.map((detail) => (
                    <div key={detail.text}>
                      {"label" in detail && detail.label && (
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                          {detail.label}
                        </p>
                      )}
                      <a
                        href={detail.href}
                        {...(detail.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={`text-sm font-semibold transition-colors break-all ${
                          detail.highlight
                            ? `${method.color} hover:opacity-80`
                            : "text-[#0a1628] hover:text-[#e8621a]"
                        }`}
                      >
                        {detail.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE INFO + MAP PLACEHOLDER ───────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Office details */}
            <div>
              <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
                Find Us
              </p>
              <h2 className="text-3xl font-bold text-[#0a1628] mb-8">Office & Address</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0a1628]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#e8621a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0a1628] font-semibold text-sm mb-1">Head Office</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      P.O. Box 1814, Jubail City 31951<br />
                      Al Khobar & Dammam<br />
                      Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0a1628]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#e8621a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0a1628] font-semibold text-sm mb-1">Phone</p>
                    <p className="text-gray-500 text-sm">
                      <a href="tel:+966133635459" className="hover:text-[#e8621a] transition-colors">
                        +966 13 363 5459
                      </a>{" "}
                      <span className="text-gray-400">(Office)</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      <a href="tel:+966551491354" className="hover:text-[#e8621a] transition-colors">
                        +966 55 149 1354
                      </a>{" "}
                      <span className="text-gray-400">(Mobile / 24&apos;7)</span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0a1628]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#e8621a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0a1628] font-semibold text-sm mb-1">Email</p>
                    <p className="text-gray-500 text-sm">
                      <span className="text-gray-400 text-xs block mb-0.5">General Inquiries</span>
                      <a href="mailto:globalengineeringsalessupport@gmail.com" className="hover:text-[#e8621a] transition-colors break-all">
                        globalengineeringsalessupport@gmail.com
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      <span className="text-gray-400 text-xs block mb-0.5">Sales & Quotations</span>
                      <a href="mailto:ibrahimhossain04@gmail.com" className="hover:text-[#e8621a] transition-colors">
                        ibrahimhossain04@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0a1628]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#e8621a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0a1628] font-semibold text-sm mb-1">Working Hours</p>
                    <p className="text-gray-500 text-sm">
                      Sunday – Thursday: 8:00 AM – 5:00 PM
                    </p>
                    <p className="text-gray-500 text-sm">
                      Mobile available 24/7 for urgent matters
                    </p>
                  </div>
                </div>

                {/* CR */}
                <div className="bg-[#0a1628]/5 rounded-xl p-4 mt-2">
                  <p className="text-gray-500 text-xs">
                    <span className="font-semibold text-[#0a1628]">Company:</span> Electrical Industrial Service & Machine Maintenance<br />
                    <span className="font-semibold text-[#0a1628]">Parent Company:</span> iBuild International Company for Building Engineering & Contracting Ltd.<br />
                    <span className="font-semibold text-[#0a1628]">CR:</span> 2055019176 &nbsp;|&nbsp;
                    <span className="font-semibold text-[#0a1628]">VAT:</span> 301154276200003
                  </p>
                </div>
              </div>
            </div>

            {/* Client logos + quick info */}
            <div className="space-y-6">
              {/* Approved by */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <p className="text-[#0a1628] font-bold text-sm uppercase tracking-wider mb-6">
                  Approved Vendor For
                </p>
                <div className="flex flex-wrap gap-8 items-center justify-center">
                  {[
                    { src: "/images/SABIC_Logo.png", alt: "SABIC" },
                    { src: "/images/Saudi-Aramco-Logo.webp", alt: "Saudi Aramco" },
                    { src: "/images/satorp-logo.webp", alt: "SATORP" },
                  ].map((logo) => (
                    <div key={logo.alt} className="relative w-28 h-10">
                      <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* ISO certs */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <p className="text-[#0a1628] font-bold text-sm uppercase tracking-wider mb-6">
                  ISO Certified
                </p>
                <div className="flex gap-6 items-center justify-center">
                  {[
                    { src: "/images/ISO_9001.png", label: "ISO 9001:2015" },
                    { src: "/images/ISO_14001.png", label: "ISO 14001:2015" },
                    { src: "/images/ISO_45001.png", label: "ISO 45001:2018" },
                  ].map((cert) => (
                    <div key={cert.label} className="flex flex-col items-center gap-2">
                      <div className="relative w-12 h-12">
                        <Image src={cert.src} alt={cert.label} fill className="object-contain" />
                      </div>
                      <span className="text-xs text-gray-500 text-center leading-tight">{cert.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why contact us */}
              <div className="bg-[#0a1628] rounded-2xl p-8">
                <h3 className="text-white font-bold text-base mb-4">Why Reach Out?</h3>
                <div className="space-y-2.5">
                  {[
                    "Free consultation & detailed quotation",
                    "Response within 24 hours guaranteed",
                    "10+ years serving Eastern Province industries",
                    "SABIC, Aramco & SATORP approved vendor",
                    "ISO 9001, 14001 & 45001 certified",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-[#e8621a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
