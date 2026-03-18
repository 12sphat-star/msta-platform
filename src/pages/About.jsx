import SEO from "../components/SEO";
import Schema from "../components/Schema";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
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
        name: "What is the purpose of MSTA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The purpose of MSTA is to help people build with structure, create leverage, and protect what they are building so growth becomes more durable and intentional.",
        },
      },
      {
        "@type": "Question",
        name: "Who should use the MSTA framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The MSTA framework is useful for business owners, entrepreneurs, professionals, and families who want stronger decision-making, systems, stability, and long-term planning.",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="About MSTA"
        description="Learn about the MSTA framework and how it helps people build structure, create leverage, and protect what they are building."
        keywords="about MSTA, business framework, mindset skillset toolset assets"
        canonical="https://urmsta.com/about"
      />

      <Schema data={faqSchema} />

      <Navbar />

      <div className="bg-[#0A0F1C] text-white">
        {/* HERO */}
        <section className="min-h-[68vh] flex items-center justify-center text-center px-6 pt-28">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              MSTA Was Built
              <br />
              for People Who Intend to Build Something That Lasts.
            </motion.h1>

            <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              This is not random inspiration. This is not disconnected business
              advice. MSTA is a framework for building with structure, moving
              with intention, and creating results that can be protected,
              multiplied, and passed on.
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              What is MSTA? MSTA stands for Mindset, Skillset, Toolset, and
              Assets. It is a practical framework that helps people strengthen
              the way they think, improve the value they bring, build the right
              systems, and protect what they are creating for the long term.
            </p>
          </div>
        </section>

        {/* WHY IT EXISTS */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Why MSTA Exists
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Too many people are trying to build wealth without structure,
              grow businesses without systems, and create legacy without clear
              foundations. That is why so much effort produces so little lasting
              value. MSTA was created to fix that problem by giving people a
              sequence they can actually follow.
            </p>
          </div>
        </section>

        {/* FOUR PILLARS */}
        <section className="py-24 px-6 bg-[#0F1626]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Mindset
              </h3>
              <p className="text-gray-400">
                The internal structure of identity, discipline, purpose, and
                self-leadership.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Skillset
              </h3>
              <p className="text-gray-400">
                The mastery, expertise, and authority required to stand out in
                the marketplace.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Toolset
              </h3>
              <p className="text-gray-400">
                The infrastructure, technology, systems, and capital access that
                create leverage.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Assets
              </h3>
              <p className="text-gray-400">
                The things that hold value, protect legacy, and create long-term
                ownership and transferability.
              </p>
            </div>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Who MSTA Is For
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              MSTA is for business owners, entrepreneurs, professionals, and
              families who want more than temporary motivation. It is for people
              who want clearer direction, stronger execution, better systems,
              and protection that supports long-term growth and legacy.
            </p>
          </div>
        </section>

        {/* DIFFERENTIATOR */}
        <section className="py-24 px-6 bg-[#0F1626] border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              What Makes MSTA Different
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Most frameworks stop at motivation or money. MSTA connects the
              person, the capability, the infrastructure, and the asset. It is
              designed to help people see where they are weak, build in the
              right order, and create something strong enough to outlive a
              trend, a season, or even a generation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
              About MSTA FAQs
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
                  What is the purpose of MSTA?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  The purpose of MSTA is to help people build with structure,
                  create leverage, and protect what they are building so growth
                  becomes more durable and intentional.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  Who should use the MSTA framework?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  The MSTA framework is useful for business owners,
                  entrepreneurs, professionals, and families who want stronger
                  decision-making, systems, stability, and long-term planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSE */}
        <section className="py-24 px-6 border-t border-gray-800 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Structure Is the Difference Between Motion and Momentum.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              MSTA helps you identify what needs to be strengthened, what needs
              to be built, and what needs to be protected so your growth is not
              temporary, but durable.
            </p>

            <div className="mt-12">
              <Link
                to="/assessment"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-lg"
              >
                Start the Assessment
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}