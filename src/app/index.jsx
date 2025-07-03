import React from "react";

import Sidebar from "./heroSection/sidebar";
import HeroSection from "./heroSection/heroSection";
import { BorderBeam } from "@/components/magicui/border-beam";

import { Particles } from "@/components/magicui/particles";
import LandingPage from "./landing/landingPage";

const App = () => {
  return (
    <div className="">
      {/* <LandingPage /> */}
      <section className="flex flex-col md:flex-row container mx-auto  gap-6   ">
        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}
        <div className="relative flex h-full w-full flex-col  rounded-lg border bg-black pb-8 ">
          <div className=" text-white rounded-2xl shadow-lg pb-4 pt-4 pointer-events-none z-10 whitespace-pre-wrap  leading-none">
            <Particles
              className="absolute inset-0 z-0"
              quantity={500}
              ease={50}
              refresh
            />
          </div>
          <HeroSection />
        </div>
      </section>
    </div>
  );
};

export default App;
