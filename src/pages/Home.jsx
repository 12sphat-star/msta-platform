import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Schema from "../components/Schema";
import Navbar from "../components/Navbar";
import CredibilityStrip from "../components/CredibilityStrip";
import MSTASection from "../components/MSTASection";
import { motion } from "framer-motion";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does MSTA stand for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MSTA stands for Mindset, Skillset, Toolset, and Assets.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the MSTA framework for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MSTA is for business owners, professionals, entrepreneurs, and families who want stronger structure, better decision-making, and long-term growth.",
        },
      },
      {
        "@type": "Question",
        name: "Why does MSTA matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MSTA matters because growth without structure often creates stress, inconsistency, and risk. MSTA helps align mindset, execution, infrastructure, and protection.",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Mindset Skillset Toolset Assets Framework"
        description="MSTA helps business owners build with clarity, grow with leverage, and protect what matters through mindset, skillset, toolset, and assets."
        keywords="MSTA, mindset, skillset, toolset, assets, business strategy, business growth, business infrastructure"
        canonical="https://urmsta.com/"
      />

      <Schema data={faqSchema} />

      <Navbar />

      <section className="relative min-h-screen bg-[#05070C] text-white flex items-center overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[220px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="type-hero"
            >
              Build With Clarity.
              <br />
              <span className="text-indigo-400">
                Grow With Leverage. Protect What Matters.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="type-body type-muted mt-6 max-w-3xl"
            >
              MSTA stands for Mindset, Skillset, Toolset, and Assets — a
              practical framework for business owners and growth-minded
              professionals who want stronger structure, better systems, and
              long-term stability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="type-body text-gray-300 mt-6 max-w-3xl"
            >
              What is MSTA? MSTA is a business and life framework that helps
              people strengthen mindset, improve skillset, build better toolsets
              through systems and technology, and create assets that support
              growth, protection, and legacy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/assessment" className="btn-primary">
                Start the Assessment
              </Link>

              <Link to="/book" className="btn-secondary">
                Schedule a Direct Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div className="rounded-xl border border-gray-800 bg-white/5 p-4">
                <h2 className="text-lg font-semibold text-white">Mindset</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Build clarity, discipline, and direction.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-white/5 p-4">
                <h2 className="text-lg font-semibold text-white">Skillset</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Strengthen value, authority, and expertise.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-white/5 p-4">
                <h2 className="text-lg font-semibold text-white">Toolset</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Use systems, websites, AI, and automation to create leverage.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-white/5 p-4">
                <h2 className="text-lg font-semibold text-white">Assets</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Protect what you build and create long-term stability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#05070C] text-white px-6 md:px-16 py-20 border-t border-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Who MSTA Is For</h2>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl leading-relaxed">
            MSTA is for business owners, entrepreneurs, professionals, and
            families who want more than motivation alone. It is designed for
            people who need structure, strategy, execution, and protection
            working together.
          </p>
        </div>
      </section>

      <section className="bg-[#0A0F1C] text-white px-6 md:px-16 py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 mb-4">
              Smart Website by 12 Stone
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Talk to the
              <span className="text-indigo-400"> MSTA AI Assistant</span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl">
              Want a faster way to explore MSTA? Tap below to speak with our AI
              assistant about smart websites, AI solutions, business structure,
              protection, or your next best step.
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              You can ask basic questions, learn more about the Toolset side of
              MSTA, and get pointed toward the Assessment or a Direct
              Consultation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+17575308825" className="btn-primary">
                Talk to the AI
              </a>

              <Link to="/assessment" className="btn-secondary">
                Start the Assessment
              </Link>

              <Link to="/book" className="btn-secondary">
                Schedule a Consultation
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              On mobile, tap to call and speak with the AI assistant directly.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111827] p-8 shadow-2xl">
            <div className="rounded-xl border border-gray-700 bg-[#0A0F1C] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
                Smart Website Demo
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                AI-Guided Visitor Experience
              </h3>

              <div className="space-y-4 text-gray-400">
                <p>• Speak directly with the AI assistant</p>
                <p>• Learn what MSTA means</p>
                <p>• Explore smart website and AI solutions</p>
                <p>• Get pointed to the right next step</p>
                <p>• See how AI can improve a modern website</p>
              </div>

              <div className="mt-8 rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-5">
                <p className="text-sm text-indigo-300 mb-2">
                  Suggested first question
                </p>
                <p className="text-white font-medium">
                  “How can MSTA help me in business or family life?”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CredibilityStrip />
      <MSTASection />

      <section className="bg-[#05070C] text-white px-6 md:px-16 py-20 border-t border-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
              <h3 className="text-xl font-semibold">
                What does MSTA stand for?
              </h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                MSTA stands for Mindset, Skillset, Toolset, and Assets.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
              <h3 className="text-xl font-semibold">
                Who is the MSTA framework for?
              </h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                MSTA is for business owners, professionals, entrepreneurs, and
                families who want stronger structure, better decision-making,
                and long-term growth.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
              <h3 className="text-xl font-semibold">
                Why does MSTA matter?
              </h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                MSTA matters because growth without structure often creates
                stress, inconsistency, and risk. MSTA helps align mindset,
                execution, infrastructure, and protection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}