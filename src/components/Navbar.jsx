import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Mindset", path: "/mindset" },
  { name: "Skillset", path: "/skillset" },
  { name: "Toolset", path: "/toolset" },
  { name: "Assets", path: "/assets" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="text-xl sm:text-2xl font-bold tracking-tight text-white"
        >
          MSTA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm tracking-wide items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/assessment"
          className="hidden md:inline-flex px-6 py-2 bg-blue-600 hover:bg-blue-500 transition rounded-lg text-sm font-medium text-white"
        >
          Start the Assessment
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-700 px-3 py-2 text-white"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800 bg-[#05070C]">
          <nav className="px-4 sm:px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `text-base transition ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/assessment"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex w-full justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg text-sm font-medium text-white"
            >
              Start the Assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}