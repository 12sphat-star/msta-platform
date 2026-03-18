import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Mindset() {
  return (
    <>
    <SEO
  title="Mindset for Business Growth"
  description="Learn how mindset shapes discipline, clarity, direction, and decision-making for stronger business and personal growth."
  keywords="mindset, business mindset, discipline, clarity, leadership mindset"
  canonical="https://yourdomain.com/mindset"
/>
      <Navbar />

      <div className="bg-[#0A0F1C] text-white">

        {/* HERO */}
        <section className="min-h-[70vh] flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Everything Scales From Identity.
            </motion.h1>

            <p className="mt-8 text-lg md:text-xl text-gray-400">
              Before revenue. Before strategy. Before structure.
              Mindset is the foundation of sustainable growth.
            </p>

          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              The Invisible Architecture of Success
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
                Most entrepreneurs attempt to scale systems without first
  stabilizing themselves. Purpose, discipline, self-leadership,
  emotional regulation, and faith-centered clarity form the internal
  operating system that determines external outcomes. When mindset is
  rooted in conviction, wisdom, and alignment, leadership becomes more
  stable, decisions become clearer, and growth becomes more sustainable.
            </p>

          </div>
        </section>

        {/* PRACTICAL APPLICATION */}
        <section className="py-24 px-6 bg-[#0F1626]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Purpose Alignment
              </h3>
              <p className="text-gray-400">
                Clarify why you build and what you are building from. Faith gives
  purpose direction, anchors conviction, and helps leadership stay
  steady under pressure.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Discipline & Structure
              </h3>
              <p className="text-gray-400">
                Daily habits compound into leadership authority, because the way you live daily eventually becomes the way you lead publicly.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Emotional Governance
              </h3>
              <p className="text-gray-400">
                Leaders who cannot govern themselves cannot govern wealth, because unmanaged emotions, poor discipline, and reactive decisions eventually weaken everything they build.
              </p>
            </div>

          </div>
        </section>

        {/* AUTHORITY POSITIONING */}
        <section className="py-24 px-6 border-t border-gray-800 text-center">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Mindset Is Not Motivation.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              It is structured self-leadership. It is clarity under pressure.
              It is the discipline to build something that outlives you.
            </p>

            <div className="mt-12">
              <Link
                to="/assessment"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-lg"
              >
                Take the MSTA Assessment
              </Link>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}