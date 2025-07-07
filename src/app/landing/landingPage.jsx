import React from "react";
import { Ripple } from "@/components/magicui/ripple";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Particles } from "@/components/magicui/particles";
import { Scrollui } from "@/components/ui/scrollui";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import SocialLinks from "@/components/layouts/socialLink";
import { useConfig } from "@/context/ConfigContext"; // ✅ use context

const LandingPage = () => {
  const { config, loading } = useConfig();
  const landingConfig = config.landing;

  if (loading || !landingConfig)
    return <div className="text-white text-center">Loading Landing...</div>;

  return (
    <div className="relative flex h-screen w-full flex-col justify-center items-center text-center bg-background">
      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={50}
        refresh
      />

      {/* Heading */}
      <div className="relative z-10 mb-2">
        <h1 className="whitespace-pre-wrap text-6xl md:text-9xl font-bold text-white">
          {landingConfig.firstName}{" "}
          <AuroraText>{landingConfig.lastName}</AuroraText>
        </h1>
        <TypingAnimation>{landingConfig.title}</TypingAnimation>
      </div>

      {/* Resume Button */}
      <ShimmerButton
        onClick={() => window.open(landingConfig.resumeLink, "_blank")}
      >
        Download Resume
      </ShimmerButton>

      {/* Scroll UI */}
      <div className="absolute bottom-8 z-50">
        <Scrollui />
      </div>

      <Ripple />

      {/* Social Links */}
      <SocialLinks links={landingConfig.socialLinks} />
    </div>
  );
};

export default LandingPage;
