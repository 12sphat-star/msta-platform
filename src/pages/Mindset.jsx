import SEO from "../components/SEO";
import Schema from "../components/Schema";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Mindset() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does mindset mean in MSTA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In MSTA, mindset is the internal structure of clarity, discipline, purpose, and self-leadership that shapes how a person thinks, decides, and responds under pressure.",
        },
      },
      {
        "@type": "Question",
        name: "Why is mindset important for growth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mindset is important because weak thinking often leads to inconsistent decisions, emotional reactions, and short-term behavior. Strong mindset supports clearer direction and more stable growth.",
        },
      },
      {
        "@type": "Question",
        name: "Can mindset affect business results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mindset affects business results because decisions, discipline, resilience, and leadership all influence execution, team direction, and the ability to stay consistent over time.",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Mindset for Business Growth"
        description="Learn how mindset shapes discipline, clarity, direction, and decision-making for stronger business and personal growth."
        keywords="mindset, business mindset, discipline, clarity, leadership mindset"
        canonical="https://urmsta.com/mindset"
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
              Mindset Shapes
              <br />
              Everything That Follows.
            </motion.h1>

            <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Mindset is where structure begins. Before systems, before growth,
              before assets, there is the way a person thinks, responds,
              decides, and leads.
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              What is mindset in MSTA? Mindset is the internal structure of
              clarity, discipline, purpose, identity, and self-leadership. It
              shapes the quality of your decisions and the consistency of your
              actions.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Clarity Before Complexity
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Many people try to fix external problems without first
              strengthening internal structure. But mindset affects how you see
              pressure, interpret setbacks, and respond when results are slow.
              A weak mindset creates drift. A strong mindset creates direction.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#0F1626] border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Purpose
              </h3>
              <p className="text-gray-400">
                Purpose gives meaning to effort and helps keep movement aligned
                with what truly matters.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Discipline
              </h3>
              <p className="text-gray-400">
                Discipline turns good intentions into repeated action, especially
                when emotion and pressure are high.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Self-Leadership
              </h3>
              <p className="text-gray-400">
                Self-leadership helps you respond with intention instead of
                reaction and lead yourself before trying to lead others.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Mindset Is Not Hype. It Is Structure.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Mindset is often treated like motivation, but in MSTA it means
              something deeper. It is the structure that holds your decisions
              steady, keeps your habits aligned, and strengthens your ability to
              stay clear under pressure.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#0F1626] border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
              Mindset FAQs
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  What does mindset mean in MSTA?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  In MSTA, mindset is the internal structure of clarity,
                  discipline, purpose, and self-leadership that shapes how a
                  person thinks, decides, and responds under pressure.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  Why is mindset important for growth?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Mindset is important because weak thinking often leads to
                  inconsistent decisions, emotional reactions, and short-term
                  behavior. Strong mindset supports clearer direction and more
                  stable growth.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  Can mindset affect business results?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Yes. Mindset affects business results because decisions,
                  discipline, resilience, and leadership all influence
                  execution, team direction, and long-term consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-gray-800 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Strong Thinking Creates Stronger Structure.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              When mindset is weak, everything downstream becomes harder. When
              mindset is strong, skillset, toolset, and assets have a better
              foundation to grow on.
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