import Image from "next/image";

const pillars = [
  {
    icon: "🔧",
    title: "Tailored Electrical Solutions",
    description:
      "Every project is unique. We design and manufacture panels and systems customized to your exact specifications, industry requirements, and operational environment. No cookie-cutter products.",
  },
  {
    icon: "⚡",
    title: "True End-to-End Delivery",
    description:
      "From workshop manufacturing through field installation, cable termination, and final commissioning — we manage the complete project lifecycle. One contractor, one point of accountability.",
  },
  {
    icon: "🛡️",
    title: "Safety & Compliance First",
    description:
      "Full adherence to Saudi safety regulations, SASO standards, and IEC 61439. Our HSEQ policy ensures incident-free workplaces across all operations — onshore and offshore.",
  },
  {
    icon: "👷",
    title: "Experienced, Licensed Teams",
    description:
      "Our electricians and technicians bring decades of combined experience to industrial plants, utility substations, and offshore platforms across the Kingdom.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0a1628]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
              Why Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Sets Us Apart in the Industry
            </h2>
            <p className="text-gray-400 text-base mb-10">
              We've built our reputation on delivering complex electrical infrastructure projects
              for Saudi Arabia's most demanding clients — SABIC, Saudi Aramco, and SATORP.
            </p>

            <div className="space-y-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#1e4d8c]/40 border border-[#1e4d8c] flex items-center justify-center text-2xl">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-52 rounded-xl overflow-hidden">
                <Image
                  src="/images/Service_card_2_3.png"
                  alt="Field operations team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-36 rounded-xl overflow-hidden">
                <Image
                  src="/images/Service_card_2_4.png"
                  alt="Industrial plant site"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-36 rounded-xl overflow-hidden">
                <Image
                  src="/images/Service_card_2_1.png"
                  alt="Pump control panel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded-xl overflow-hidden">
                <Image
                  src="/images/Service_card_2_2.png"
                  alt="Safety and compliance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "10+", label: "Years in Saudi Arabia" },
            { value: "3", label: "ISO Certifications" },
            { value: "3", label: "Approved Vendor (SABIC, Aramco, SATORP)" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-[#e8621a] mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
