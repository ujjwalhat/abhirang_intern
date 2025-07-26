import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import FeatureSection from "./components/FeatureSection";
import AutoCarousel from "./components/AutoCarousel";
import CardGrid from "./components/CardGrid";
import WhySection from "./components/WhySection";
import FrameworkTable from "./components/FrameworkTable";
import InteractiveSection from "./components/InteractiveSection";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <FeatureSection />
              <AutoCarousel />
              <CardGrid />
              <WhySection />
              <FrameworkTable />
              <InteractiveSection />
              <ConnectSection />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
