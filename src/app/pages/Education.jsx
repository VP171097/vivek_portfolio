import React from "react";
import { Book } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useConfig } from "@/context/ConfigContext"; // ✅ use context

const Education = () => {
  const { config, loading } = useConfig();
  const educationConfig = config.education;

  if (loading || !educationConfig)
    return <div className="text-white text-center">Loading Education...</div>;

  return (
    <MagicCard
      size={500}
      gradientSize={200}
      gradientFrom="red"
      className="p-0 rounded-2xl border-2"
    >
      <div className="text-white px-8 pt-6 pb-4 rounded-2xl max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="bg-yellow-400 p-2 rounded-md mr-4">
            <Book size={20} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold">{educationConfig.title}</h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-5 border-l-2 border-gray-600 pt-4">
          {educationConfig.educationData.map((item, index) => (
            <div key={index} className="mb-10 pl-8 relative">
              {/* Yellow Dot */}
              <span className="absolute left-[-9px] top-1 w-4 h-4 bg-yellow-400 border-2 border-black rounded-full"></span>

              {/* Timeline Content */}
              <h3 className="text-lg font-bold">{item.school}</h3>
              <p className="text-sm text-gray-400">{item.year}</p>
              <p className="text-sm text-gray-200 leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MagicCard>
  );
};

export default Education;
