import React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const About = () => {
  return (
    <section className=" px-6 py-8 rounded-2xl ">
      <div className=" items-center gap-3 mb-4">
        <h2 className="text-white text-2xl font-bold mb-3">About Me</h2>
        <div className="bg-yellow-400 w-15 h-1 rounded-sm"></div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">
        I am a highly motivated
        <span className="inline-flex mx-2">
          <PointerHighlight
            rectangleClassName=" bg-muted  rounded-lg dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          >
            <span className="relative z-10 text-amber-300 text-2xl p-5 font-semibold">
              Azure Data Engineer
            </span>
          </PointerHighlight>
        </span>
        with a proven track record of designing, developing, and implementing
        robust data solutions on the Azure platform.
      </p>

      <p className="text-gray-300 leading-relaxed">
        My expertise lies in building high-performance, scalable data pipelines
        for both real-time streaming and batch processing. I am adept at
        optimizing ETL workflows, automating data processes, and leveraging
        technologies like Python, PySpark, and Azure DataBricks to drive
        meaningful business insights. I am passionate about solving complex data
        challenges and contributing to data-driven decision-making.
      </p>
    </section>
  );
};

export default About;
