import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const trustDocuments = [
  "Summary of Trust",
  "Revocable Living Trust",
  "Certification of Trust",
  "Assignment of Property",
  "Pour-Over Will",
  "Funding Guide",
  "Financial Power of Attorney",
  "HIPAA Release",
  "Medical Power of Attorney",
  "Healthcare Directive",
  "Remembrance & Memorandum",
];

export default function Assets() {
  return (
    <>
      <Navbar />

      <div className="bg-[#0A0F1C] text-white">
        {/* HERO */}
        <section className="min-h-[72vh] flex items-center justify-center text-center px-6">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Assets Are Not Just
              <br />
              What You Own.
            </motion.h1>

            <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              In MSTA, assets are the structures of value you protect, control,
              grow, and eventually transfer. Real assets are built with strategy
              so they can serve you while you are living and continue working
              after you are gone.
            </p>
          </div>
        </section>

        {/* INSURANCE FIRST */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Protection Should Work While You’re Living
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Insurance should not be viewed as something that only matters at
              death. Properly structured coverage can help protect income,
              preserve options, support families during crisis, and create
              access to benefits while life is still happening. That includes
              living benefits, not just a death benefit.
            </p>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              When positioned correctly, life insurance can become part of a
              broader protection strategy that supports stability, liquidity,
              and long-term planning.
            </p>
          </div>
        </section>

        {/* INSURANCE CARDS */}
        <section className="py-24 px-6 bg-[#0F1626]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Living Benefits
              </h3>
              <p className="text-gray-400">
                The right policy can help create access during critical,
                chronic, or terminal illness, making protection useful before
                the final chapter.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Family Protection
              </h3>
              <p className="text-gray-400">
                Insurance can protect the people who depend on you by helping
                preserve income, stability, and decision-making power when life
                takes an unexpected turn.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Financial Flexibility
              </h3>
              <p className="text-gray-400">
                The right protection strategy can strengthen a family’s ability
                to respond, recover, and continue building without starting over
                after disruption.
              </p>
            </div>
          </div>
        </section>

        {/* HEALTH / ACA */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Health Coverage Is Part of Asset Protection
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Many people separate health insurance from wealth strategy when
              they should not. One major medical event can disrupt cash flow,
              force debt, delay growth, and weaken a family’s financial
              position. The right health coverage helps reduce that exposure.
            </p>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              For individuals, families, and self-employed business owners,
             the right health coverage strategy is not one-size-fits-all.
             ACA may be a fit for some, while others may benefit more from private 
             or alternative options designed around affordability and and aligned with current needs.
            </p>
          </div>
        </section>

        {/* TRUST STRUCTURE */}
        <section className="py-24 px-6 bg-[#0F1626] border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                Legal Structure Protects What Insurance Starts
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Insurance creates protection. Trust structure creates order,
                control, and continuity. A properly built trust package helps
                families organize decision-making, reduce confusion, avoid
                preventable delays, and create a stronger foundation for wealth
                transfer.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-5 max-w-5xl mx-auto">
              {trustDocuments.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-300 border-b border-gray-800/70 pb-3"
                >
                  <span className="text-green-400 text-lg">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADVANCED LEGACY */}
        <section className="py-24 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Advanced Strategies Require the Right Conversation
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Some families go beyond basic protection and begin exploring how
              insurance, trusts, and cash-flow strategy can work together to
              support long-term control and legacy planning. That may include
              ideas often discussed through the Rockefeller Method, becoming
              your own bank, or infinite banking concepts.
            </p>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              These are not casual products. They are strategies that require
              proper design, clear objectives, and guidance that matches the
              client’s real situation.
            </p>
          </div>
        </section>

        {/* CLOSE */}
        <section className="py-24 px-6 border-t border-gray-800 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Real Assets Are Built to Protect, Support, and Transfer Value.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              The goal is not simply to make money. The goal is to build
              something that can serve you while you live, protect the people
              you love, and continue working with intention across generations.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
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
                Book a Strategy Conversation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}