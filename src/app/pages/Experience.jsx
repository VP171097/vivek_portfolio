import React, { useState } from "react";
import { Briefcase } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useConfig } from "@/context/ConfigContext";

const Experience = () => {
  const { config, loading } = useConfig();
  const experienceConfig = config.experience;

  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading || !experienceConfig)
    return <div className="text-white text-center">Loading Experience...</div>;

  return (
    <div className="text-white">
      <MagicCard
        gradientSize={400}
        gradientFrom="#4a16f4"
        gradientTo="#f42116"
        className="rounded-2xl xl:border-2 xl:p-8 py-6 px-3"
      >
        {/* Header */}
        <div className="flex items-center mb-4 px-1">
          <div className="bg-yellow-400 p-2 rounded-md mr-4 ">
            <Briefcase size={20} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold">{experienceConfig.title}</h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-5 border-l-2 border-gray-600 pt-0.5">
          {experienceConfig.experienceData.map((item, index) => (
            <div key={index} className="mb-10 pl-8 relative">
              <div className="mt-10 py-3">
                <span className="absolute left-[-9px] top-1 w-4 h-4 bg-yellow-400 rounded-full"></span>

                {/* Title and Info */}
                <h3 className="xl:text-lg text-xl font-bold">{item.title}</h3>
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

                {/* Points */}
                <ul className="list-disc list-inside space-y-2 xl:text-sm text-gray-200 mt-2">
                  {/* Desktop: Always show */}
                  <div className="hidden lg:block">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </div>

                  {/* Mobile: Smooth open/close */}
                  <div
                    className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden`}
                    style={{
                      maxHeight: expandedItems[index] ? "1000px" : "0px",
                      opacity: expandedItems[index] ? 1 : 0,
                      paddingTop: expandedItems[index] ? "0.5rem" : "0",
                    }}
                  >
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </div>
                </ul>

                {/* Toggle (mobile) */}
                <div className="lg:hidden mt-2">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-400 text-sm hover:text-amber-400 cursor-pointer focus:outline-none"
                  >
                    {expandedItems[index] ? "Show Less" : "See More..."}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MagicCard>
    </div>
  );
};

export default Experience;
