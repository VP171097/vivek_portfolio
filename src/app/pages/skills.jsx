import React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { MagicCard } from "@/components/magicui/magic-card";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { useConfig } from "@/context/ConfigContext";

const SkillsSection = () => {
  const { config, loading } = useConfig();
  const skillsConfig = config.skills;

  if (loading || !skillsConfig)
    return <div className="text-white text-center">Loading Skills...</div>;

  return (
    <div>
      <MagicCard
        gradientSize={400}
        gradientFrom="#4a16f4"
        gradientTo="#f42116"
        className="rounded-2xl border-2 p-8 md:p-12 flex flex-col items-center justify-center w-full text-white"
      >
        {/* Heading Section */}
        <div className="max-w-3xl text-center">
          <p className="text-xs tracking-widest text-orange-400 mb-1">
            {skillsConfig.sectionTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            <SparklesText>{skillsConfig.headline}</SparklesText>
          </h2>

          {/* Centered Highlighted Text */}
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

          <p className="text-gray-400 text-sm mt-4 mb-6">
            {skillsConfig.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-5 justify-center text-black">
          {skillsConfig.technicalSkills.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/95 hover:bg-white border-2 border-black shadow-amber-50 rounded-lg px-3 py-2 flex items-center gap-3 hover:scale-110 transition w-40"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />
              <p className="text-sm text-wrap text-black whitespace-nowrap font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </MagicCard>
    </div>
  );
};

export default SkillsSection;
