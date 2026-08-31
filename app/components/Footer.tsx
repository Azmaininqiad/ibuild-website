import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients & Testimonials", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const services = [
  { label: "Panel Board Manufacturing", href: "/services/panel-board-manufacturing" },
  { label: "Cable Installation & Termination", href: "/services/cable-systems" },
  { label: "Testing & Commissioning", href: "/services/testing-field-operations" },
  { label: "Specialized Control Panels", href: "/services/specialized-panels" },
  { label: "Civil & Field Works", href: "/services/civil-field-works" },
];

const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
  "ZATCA VAT Registered",
  "SABIC Approved Vendor",
  "SAUDI ARAMCO Approved",
];

export default function Footer() {
  return (
    <footer className="bg-[#070e1a] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#e8621a] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">iB</span>
              </div>
              <span className="text-white font-bold text-sm leading-tight">
                Electrical Industrial<br />Service & MM
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              A division of iBuild International Company for Building Engineering & Contracting Ltd.
              CR: 2055019176
            </p>
            <address className="not-italic text-xs text-gray-500 space-y-1.5">
              <p>P.O. Box 1814, Jubail City 31951</p>
              <p>Kingdom of Saudi Arabia</p>
              <p className="pt-1">
                <a href="tel:+966133635459" className="hover:text-[#e8621a] transition-colors">
                  Tel: +966 13 363 5459
                </a>
              </p>
              <p>
                <a href="tel:+966551491354" className="hover:text-[#e8621a] transition-colors">
                  Mobile: +966 55 149 1354
                </a>
              </p>
              <p>
                <a href="mailto:info@ibuild.sa.com" className="hover:text-[#e8621a] transition-colors">
                  info@ibuild.sa.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#e8621a] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#e8621a]/60" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="text-sm hover:text-[#e8621a] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#e8621a]/60" />
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Certifications */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Certifications
            </h4>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-sm">
                  <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2026 Electrical Industrial Service & Machine Maintenance. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
