import React from "react";
import Header from "@/components/layouts/header";
import About from "../pages/about";
import Expericence from "../pages/Expericence";
import Education from "../pages/Education";
import SkillsSection from "../pages/skills";

const HeroSection = () => {
  return (
    <div className="rounded-2xl border border-amber-100 w-full max-w-4xl mx-auto mt-3 ">
      <Header />

      <div id="about" className="px-5 mb-4 scroll-mt-20">
        <About />
      </div>
      <div id="experience" className=" px-10 my-12 scroll-mt-20">
        <Expericence />
      </div>

      <div id="education" className=" px-10 my-12 scroll-mt-20">
        <Education />
      </div>

      <div id="skills" className=" px-10 my-12  scroll-mt-20">
        <SkillsSection />
      </div>
    </div>
  );
};

export default HeroSection;
