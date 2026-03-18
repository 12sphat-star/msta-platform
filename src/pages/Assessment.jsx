import SEO from "../components/SEO";
import Schema from "../components/Schema";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Assessment() {
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);

  const questions = {
    mindset: [
      "I operate with clear purpose and direction",
      "My daily habits support the future I say I want",
      "I stay disciplined and focused under pressure",
      "My decisions are driven by clarity instead of reaction",
    ],
    skillset: [
      "I am highly competent in the value I bring to the marketplace",
      "I can clearly communicate what makes me different",
      "My expertise creates trust and authority in my niche",
      "I consistently improve the skills that increase my value",
    ],
    toolset: [
      "My website helps generate leads or move people to action",
      "My digital presence is structured for SEO, AEO, or GEO visibility",
      "I use systems, AI, automation, or CRM tools to create leverage",
      "I have access to infrastructure or capital that supports growth",
    ],
    assets: [
      "I have a plan to protect what I am building",
      "I have insurance, trust, or legal structures that support my family or business",
      "I understand that a trust is one part of a complete estate plan, not the full plan by itself",
      "I am building assets that can serve me now and continue working beyond me",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does the MSTA Assessment measure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The MSTA Assessment measures four areas: mindset, skillset, toolset, and assets. It is designed to help you see where your current structure is strong and where it may need attention.",
        },
      },
      {
        "@type": "Question",
        name: "Who should take the MSTA Assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The assessment is useful for business owners, entrepreneurs, professionals, and growth-minded individuals who want more clarity around structure, execution, systems, and protection.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after I complete the assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After you complete the assessment, you receive a score and a view of the areas that may need the most attention. From there, you can book a strategy call or review the framework in more detail.",
        },
      },
    ],
  };

  const handleChange = (category, index) => {
    const key = `${category}-${index}`;
    setResponses((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const calculateScore = () => {
    const scores = {
      mindset: 0,
      skillset: 0,
      toolset: 0,
      assets: 0,
    };

    Object.keys(questions).forEach((category) => {
      questions[category].forEach((_, index) => {
        if (responses[`${category}-${index}`]) {
          scores[category] += 1;
        }
      });
    });

    const total =
      scores.mindset +
      scores.skillset +
      scores.toolset +
      scores.assets;

    const visibleCategories = Object.keys(scores);
    const minScore = Math.min(...visibleCategories.map((cat) => scores[cat]));

    const weakestCategories = visibleCategories.filter(
      (cat) => scores[cat] === minScore
    );

    const toolsetDigitalSignals =
      (responses["toolset-0"] ? 1 : 0) +
      (responses["toolset-1"] ? 1 : 0);

    const toolsetAISignals = responses["toolset-2"] ? 1 : 0;

    let workflowWeakPillar = "operations";

    if (weakestCategories.includes("assets")) {
      workflowWeakPillar = "capital";
    } else if (weakestCategories.includes("toolset")) {
      if (toolsetAISignals === 0) {
        workflowWeakPillar = "AI";
      } else if (toolsetDigitalSignals <= 1) {
        workflowWeakPillar = "digital";
      } else {
        workflowWeakPillar = "operations";
      }
    } else if (
      weakestCategories.includes("mindset") ||
      weakestCategories.includes("skillset")
    ) {
      workflowWeakPillar = "operations";
    }

    setResult({
      total,
      scores,
      weakestCategories,
      workflowWeakPillar,
    });
  };

  const getOverallStatus = (total) => {
    if (total <= 5) return "At Risk – Foundational Gaps Present";
    if (total <= 11) return "Developing – Growth Is Possible but Inconsistent";
    return "Strong – Structure Is Present but Refinement Is Possible";
  };

  return (
    <>
      <SEO
        title="MSTA Assessment"
        description="Take the MSTA Assessment to identify gaps in mindset, skillset, toolset, and assets and uncover your next best move."
        keywords="MSTA assessment, business assessment, growth assessment, infrastructure assessment"
        canonical="https://urmsta.com/assessment"
      />

      <Schema data={faqSchema} />

      <Navbar />

      <div className="bg-[#05070C] text-white min-h-screen pt-28">
        <section className="px-6 py-16 text-center border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              MSTA Assessment
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Select every statement that is consistently true for you or your
              business. Unchecked items reveal where structure may need to be
              strengthened.
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              What is the MSTA Assessment? It is a simple self-assessment that
              helps identify gaps in mindset, skillset, toolset, and assets so
              you can see where stronger structure may be needed first.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto space-y-12">
            {Object.keys(questions).map((category) => (
              <div key={category}>
                <h2 className="text-3xl font-semibold mb-4 capitalize">
                  {category}
                </h2>

                <div className="space-y-4 text-gray-300">
                  {questions[category].map((question, index) => (
                    <label
                      key={index}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="mt-1"
                        checked={!!responses[`${category}-${index}`]}
                        onChange={() => handleChange(category, index)}
                      />
                      <span>{question}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center pt-4">
              <button
                type="button"
                onClick={calculateScore}
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-lg"
              >
                Calculate My Score
              </button>
            </div>

            {result && (
              <div className="mt-12 p-8 bg-[#0A0F1C] rounded-xl border border-gray-800 text-center">
                <h2 className="text-3xl font-semibold mb-4">
                  Your MSTA Score: {result.total}/16
                </h2>

                <p className="text-gray-400 mb-4">
                  {getOverallStatus(result.total)}
                </p>

                <p className="mb-2">Pillars Requiring the Most Attention:</p>

                <div className="text-xl font-semibold text-blue-400 mb-6 space-y-2">
                  {result.weakestCategories.map((layer) => (
                    <div key={layer}>{layer.toUpperCase()}</div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-8">
                  The weakest pillar often reveals where your next breakthrough
                  needs structure, not just effort.
                </p>

                <div className="flex justify-center gap-6 flex-wrap">
                  <a
                    href={`https://b.12stoneboost.com/widget/form/ynsmbp6nZ4ezwW5js1ox?weak_pillar=${result.workflowWeakPillar}&total_score=${result.total}&mindset_score=${result.scores.mindset}&skillset_score=${result.scores.skillset}&toolset_score=${result.scores.toolset}&assets_score=${result.scores.assets}`}
                    className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-lg"
                  >
                    Book Strategy Call
                  </a>

                  <Link
                    to="/toolset"
                    className="inline-block px-8 py-4 border border-gray-700 hover:border-gray-500 transition rounded-lg text-white"
                  >
                    Review the Framework
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="px-6 py-16 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
              Assessment FAQs
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  What does the MSTA Assessment measure?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  The MSTA Assessment measures four areas: mindset, skillset,
                  toolset, and assets. It is designed to help you see where your
                  current structure is strong and where it may need attention.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  Who should take the MSTA Assessment?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  The assessment is useful for business owners, entrepreneurs,
                  professionals, and growth-minded individuals who want more
                  clarity around structure, execution, systems, and protection.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#0A0F1C] p-6">
                <h3 className="text-xl font-semibold">
                  What happens after I complete the assessment?
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  After you complete the assessment, you receive a score and a
                  view of the areas that may need the most attention. From
                  there, you can book a strategy call or review the framework in
                  more detail.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}