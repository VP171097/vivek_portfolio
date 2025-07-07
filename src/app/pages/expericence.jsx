import React from "react";
import { Briefcase } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useConfig } from "@/context/ConfigContext"; // ✅ use dynamic config

const Experience = () => {
  const { config, loading } = useConfig();
  const experienceConfig = config.experience;

  if (loading || !experienceConfig)
    return <div className="text-white text-center">Loading Experience...</div>;

  return (
    <div className="text-white">
      <MagicCard
        gradientSize={400}
        gradientFrom="#4a16f4"
        gradientTo="#f42116"
        className="rounded-2xl border-2 p-8"
      >
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="bg-yellow-400 p-2 rounded-md mr-4">
            <Briefcase size={20} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold">{experienceConfig.title}</h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-5 border-l-2 border-gray-600 pt-5">
          {experienceConfig.experienceData.map((item, index) => (
            <div key={index} className="mb-10 pl-8 relative">
              {/* Yellow Dot */}
              <div className="mt-10">
                <span className="absolute left-[-9px] top-1 w-4 h-4 bg-yellow-400 border-2 border-black rounded-full"></span>

                {/* Content */}
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-4 mt-3 items-center">
                  <img
                    src={item.img}
                    className="w-28 h-10 object-contain"
                    alt={`${item.company} logo`}
                  />
                  <div className="border-l-2 pl-3">
                    <p className="text-sm text-gray-400">{item.company}</p>
                    <p className="text-sm text-gray-400 mb-2">
                      {item.duration}
                    </p>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-1 text-sm text-gray-200 mt-2">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </MagicCard>
    </div>
  );
};

export default Experience;
