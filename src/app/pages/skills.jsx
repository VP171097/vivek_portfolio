import React, { useState, useEffect } from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { MagicCard } from "@/components/magicui/magic-card";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { useConfig } from "@/context/ConfigContext";

const SkillsSection = () => {
  const { config, loading } = useConfig();
  const skillsConfig = config.skills;

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const maxVisibleOnMobile = 6;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading || !skillsConfig)
    return <div className="text-white text-center">Loading Skills...</div>;

  const visibleSkills =
    isMobile && !showAll
      ? skillsConfig.technicalSkills.slice(0, maxVisibleOnMobile)
      : skillsConfig.technicalSkills;

  return (
    <div>
      <MagicCard
        gradientSize={400}
        gradientFrom="#4a16f4"
        gradientTo="#f42116"
        className="rounded-2xl xl:border-2 xl:p-8 md:p-12 py-5 flex flex-col items-center justify-center w-full text-white"
      >
        {/* Heading */}
        <div className="max-w-3xl text-center">
          <p className="text-lg tracking-widest text-orange-400 mb-1">
            {skillsConfig.sectionTitle}
          </p>
          <h2 className="xl:text-3xl md:text-4xl font-bold mb-5">
            <SparklesText>{skillsConfig.headline}</SparklesText>
          </h2>

          <div className="flex justify-center">
            <PointerHighlight
              rectangleClassName="bg-muted rounded-lg dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
              pointerClassName="text-yellow-500"
            >
              <span className="relative z-10 text-amber-300 text-2xl p-5 font-semibold">
                {skillsConfig.highlight}
              </span>
            </PointerHighlight>
          </div>

          <p className="text-gray-400 text-sm mt-4 mb-6 px-5">
            {skillsConfig.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-5 justify-center text-black mb-4">
          {visibleSkills.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/95 hover:bg-white border-2 border-black shadow-amber-50 rounded-lg px-3 py-2 flex items-center gap-3 hover:scale-110 transition w-40"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />
              <p className="text-sm font-semibold whitespace-nowrap text-black">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Toggle Button only on mobile */}
        {isMobile &&
          skillsConfig.technicalSkills.length > maxVisibleOnMobile && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-400 text-sm cursor-pointer hover:text-amber-400  focus:outline-none px-10 "
            >
              {showAll ? "Show Less" : "See More..."}
            </button>
          )}
      </MagicCard>
    </div>
  );
};

export default SkillsSection;
