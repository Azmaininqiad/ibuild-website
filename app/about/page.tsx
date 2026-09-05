import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | Electrical Industrial Service & Machine Maintenance | KSA",
  description:
    "Founded by Ibrahim Hossain in 2013. ISO certified electrical contractor serving SABIC, ARAMCO & SATORP. Panel manufacturing, installation & testing across Saudi Arabia.",
};

const coreValues = [
  {
    icon: "🛡️",
    title: "Safety First",
    description:
      "Every employee, client, and stakeholder deserves to return home safely. Our Loss Prevention Policy and HSEQ management system ensure zero-compromise safety across all operations — from the workshop to offshore platforms.",
  },
  {
    icon: "✅",
    title: "Quality Without Exception",
    description:
      "We maintain consistent quality standards in services, delivery, and workmanship within an independently assessed quality management system. Every panel, every termination, and every test is performed to specification.",
  },
  {
    icon: "💡",
    title: "Customer-Centric Innovation",
    description:
      "We don't sell products — we solve problems. Our in-house design team works closely with clients to develop tailored electrical solutions that improve operational efficiency and ensure long-term reliability.",
  },
  {
    icon: "🤝",
    title: "Integrity & Transparency",
    description:
      "We operate with honesty in every client interaction, project quotation, and field report. What we promise is what we deliver — on time, on budget, and to specification.",
  },
  {
    icon: "📈",
    title: "Continuous Improvement",
    description:
      "We invest in ongoing training, modern equipment, and process refinement. Our team stays current with the latest IEC standards, Schneider/ABB technologies, and industry best practices.",
  },
];

const capabilities = [
  { metric: "Founded", detail: "2013" },
  { metric: "Headquarters", detail: "Al Khobar & Dammam, Saudi Arabia" },
  { metric: "Workshop", detail: "Jubail Industrial City" },
  { metric: "Team Size", detail: "130+ specialists (iBuild Group)" },
  { metric: "Panel Manufacturing", detail: "Up to 4000A MDB / MCC / PCC" },
  { metric: "Cable Services", detail: "LV & MV (up to 33kV)" },
  { metric: "Industries Served", detail: "Oil & Gas, Petrochemical, Water, Power, Offshore" },
  { metric: "Major Clients", detail: "SABIC, SAUDI ARAMCO, SATORP, Royal Commission" },
  { metric: "Certifications", detail: "ISO 9001, ISO 14001, ISO 45001" },
  { metric: "Vendor Registrations", detail: "SABIC, SAUDI ARAMCO, SATORP" },
];

const certifications = [
  {
    src: "/images/ISO_9001.png",
    label: "ISO 9001:2015",
    sub: "Quality Management System",
    certNo: "0767.811051.0572",
    description:
      "Ensures consistent quality in industrial services, construction (civil, mechanical, electrical), and equipment rentals.",
  },
  {
    src: "/images/ISO_14001.png",
    label: "ISO 14001:2015",
    sub: "Environmental Management System",
    certNo: "0367.811052.0572",
    description:
      "Demonstrates our commitment to minimizing environmental impact across all operations.",
  },
  {
    src: "/images/ISO_45001.png",
    label: "ISO 45001:2018",
    sub: "Occupational Health & Safety",
    certNo: "0647.811053.0572",
    description:
      "Validates our incident-free workplace commitment and systematic approach to hazard management.",
  },
];

