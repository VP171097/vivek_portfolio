import React from "react";
import Header from "@/components/layouts/header";
import About from "../pages/about";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import SkillsSection from "../pages/skills";

const HeroSection = () => {
  return (
    <div className="rounded-2xl border-2 border-amber-100  max-w-4xl mx-auto relative flex justify-between h-full w-full flex-col  ">
      <Header />

      <div id="about" className="px-5 mb-4 scroll-mt-20">
        <About />
      </div>
      <div id="experience" className=" px-10 my-12 scroll-mt-20">
        <Experience />
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
