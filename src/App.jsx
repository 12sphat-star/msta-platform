import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Schema from "./components/Schema";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Mindset from "./pages/Mindset";
import Skillset from "./pages/Skillset";
import Toolset from "./pages/Toolset";
import Assets from "./pages/Assets";
import Assessment from "./pages/Assessment";
import Book from "./pages/Book";
import About from "./pages/About";

export default function App() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MSTA Platform",
    url: "https://urmsta.com",
    sameAs: [
      "https://www.facebook.com/profile.php?id=100068173185301",
      "https://www.instagram.com/12stonebig3/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-757-335-6772",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MSTA Platform",
    url: "https://urmsta.com",
  };

  return (
    <>
      <Schema data={organizationSchema} />
      <Schema data={websiteSchema} />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mindset" element={<Mindset />} />
        <Route path="/skillset" element={<Skillset />} />
        <Route path="/toolset" element={<Toolset />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}