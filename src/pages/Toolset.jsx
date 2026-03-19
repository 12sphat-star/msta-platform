import SEO from "../components/SEO";
import Schema from "../components/Schema";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Toolset() {
    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does toolset mean in MSTA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In MSTA, toolset means the systems, software, automation, websites, AI tools, and infrastructure that help a business operate more efficiently and grow with leverage."
        }
      },
      {
        "@type": "Question",
        name: "Why is toolset important for business growth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toolset is important because growth becomes harder to sustain when everything depends on manual effort. The right systems improve speed, consistency, visibility, and follow-up."
        }
      },
      {
        "@type": "Question",
        name: "What is included in a strong business toolset?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A strong business toolset can include a smart website, CRM, calendar booking, automation, AI voice and chat, follow-up workflows, and access to capital strategies that support growth."
        }
      }
    ]
  };
  return (
    <>
      <SEO
        title="Toolset Systems AI and Business Infrastructure"
        description="Discover how websites, automation, AI, CRM systems, and digital infrastructure help businesses grow with leverage."
        keywords="toolset, AI automation, CRM, websites, digital infrastructure, business systems"
        canonical="https://yourdomain.com/toolset"
      />
<Schema data={faqSchema} />
      <Navbar />

      <div className="bg-[#0A0F1C] text-white">
        {/* HERO */}
        <section className="min-h-[70vh] flex items-center justify-center text-center px-6 pt-28">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Structure Becomes
              <br />
              Leverage Through Toolset.
            </motion.h1>

            <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Toolset is the practical infrastructure of execution. It is where
              websites, automation, client management, AI systems, and capital
              access work together to make growth more efficient, more
              consistent, and more scalable.
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              What is toolset in MSTA? Toolset is the systems layer of the MSTA
              framework. It includes the digital tools, automation, website
              structure, CRM systems, AI support, and capital access strategies
              that help a business operate with more leverage and less friction.
            </p>
          </div>
        </section>

        {/* POSITIONING */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Systems Replace Strain
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Most businesses operate on effort, memory, and reaction.
              Structured businesses operate on systems. If your growth depends
              on manually answering every call, remembering every follow-up,
              chasing every lead, and holding the operation together in your
              head, then you do not have infrastructure yet. You have workload.
            </p>
          </div>
        </section>

        {/* DIGITAL INFRASTRUCTURE */}
        <section className="py-24 px-6 bg-[#0F1626] border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Digital Infrastructure
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Your website is no longer just a brochure. It is your digital
                front door, your authority layer, your lead capture system, and
                your online business sign. A smart website should not just look
                good. It should help you get found, build trust, and move people
                to action.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 p-8">
              <ul className="space-y-3 text-gray-300">
                <li>• Smart websites built for conversion</li>
                <li>• SEO for traditional search visibility</li>
                <li>• AEO for answer-based discovery</li>
                <li>• GEO for AI and generative search positioning</li>
                <li>• Forms, calendars, and lead capture integration</li>
                <li>• Automated triggers tied to site activity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI INFRASTRUCTURE */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                AI & Automation Infrastructure
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Speed creates trust. In the modern market, delayed response
                often means lost opportunity. AI and automation help businesses
                stay responsive, present, and organized without requiring the
                owner to manually carry every process alone.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 p-8">
              <ul className="space-y-3 text-gray-300">
                <li>• AI voice answering inbound and outboundcalls</li>
                <li>• AI chat support and lead response</li>
                <li>• Automated follow-up sequences</li>
                <li>• Missed-call text back and re-engagement</li>
                <li>• Review request automation</li>
                <li>• Lead nurturing and reactivation campaigns</li>
                <li>• Social and message response support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CLIENT MANAGEMENT */}
        <section className="py-24 px-6 bg-[#0F1626] border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Client Management Infrastructure
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Client management is more than storing names and numbers. It is
                the structure that helps track conversations, appointments,
                opportunities, follow-up, retention, and the full customer
                journey from first contact to long-term relationship.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 p-8">
              <ul className="space-y-3 text-gray-300">
                <li>• Contact and lead organization</li>
                <li>• Pipeline and opportunity tracking</li>
                <li>• Calendar booking and appointment reminders</li>
                <li>• Two-way text and email communication</li>
                <li>• Workflow automation for follow-up</li>
                <li>• Conversation history and team visibility</li>
                <li>• Client onboarding and nurture sequences</li>
                <li>• Retention, referral, and reactivation systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OPERATIONS */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Operational Infrastructure
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Operational structure helps your business move with less
                friction. It creates visibility across the pipeline, improves
                consistency, reduces dropped leads, and turns scattered effort
                into repeatable execution.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 p-8">
              <ul className="space-y-3 text-gray-300">
                <li>• Pipeline stage management</li>
                <li>• Task assignment and internal accountability</li>
                <li>• Client journey automation</li>
                <li>• Retention and follow-up systems</li>
                <li>• Referral and re-engagement triggers</li>
                <li>• Performance visibility across the process</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CAPITAL */}
        <section className="py-24 px-6 bg-[#0F1626] border-t border-gray-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Capital Infrastructure
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Growth often stalls not because vision is missing, but because
                structure and capital are not aligned. A strong toolset includes
                access to funding strategies that support expansion,
                acquisition, cash flow, and long-term positioning.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 p-8">
              <ul className="space-y-3 text-gray-300">
                <li>• Commercial real estate financing</li>
                <li>• Mixed-use and investment property funding</li>
                <li>• SBA structuring support</li>
                <li>• Working capital solutions</li>
                <li>• DSCR and fix-and-flip strategies</li>
                <li>• Business expansion capital</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
              Toolset FAQs
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  What does toolset mean in MSTA?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  In MSTA, toolset means the systems, software, automation,
                  websites, AI tools, and infrastructure that help a business
                  operate more efficiently and grow with leverage.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  Why is toolset important for business growth?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Toolset is important because growth becomes harder to sustain
                  when everything depends on manual effort. The right systems
                  improve speed, consistency, visibility, and follow-up.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  What is included in a strong business toolset?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  A strong business toolset can include a smart website, CRM,
                  calendar booking, automation, AI voice and chat, follow-up
                  workflows, and access to capital strategies that support
                  growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSE */}
        <section className="py-24 px-6 border-t border-gray-800 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Toolset Turns Movement Into Momentum.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Some businesses need a smarter website. Some need AI and
              automation. Some need stronger client management and follow-up
              systems. Some need capital access. Many need all of it aligned
              under one structure so growth becomes more organized, more
              visible, and more scalable.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link
                to="/assessment"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-lg"
              >
                Assess My Infrastructure
              </Link>

              <Link
                to="/book"
                className="inline-block px-8 py-4 border border-gray-700 hover:border-gray-500 transition rounded-lg text-white"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}