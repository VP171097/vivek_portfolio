import React from "react";
import Header from "@/components/layouts/header";
import About from "../pages/about";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import SkillsSection from "../pages/skills";

const HeroSection = () => {
  return (
    <div className="rounded-2xl xl:border-2 xl:border-amber-100 max-w-4xl  relative flex justify-between h-full w-full flex-col pb-8  ">
      <Header />

      <div id="about" className="xl:px-5 mb-4 scroll-mt-20">
        <About />
      </div>
      <div id="experience" className=" xl:px-10 my-4 scroll-mt-20">
        <Experience />
      </div>

      <div id="education" className=" xl:px-10 my-4 scroll-mt-20">
        <Education />
      </div>

      <div id="skills" className=" xl:px-10 my-4  scroll-mt-20">
        <SkillsSection />
      </div>
    </div>
  );
};

export default HeroSection;
