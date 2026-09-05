import Image from "next/image";

const clients = [
  { src: "/images/SABIC_Logo.png", alt: "SABIC" },
  { src: "/images/Saudi-Aramco-Logo.webp", alt: "Saudi Aramco" },
  { src: "/images/satorp-logo.webp", alt: "SATORP" },
];

const certs = [
  { src: "/images/ISO_9001.png", label: "ISO 9001:2015" },
  { src: "/images/ISO_14001.png", label: "ISO 14001:2015" },
  { src: "/images/ISO_45001.png", label: "ISO 45001:2018" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#0d2045] border-y border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Trusted by */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-gray-400 text-sm font-medium whitespace-nowrap uppercase tracking-widest">
              Trusted by
            </p>
            <div className="flex items-center gap-4">
              {clients.map((client) => (
                <div
                  key={client.alt}
                  className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2.5 flex items-center justify-center h-14 w-32"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-white/20" />

          {/* Certifications */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest whitespace-nowrap">
              Certified Quality
            </p>
            <div className="flex items-center gap-5">
              {certs.map((cert) => (
                <div key={cert.label} className="flex flex-col items-center gap-1">
                  <div className="relative w-10 h-10">
                    <Image
                      src={cert.src}
                      alt={cert.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[#00a8cc] text-[10px] font-semibold text-center leading-tight">
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-white/20" />

          {/* Experience */}
          <div className="text-center lg:text-right">
            <p className="text-white font-bold text-lg">10+ Years</p>
            <p className="text-gray-400 text-sm">Serving the Kingdom · Since 2013</p>
          </div>
        </div>
      </div>
    </section>
  );
}
