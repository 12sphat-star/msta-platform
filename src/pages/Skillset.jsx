import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Skillset() {
  return (
    <>
    <SEO
  title="Skillset and Expertise Development"
  description="Explore how skillset builds authority, trust, value creation, and market confidence in business."
  keywords="skillset, expertise, authority, business skills, value creation"
  canonical="https://yourdomain.com/skillset"
/>
      <Navbar />

      <div className="bg-[#0A0F1C] text-white">

        {/* HERO */}
        <section className="min-h-[70vh] flex items-center justify-center text-center px-6">
          <div className="max-w-5xl">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Mastery Makes You
              <br />
              Dangerous in the Marketplace.
            </motion.h1>

            <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Skillset is not just what you know. It is how well you execute,
              how clearly you communicate, and how powerfully you solve problems
              in a way the market cannot ignore.
            </p>

          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              The Marketplace Rewards Mastery
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Average effort gets average results. Skillset is the disciplined
              development of expertise until your work becomes undeniable.
              It is what separates the general participant from the respected
              authority. In every niche, the market eventually makes room for
              the one who solves bigger problems better than everyone else.
            </p>

          </div>
        </section>

        {/* PRACTICAL APPLICATION */}
        <section className="py-24 px-6 bg-[#0F1626]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Expertise
              </h3>
              <p className="text-gray-400">
                Deep knowledge creates confidence. When you truly know your
                craft, you stop chasing approval and start setting the standard.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Communication
              </h3>
              <p className="text-gray-400">
                Mastery is not only doing the work. It is also being able to
                explain the value, lead the conversation, and position yourself
                with clarity.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Market Authority
              </h3>
              <p className="text-gray-400">
                The goal is not just to participate in your niche. The goal is
                to become known, trusted, and difficult to replace.
              </p>
            </div>

          </div>
        </section>

        {/* AUTHORITY POSITIONING */}
        <section className="py-24 px-6 border-t border-gray-800 text-center">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Skillset Is How You Become the One They Look For.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              In a crowded market, attention is cheap but mastery is rare.
              The people who win are the ones who build real capability,
              sharpen their edge, and become the obvious choice.
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