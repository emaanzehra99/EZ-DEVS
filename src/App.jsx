import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import DigitalGap from "./components/DigitalGap";
import Solution from "./components/Solution";
import WorkPreview from "./components/WorkPreview";
import ServicesPreview from "./components/ServicesPreview";
import WhyEZ from "./components/WhyEZ";
import FinalCTA from "./components/FinalCTA";

import Services from "./pages/Services";
import About from "./pages/About";
import Work from "./pages/Work";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

import BackToTop from "./components/BackToTop";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <DigitalGap />
              <Solution />
              <WorkPreview />
              <ServicesPreview />
              <WhyEZ />
              <FinalCTA />
              <BackToTop />
              <Footer />
            </main>
          }
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={
            <main>
              <Services />
              <BackToTop />
              <Footer />
            </main>
          }
        />

        <Route
          path="/about"
          element={
            <main>
              <About />
              <BackToTop />
              <Footer />
            </main>
          }
        />

        <Route
          path="/work"
          element={
            <main>
              <Work />
              <BackToTop />
              <Footer />
            </main>
          }
        />

        <Route
          path="/process"
          element={
            <main>
              <Process />
              <BackToTop />
              <Footer />
            </main>
          }
        />

         <Route
          path="/contact"
          element={
            <main>
              <Contact />
              <BackToTop />
              <Footer />
            </main>
          }
        />

      </Routes>
    </>
  );
}

export default App;