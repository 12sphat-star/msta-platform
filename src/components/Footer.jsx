import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#05070C] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">MSTA</h3>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Mindset. Skillset. Toolset. Assets.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              A structured framework for building with clarity, growing with
              leverage, and protecting what matters.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Navigate</h4>
            <div className="space-y-3 text-gray-400">
              <div><Link to="/" className="hover:text-white transition">Home</Link></div>
              <div><Link to="/mindset" className="hover:text-white transition">Mindset</Link></div>
              <div><Link to="/skillset" className="hover:text-white transition">Skillset</Link></div>
              <div><Link to="/toolset" className="hover:text-white transition">Toolset</Link></div>
              <div><Link to="/assets" className="hover:text-white transition">Assets</Link></div>
              <div><Link to="/about" className="hover:text-white transition">About</Link></div>
              <div><Link to="/assessment" className="hover:text-white transition">Assessment</Link></div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                  Phone
                </p>
                <a href="tel:7573356772" className="hover:text-white transition">
                  757-335-6772
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@12stoneconsulting.com"
                  className="hover:text-white transition"
                >
                  info@12stoneconsulting.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Connect</h4>

            <div className="space-y-3 text-gray-400">
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100068173185301"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/12stonebig3/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-3">
                Already know you want to talk?
              </p>

              <Link
                to="/book"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg text-white font-medium"
              >
                Schedule a Direct Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-gray-800 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MSTA. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built for structure, leverage, and legacy.
          </p>
        </div>
      </div>
    </footer>
  );
}