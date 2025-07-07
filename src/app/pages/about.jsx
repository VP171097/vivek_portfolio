import React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { useConfig } from "@/context/ConfigContext";

const About = () => {
  const { config, loading } = useConfig();
  const aboutConfig = config.about;

  if (loading || !aboutConfig) {
    return (
      <section className="text-white px-6 py-8">
        Loading About Section...
      </section>
    );
  }

  const [beforeHighlight, afterHighlight] = aboutConfig.description1.split(
    aboutConfig.highlight
  );

  return (
    <section className="px-6 py-8 rounded-2xl">
      <div className="items-center gap-3 mb-4">
        <h2 className="text-white text-2xl font-bold mb-3">
          {aboutConfig.title}
        </h2>
        <div className="bg-yellow-400 w-15 h-1 rounded-sm"></div>
      </div>

      <div className="text-gray-300 mb-4 leading-relaxed">
        {beforeHighlight}
        <span className="inline-flex mx-2">
          <PointerHighlight
            rectangleClassName="bg-muted rounded-lg dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          >
            <span className="relative z-10 text-amber-300 text-2xl p-5 font-semibold">
              {aboutConfig.highlight}
            </span>
          </PointerHighlight>
        </span>
        {afterHighlight}
      </div>

      <p className="text-gray-300 leading-relaxed">
        {aboutConfig.description2}
      </p>
    </section>
  );
};

export default About;
