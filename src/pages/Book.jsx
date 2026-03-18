import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Book() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const pillars = params.get("pillar");
  const total = params.get("total");

  const formattedPillars = pillars
    ? pillars.split(",").map((p) => p.toUpperCase()).join(" + ")
    : null;

  const [businessStage, setBusinessStage] = useState("Starting / Early Growth");
  const [primaryNeed, setPrimaryNeed] = useState("General strategy / not sure yet");
  const [timeline, setTimeline] = useState("Exploring options");

  const handleContinue = () => {
    const ghlFormUrl = new URL(
      "https://b.12stoneboost.com/widget/form/ynsmbp6nZ4ezwW5js1ox"
    );

    // Direct consultation pre-qualifying answers
    ghlFormUrl.searchParams.set("business_stage", businessStage);
    ghlFormUrl.searchParams.set("primary_need", primaryNeed);
    ghlFormUrl.searchParams.set("timeline", timeline);
    ghlFormUrl.searchParams.set("entry_path", "direct_consultation");

    // Keep assessment data if visitor came from assessment flow
    if (pillars) ghlFormUrl.searchParams.set("pillar", pillars);
    if (total) ghlFormUrl.searchParams.set("total", total);

    window.location.href = ghlFormUrl.toString();
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#05070C] text-white min-h-screen pt-28">
        <section className="px-6 py-16 text-center border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Schedule a Direct Consultation
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              This is a focused strategy conversation for business owners and
              growth-minded professionals who want clarity around structure,
              systems, visibility, and next steps.
            </p>

            {!formattedPillars && (
              <p className="mt-6 text-sm text-gray-500">
                Want a more tailored starting point first?{" "}
                <Link
                  to="/assessment"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Take the MSTA Assessment
                </Link>
              </p>
            )}
          </div>
        </section>

        {formattedPillars && (
          <section className="px-6 py-16">
            <div className="max-w-3xl mx-auto p-8 bg-[#0A0F1C] rounded-xl border border-gray-800 text-center">
              <h2 className="text-3xl font-semibold mb-4">
                Your Assessment Summary
              </h2>

              <p className="text-gray-400 mb-4">
                Overall Score:{" "}
                <span className="text-white font-semibold">{total}/16</span>
              </p>

              <p className="mb-4">Primary Structural Focus:</p>

              <div className="text-xl font-semibold text-blue-400 mb-6">
                {formattedPillars} Infrastructure
              </div>

              <p className="text-sm text-gray-500">
                Your consultation will begin with this area of focus.
              </p>
            </div>
          </section>
        )}

        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto bg-[#0A0F1C] rounded-xl border border-gray-800 p-8">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Before We Meet
            </h2>

            <p className="text-center text-gray-400 mb-8">
              Give us a little context so we know what matters most before you
              move to the intake form and scheduling step.
            </p>

            <div className="space-y-6 text-left">
              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Current Business Stage
                </label>
                <select
                  value={businessStage}
                  onChange={(e) => setBusinessStage(e.target.value)}
                  className="w-full p-3 bg-[#111827] border border-gray-700 rounded-md text-white"
                >
                  <option>Starting / Early Growth</option>
                  <option>Established / Scaling</option>
                  <option>Expansion / Acquisition</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Primary Need Right Now
                </label>
                <select
                  value={primaryNeed}
                  onChange={(e) => setPrimaryNeed(e.target.value)}
                  className="w-full p-3 bg-[#111827] border border-gray-700 rounded-md text-white"
                >
                  <option>More leads / visibility</option>
                  <option>Better systems / automation</option>
                  <option>Funding / capital access</option>
                  <option>Asset protection / legacy planning</option>
                  <option>General strategy / not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full p-3 bg-[#111827] border border-gray-700 rounded-md text-white"
                >
                  <option>ASAP</option>
                  <option>Within 30–90 days</option>
                  <option>Exploring options</option>
                </select>
              </div>

              <div className="pt-4 text-center">
                <button
                  type="button"
                  onClick={handleContinue}
                  className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 transition rounded-lg text-white font-semibold"
                >
                  Continue to Booking Intake
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}