import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Mindset from "./pages/Mindset";
import Skillset from "./pages/Skillset";
import Toolset from "./pages/Toolset";
import Assets from "./pages/Assets";
import Assessment from "./pages/Assessment";
import Book from "./pages/Book";
import About from "./pages/About";

export default function App() {
  return (
    <>
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