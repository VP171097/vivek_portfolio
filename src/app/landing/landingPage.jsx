import React from "react";
import { Ripple } from "@/components/magicui/ripple";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Particles } from "@/components/magicui/particles";
import { Scrollui } from "@/components/ui/scrollui";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import SocialLinks from "@/components/layouts/socialLink";
import { useConfig } from "@/context/ConfigContext";

const LandingPage = () => {
  const { config, loading } = useConfig();
  const landingConfig = config.landing;

  if (loading || !landingConfig) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Loading Landing...
      </div>
    );
  }

  return (
    <div className="relative flex h-screen flex-col justify-center items-center text-center px-4 sm:px-8 overflow-hidden">
      {/* Background Particles */}
      <Particles
        className="fixed inset-0 w-full h-full -z-10"
        quantity={200}
        ease={50}
        refresh
      />

      {/* Hero Text */}
      <div className="z-10 mb-6">
        <h1 className="whitespace-pre-wrap text-5xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-bold text-white">
          {landingConfig.firstName}{" "}
          <AuroraText>{landingConfig.lastName}</AuroraText>
        </h1>

        <TypingAnimation className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 mb-6 text-gray-200">
          {landingConfig.title}
        </TypingAnimation>
      </div>

      {/* Resume Button */}
      <div className="z-10 mb-4">
        <ShimmerButton
          onClick={() => window.open(landingConfig.resumeLink, "_blank")}
        >
          Download Resume
        </ShimmerButton>
      </div>

      <div className="z-10 mt-8 flex gap-10 xl:hidden">
        <SocialLinks />
      </div>

      <div className="hidden xl:flex flex-col gap-6 fixed top-1/2 right-8 -translate-y-1/2 z-50">
        <SocialLinks />
      </div>

      <div className="absolute bottom-6 z-20">
        <Scrollui />
      </div>

      {/* Background Ripple */}
      <Ripple />
    </div>
  );
};

export default LandingPage;
