import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Panel Board Manufacturing",
    description:
      "MDB, MTS, ATS, MCC, PCC, and custom control panels built to IEC 61439 and SASO standards. In-house fabrication up to 4000A.",
    image: "/images/Service_card_1_1.png",
    icon: "⚙️",
    href: "/services/panel-board-manufacturing",
  },
  {
    title: "LV & MV Cable Systems",
    description:
      "Underground cable laying, trenching, duct bank construction, and professional LV/MV termination and splicing services.",
    image: "/images/Service_card_1_2.png",
    icon: "🔌",
    href: "/services/cable-systems",
  },
  {
    title: "Installation & Commissioning",
    description:
      "Switchgear, substations, VFDs, and panel installation with full pre-commissioning and energization testing.",
    image: "/images/Service_card_1_3.png",
    icon: "🔧",
    href: "/services/installation-commissioning",
  },
  {
    title: "Testing & Field Operations",
    description:
      "Fluke-certified testing, insulation resistance, primary/secondary injection testing, and offshore platform electrical maintenance.",
    image: "/images/Service_Card_1_4.png",
    icon: "📋",
    href: "/services/testing-field-operations",
  },
  {
    title: "Specialized Control Panels",
    description:
      "Pump control with VFDs, PLC automation, CEE industrial socket panels, and lighting distribution boards.",
    image: "/images/Service_card_2_1.png",
    icon: "💻",
    href: "/services/specialized-panels",
  },
  {
    title: "Civil & Field Works",
    description:
      "Foundation work, cable trench excavation, duct bank construction, and site preparation for electrical infrastructure.",
    image: "/images/Service_card_2_2.png",
    icon: "🏗️",
    href: "/services/civil-field-works",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
            Complete Electrical Solutions Under One Roof
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Design, manufacture, install, test, and commission — we manage your entire electrical
            project lifecycle from workshop to site.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                <span className="absolute top-3 left-3 text-2xl">{service.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#0a1628] font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-[#e8621a] font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white px-8 py-3 rounded font-semibold text-sm transition-all duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
