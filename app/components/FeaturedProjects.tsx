import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "MDB 3200A Main Distribution Board",
    client: "Major Industrial Facility",
    location: "Jubail Industrial City",
    scope:
      "Custom manufactured 3200A MDB with ACB incoming and multiple MCCB outgoing feeders. Full factory testing and delivery.",
    image: "/images/Service_card_3_1.png",
    tag: "Panel Manufacturing",
    tagColor: "bg-blue-600",
  },
  {
    title: "MV Cable Heat-Shrink Termination",
    client: "Utility Substation",
    location: "Dammam",
    scope:
      "Professional 3-phase MV cable termination using heat-shrink technology. Complete grounding and stress control.",
    image: "/images/Service_card_3_2.png",
    tag: "Cable Systems",
    tagColor: "bg-green-600",
  },
  {
    title: "Pump Control Panel with VFD Automation",
    client: "Water Treatment Plant",
    location: "Eastern Province",
    scope:
      "Advanced pump control system with 4x VFDs, PLC control, and full automation capability. Field commissioned.",
    image: "/images/Service_card_3_3.png",
    tag: "Specialized Panels",
    tagColor: "bg-purple-600",
  },
  {
    title: "Offshore Platform Electrical Operations",
    client: "Marine/Offshore Operator",
    location: "Arabian Gulf",
    scope:
      "Skilled electrical teams deployed on offshore platforms maintaining highest safety standards.",
    image: "/images/Service_card_3_4.png",
    tag: "Field Operations",
    tagColor: "bg-orange-600",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#e8621a] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
            Proven Results Across Saudi Arabia's Most Demanding Projects
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From Jubail industrial city to offshore platforms in the Arabian Gulf — delivered on time,
            to specification.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="relative sm:w-52 h-52 sm:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0a1628]/20 group-hover:bg-[#0a1628]/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span
                    className={`inline-block ${project.tagColor} text-white text-xs font-semibold px-2.5 py-1 rounded mb-3`}
                  >
                    {project.tag}
                  </span>
                  <h3 className="text-[#0a1628] font-bold text-base mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.scope}</p>
                </div>
                  <div className="mt-4">
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold text-gray-600">{project.client}</span> ·{" "}
                      {project.location}
                    </p>
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA removed - coming soon */}
      </div>
    </section>
  );
}
