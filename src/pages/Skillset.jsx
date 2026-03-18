import SEO from "../components/SEO";
import Schema from "../components/Schema";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Skillset() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does skillset mean in MSTA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In MSTA, skillset is the ability, expertise, communication, and value creation a person brings to the marketplace. It is what helps turn potential into practical results.",
        },
      },
      {
        "@type": "Question",
        name: "Why is skillset important in business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skillset is important because growth depends on value. The stronger your competence, authority, and ability to solve problems, the stronger your position in the market becomes.",
        },
      },
      {
        "@type": "Question",
        name: "How does skillset connect to income and opportunity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skillset connects to income and opportunity because people are often paid in proportion to the value they can create, communicate, and deliver consistently.",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Skillset and Expertise Development"
        description="Explore how skillset builds authority, trust, value creation, and market confidence in business."
        keywords="skillset, expertise, authority, business skills, value creation"
        canonical="https://urmsta.com/skillset"
      />

      <Schema data={faqSchema} />

      <Navbar />

      <div className="bg-[#0A0F1C] text-white">
        <section className="min-h-[68vh] flex items-center justify-center text-center px-6 pt-28">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Skillset Turns
              <br />
              Potential Into Value.
            </motion.h1>

            <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Skillset is the part of the framework that helps you become more
              capable, more valuable, and more trusted in the marketplace.
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              What is skillset in MSTA? Skillset is the expertise, ability,
              communication, and value creation that help you solve meaningful
              problems, build authority, and create stronger opportunities.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Value Must Be Developed
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Many people want greater opportunity without greater development.
              But skillset is what helps transform raw effort into meaningful
              value. It is the difference between trying hard and becoming
              highly effective.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#0F1626] border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Expertise
              </h3>
              <p className="text-gray-400">
                Expertise increases your ability to solve real problems with
                clarity and confidence.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Communication
              </h3>
              <p className="text-gray-400">
                Communication helps people understand your value, trust your
                process, and respond to your message.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Authority
              </h3>
              <p className="text-gray-400">
                Authority grows when skill is demonstrated consistently and tied
                to real results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Skillset Builds Market Confidence
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              In MSTA, skillset is not just about knowing more. It is about
              becoming more effective, more useful, and more credible in the
              places where value is exchanged. Strong skillset creates trust,
              opens doors, and makes growth more realistic.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#0F1626] border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
              Skillset FAQs
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  What does skillset mean in MSTA?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  In MSTA, skillset is the ability, expertise, communication,
                  and value creation a person brings to the marketplace. It is
                  what helps turn potential into practical results.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  Why is skillset important in business?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Skillset is important because growth depends on value. The
                  stronger your competence, authority, and ability to solve
                  problems, the stronger your position in the market becomes.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  How does skillset connect to income and opportunity?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Skillset connects to income and opportunity because people are
                  often paid in proportion to the value they can create,
                  communicate, and deliver consistently.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-gray-800 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Stronger Skills Create Stronger Opportunities.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Skillset helps transform effort into value and value into trust,
              opportunity, and growth.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                to="/assessment"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-lg"
              >
                Take the MSTA Assessment
              </Link>

              <Link
                to="/book"
                className="inline-block px-8 py-4 border border-gray-700 hover:border-gray-500 transition rounded-lg text-white"
              >
                Schedule a Direct Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}