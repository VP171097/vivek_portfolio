import React, { useState } from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Ripple } from "@/components/magicui/ripple";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const technicalSkills = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Pandas",
      icon: "https://pandas.pydata.org/static/img/pandas_mark.svg",
    },
    {
      name: "PySpark",
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
    },
    {
      name: "SQL",
      icon: "/assets/skills/sql.svg",
    },
    {
      name: "Azure Databricks",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
    },
    {
      name: "Azure SQL",
      icon: "/assets/skills/azure_db.svg",
    },
    {
      name: "Data Lake",
      icon: "https://learn.microsoft.com/en-us/azure/data-lake-store/media/data-lake-store-overview/data-lake-store-logo.svg",
    },
    {
      name: "Function Apps",
      icon: "https://learn.microsoft.com/en-us/azure/azure-functions/media/functions-logo.svg",
    },
    {
      name: "Kafka",
      icon: "/assets/skills/kafka.svg",
    },
    {
      name: "Storage Explorer",
      icon: "https://learn.microsoft.com/en-us/azure/vs-azure-tools/media/storage-explorer-logo.png",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Function Apps",
      icon: "https://learn.microsoft.com/en-us/azure/azure-functions/media/functions-logo.svg",
    },
  ];

  const softSkills = [
    {
      name: "Hindi (Conversational)",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    },
    {
      name: "English (Conversational)",
      icon: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
  ];

  const activeData = activeTab === "skills" ? technicalSkills : softSkills;

  return (
    <div className="">
      <MagicCard
        gradientSize={400}
        gradientFrom="#4a16f4"
        gradientTo="#f42116"
        className=" rounded-2xl border-2 p-8 bg-[#1c1c1c] md:p-12 flex flex-col items-center justify-center w-full text-white"
      >
        {/* Heading Section */}
        <div className="max-w-3xl text-center">
          <p className="text-xs tracking-widest text-orange-400 mb-1">
            MY SKILLS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            <SparklesText> What's My Programming</SparklesText>
          </h2>

          {/* Centered Highlighted Text */}
          <div className="flex justify-center">
            <PointerHighlight
              rectangleClassName="bg-muted rounded-lg dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
              pointerClassName="text-yellow-500"
            >
              <span className="relative z-10 text-amber-300 text-2xl p-5 font-semibold">
                Skills Included?
              </span>
            </PointerHighlight>
          </div>

          <p className="text-gray-400 text-sm mt-4 mb-6">
            I develop simple, intuitive and responsive data engineering
            pipelines that help users process large-scale data with less effort
            and better performance.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-6 py-2 rounded-full cursor-pointer text-sm font-semibold shadow-md transition ${
              activeTab === "skills"
                ? "bg-[#cea719] text-white"
                : "bg-white text-gray-800"
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab("soft")}
            className={`px-6 py-2 rounded-full cursor-pointer text-sm font-semibold shadow-md transition ${
              activeTab === "soft"
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl">
          {activeData.map((item, idx) => (
            <div
              key={idx}
              className="relative group shadow transition-transform hover:scale-105 rounded-2xl"
            >
              {/* BorderBeam overlay */}
              <BorderBeam
                size={80}
                borderWidth={2.5}
                duration={4}
                className="from-transparent via-blue-500 to-transparent  "
              />

              {/* Skill card */}
              <div className="bg-black   p-4 rounded-2xl flex flex-col items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10 h-10 object-contain mb-3"
                />
                <p className="text-sm text-center text-white">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </MagicCard>
    </div>
  );
};

export default SkillsSection;
