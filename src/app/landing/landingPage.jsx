import React from "react";
import { Ripple } from "@/components/magicui/ripple";
import { RetroGrid } from "@/components/magicui/retro-grid";

const LandingPage = () => {
  return (
    <div className="relative flex h-screen w-full flex-col justify-center  bg-background   ">
      <div className="z-50 whitespace-pre-wrap text-5xl  font-bold  text-white">
        <div>
          <h2>Vivek Pandey</h2>
        </div>
      </div>
      <Ripple />
    </div>
  );
};

export default LandingPage;
