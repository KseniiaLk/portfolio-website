import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Home/Header/Header";
import Footer from "./footer/Footer";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function PortfolioContainer() {
  return (
    <div className="portfolio-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home id="Home" />} />
        <Route path="/about" element={<AboutMe id="AboutMe" />} />
        <Route path="/resume" element={<Resume id="Resume" />} />
        <Route path="/projects" element={<Projects id="Projects" />} />
        <Route path="/contact" element={<Contact id="Contact" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
