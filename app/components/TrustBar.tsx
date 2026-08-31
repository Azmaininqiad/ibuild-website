import Image from "next/image";

const clients = [
  { src: "/images/Trust_Bar_1.png", alt: "SABIC" },
  { src: "/images/Trust_Bar_2.png", alt: "Saudi Aramco" },
  { src: "/images/Trust_Bar_3.png", alt: "SATORP" },
];

const certs = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
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
            <div className="flex items-center gap-8">
              {clients.map((client) => (
                <div
                  key={client.alt}
                  className="relative h-10 w-24 flex items-center justify-center"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
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
            <div className="flex flex-wrap justify-center gap-2">
              {certs.map((cert) => (
                <span
                  key={cert}
                  className="bg-[#1e4d8c]/40 border border-[#1e4d8c] text-[#00a8cc] text-xs font-semibold px-3 py-1.5 rounded"
                >
                  {cert}
                </span>
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