const clients = [
  { src: "/images/SABIC_Logo.png", alt: "SABIC", label: "SABIC Approved Vendor" },
  { src: "/images/Saudi-Aramco-Logo.webp", alt: "Saudi Aramco", label: "ARAMCO Approved Vendor" },
  { src: "/images/satorp-logo.webp", alt: "SATORP", label: "SATORP Vendor ID: 508462" },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Service_card_3_1.png"
            alt="iBuild workshop with MDB 3200A panel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            Built on Excellence,{" "}
            <span className="text-[#e8621a]">Powered by Experience</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Serving the Industrial, Commercial, and Utility sectors of Saudi Arabia with integrity,
            innovation, and unwavering commitment to safety since 2013.
          </p>
        </div>
      </section>

      {/* ── COMPANY STORY ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-6">
                About the Company
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  At <strong className="text-[#0a1628]">Electrical Industrial Service and Machine Maintenance</strong> — a
                  specialized division of <strong className="text-[#0a1628]">iBuild International Company for Building
                  Engineering & Contracting Ltd.</strong> — we have established ourselves as a trusted and
                  reliable name in Saudi Arabia's electrical contracting industry.
                </p>
                <p>
                  Founded and led by <strong className="text-[#0a1628]">Ibrahim Hossain</strong>, our company has grown
                  from a dedicated local service provider to a comprehensive electrical solutions partner
                  serving the Industrial, Commercial, and Utility sectors across the Kingdom.
                </p>
                <p>
                  Operating from <strong className="text-[#0a1628]">Al Khobar and Dammam</strong>, with project execution
                  capabilities throughout the Eastern Province — including Jubail Industrial City,
                  Ras Al-Khair, and the greater Dammam metropolitan area — we combine workshop
                  manufacturing excellence with skilled field execution to deliver projects that meet
                  the highest standards of safety, quality, and reliability.
                </p>
                <p>
                  With a relentless focus on quality, innovation, and customer satisfaction, we have
                  successfully completed numerous projects for leading organizations including{" "}
                  <strong className="text-[#0a1628]">SABIC, SAUDI ARAMCO, SATORP, and the Royal Commission for
                  Jubail and Yanbu</strong> — building a reputation for reliability, professionalism, and
                  technical excellence that spans over a decade.
                </p>
              </div>

              {/* Key capabilities list */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Electrical panel board design, fabrication & testing",
                  "LV and MV cable systems (up to 33kV)",
                  "Switchgear installation, commissioning & maintenance",
                  "Industrial automation, PLC programming & VFD integration",
                  "Offshore electrical operations & platform maintenance",
                  "Civil works — foundations, trenching & duct banks",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1 w-4 h-4 rounded-full bg-[#e8621a]/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e8621a]" />
                    </span>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                  <Image src="/images/Service_card_1_1.png" alt="Panel board manufacturing" fill className="object-cover" />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
                  <Image src="/images/Service_card_1_2.png" alt="MV cable installation" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
                  <Image src="/images/Service_card_1_3.png" alt="Switchgear installation" fill className="object-cover" />
                </div>
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                  <Image src="/images/Service_card_3_4.png" alt="Offshore operations" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ────────────────────────────────── */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
              Direction & Purpose
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Our Vision & Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-[#e8621a]/20 flex items-center justify-center mb-5">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To be the <strong className="text-white">preferred provider of industrial electrical solutions</strong> in
                the Middle East — recognized for technical excellence, safety leadership, and
                customer-focused innovation.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-[#1e4d8c]/40 flex items-center justify-center mb-5">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To deliver <strong className="text-white">customized, safe, and reliable electrical infrastructure solutions</strong> that
                meet the unique needs of each client, while upholding the highest standards of
                quality, environmental responsibility, and occupational health &amp; safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628]">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-4 block">{value.icon}</span>
                <h3 className="text-[#0a1628] font-bold text-base mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
              Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628]">Founder & Managing Director</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            <div className="w-24 h-24 rounded-full bg-[#0a1628] flex items-center justify-center flex-shrink-0 text-4xl font-bold text-white">
              IH
            </div>
            <div>
              <h3 className="text-[#0a1628] font-bold text-xl mb-1">Ibrahim Hossain</h3>
              <p className="text-[#e8621a] text-sm font-semibold mb-4">Founder & Managing Director</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Ibrahim Hossain established Electrical Industrial Service & Machine Maintenance with
                a vision to provide world-class electrical contracting services to Saudi Arabia's
                growing industrial sector. Under his leadership, the company has expanded from a
                small field service team to a full-service electrical contractor with in-house
                manufacturing capabilities.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With hands-on experience in electrical systems design, installation, and
                commissioning, Ibrahim personally oversees major projects to ensure they meet the
                company's exacting standards for quality and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES TABLE ──────────────────────────────── */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
              Facts & Figures
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Capabilities at a Glance</h2>
          </div>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-xl border border-white/10">
            {capabilities.map((row, idx) => (
              <div
                key={row.metric}
                className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-4 ${
                  idx % 2 === 0 ? "bg-white/5" : "bg-white/[0.03]"
                }`}
              >
                <span className="text-gray-400 text-sm font-semibold sm:w-48 flex-shrink-0">
                  {row.metric}
                </span>
                <span className="text-white text-sm">{row.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
              Quality Assurance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628]">
              Certifications & Registrations
            </h2>
          </div>

          {/* ISO Certs */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="relative w-20 h-20 mb-5">
                  <Image src={cert.src} alt={cert.label} fill className="object-contain" />
                </div>
                <h3 className="text-[#0a1628] font-bold text-base mb-1">{cert.label}</h3>
                <p className="text-[#e8621a] text-xs font-semibold mb-1">{cert.sub}</p>
                <p className="text-gray-400 text-xs mb-3">Cert No.: {cert.certNo}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* Approved Vendors */}
          <div className="border-t border-gray-100 pt-14">
            <p className="text-center text-[#0a1628] font-bold text-lg mb-8">
              Approved Vendor Registrations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {clients.map((client) => (
                <div key={client.alt} className="flex flex-col items-center gap-3">
                  <div className="relative w-36 h-14">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{client.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HSEQ POLICY ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
                Safety Culture
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-5">
                HSEQ Policy
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                <strong>iBuild Co. is committed to an incident-free workplace — every day, everywhere.</strong>{" "}
                Our performance depends on our ability to continually improve the quality of the
                services we provide to clients, while protecting people and minimizing environmental
                impact.
              </p>
              <div className="space-y-3">
                {[
                  "Active commitment to HSEQ from all employees and subcontractors",
                  "Line managers accountable for compliance with all HSEQ policies",
                  "Open communication on HSEQ issues with all stakeholders",
                  "Formal risk assessments for all foreseeable hazards",
                  "Appropriate training and individual competency evaluation",
                  "Regular compliance audits presented to executive leadership",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#e8621a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-[#0a1628] font-bold text-base mb-3">Loss Prevention Policy</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our primary aim is to protect the life, health, and safety of all personnel while
                  eliminating damage to property and equipment. We provide safe work environments
                  through careful facility design, hazard elimination, environmental controls, PPE
                  enforcement, and continuous employee motivation in loss prevention.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-[#0a1628] font-bold text-base mb-3">Environment Protection Policy</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We recognize situations that pose risks to the environment and have developed
                  procedures to avoid them — including identification and minimization of significant
                  environmental impacts, continual improvement in environmental performance, and
                  community liaison regarding noise pollution and environmental concerns.
                </p>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/Service_card_2_4.png"
                  alt="Industrial plant site operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0a1628]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to Learn More or Start a Project?
          </h2>
          <p className="text-gray-300 text-base mb-8">
            Download our company profile or reach out directly to discuss your next electrical
            infrastructure project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#e8621a] hover:bg-[#cf5515] text-white px-8 py-3.5 rounded font-semibold transition-colors duration-200"
            >
              Contact Our Team
            </Link>
            <a
              href="https://wa.me/966551491354"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
