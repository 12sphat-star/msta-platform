import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pillars = [
  {
    title: "Mindset",
    description:
      "Identity, purpose, discipline, and internal structure that drives sustainable leadership.",
    link: "/mindset",
  },
  {
    title: "Skillset",
    description:
      "Market positioning, authority development, and becoming the dominant force in your niche.",
    link: "/skillset",
  },
  {
    title: "Toolset",
    description:
      "AI systems, smart websites, capital infrastructure, and scalable automation.",
    link: "/toolset",
  },
  {
    title: "Assets",
    description:
      "Insurance strategy, trust architecture, infinite banking, and generational wealth design.",
    link: "/assets",
  },
];

export default function MSTASection() {
  return (
   <section className="relative bg-[#05070C] section-padding px-6 border-t border-gray-800 overflow-hidden">

      {/* Subtle Glow */}
      <div className="absolute -top-40 right-[-200px] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* Header Block - LEFT ALIGNED */}
        <div className="mt-20 max-w-3xl">
         <h2 className="type-section mb-6">
            The MSTA Framework
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            A structured operating system built to grow, protect, and transfer
            wealth beyond three generations.
          </p>
        </div>

        {/* Pillar Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                to={pillar.link}
                className="group block bg-[#0B0F18] border border-gray-800 p-10 rounded-2xl transition-all duration-300 hover:border-indigo-500 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-4 group-hover:text-indigo-300 transition">
                  {pillar.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 max-w-3xl">
          <h3 className="text-2xl font-semibold mb-6">
            Structure determines longevity.
          </h3>

          <p className="text-gray-400 mb-10 leading-relaxed">
            Most businesses generate income. Few generate legacy.
            MSTA is designed to do both.
          </p>

          <Link
            to="/mindset"
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg font-medium"
          >
            Begin With Mindset
          </Link>
        </div>

      </div>
    </section>
  );
}
