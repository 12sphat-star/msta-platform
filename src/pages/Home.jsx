import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CredibilityStrip from "../components/CredibilityStrip";
import MSTASection from "../components/MSTASection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-[#05070C] text-white flex items-center overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[220px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="type-hero"
            >
              Business Has Changed.
              <br />
              <span className="text-indigo-400">Structure Has Not.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="type-body type-muted mt-6 max-w-2xl"
            >
              MSTA is a structured operating system designed to help leaders
              build with clarity through Mindset, Skillset, Toolset, and Assets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              <Link to="/mindset" className="btn-primary">
                Explore the Framework
              </Link>

              <Link to="/assessment" className="btn-secondary">
                Take the Assessment
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CredibilityStrip />
      <MSTASection />
    </>
  );
}