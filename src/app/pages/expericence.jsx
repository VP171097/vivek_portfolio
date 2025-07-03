import React from "react";
import { Book } from "lucide-react";

import { Briefcase } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";

const experienceData = [
  {
    title: "Senior Associate Consultant",
    company: "INFOSYS LIMITED, Noida, India",
    duration: "FEB, 2025 - Present",
    points: [
      "Implemented streaming pipelines on Databricks for real-time data processing, enhancing data availability by 20%.",
      "Assisted in the development and maintenance of data pipelines using Databricks and PySpark, improving data processing efficiency by 15%.",
      "Supported ongoing ETL and data processing tasks, ensuring 99.9% data accuracy and smooth data operations.",
      "Collaborated with cross-functional teams to gather data requirements and optimize workflows, reducing project turnaround time by 10%.",
      "Utilized Python for scripting data transformation and manipulation, automating tasks and saving 5 hours per week.",
    ],
  },
  {
    title: "Systems Engineer",
    company: "TATA CONSULTANCY SERVICES, Noida, India",
    duration: "FEB, 2020 - JAN, 2025",
    points: [
      "Built real-time streaming pipelines for TotalEnergies using Databricks & PySpark, processing 100TB of sensor data daily.",
      "Developed batch processing pipelines with Python & Azure Function Apps, improving reporting & analytics generation time by 40%.",
      "Automated Databricks job monitoring with Python & Microsoft Teams, reducing manual effort by 2 hours daily and improving system reliability.",
      "Designed and optimized ETL workflows, increasing data integrity and accuracy by 25%.",
      "Automated data processing tasks using Python, boosting overall efficiency by 30%.",
      "Led a 6-member cross-functional team, fostering collaboration across business units and delivering projects 15% ahead of schedule.",
      "Developed Interactive Electronic Technical Manuals (IETMs) using XML & HTML, enhancing user experience and reducing training time.",
    ],
  },
  {
    title: "Hardware Design Engineer",
    company: "SATYAM SOFTWARE SOLUTIONS PVT. LTD., Noida, India",
    duration: "JUNE, 2019 - FEB, 2020",
    points: [
      "Designed schematics and PCB layouts for Smart Ticket Vending Machines and AFC Gates for Delhi Metro Rail Corporation.",
      "Created PCB layouts using Altium Designer and Ki-CAD, improving design accuracy by 20%.",
      "Performed testing and validation of hardware designs, ensuring 98% reliability and adherence to quality standards.",
    ],
  },
];

const Experience = () => {
  return (
    <div className=" text-white ">
      <MagicCard
        gradientSize={400}
        gradientFrom="#4a16f4"
        gradientTo="#f42116"
        className=" rounded-2xl border-2 p-8"
      >
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="bg-yellow-400 p-2 rounded-md mr-4">
            <Briefcase size={20} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-5 border-l-2 border-gray-600  pt-5">
          {experienceData.map((item, index) => (
            <div key={index} className="mb-10 pl-8 relative ">
              {/* Yellow Dot */}
              <div className="mt-10 ">
                <span className="absolute left-[-9px] top-1 w-4 h-4 bg-yellow-400 border-2 border-black rounded-full"></span>

                {/* Content */}
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.company}</p>
                <p className="text-sm text-gray-400 mb-2">{item.duration}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
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
