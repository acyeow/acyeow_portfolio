import React from "react";
import { timelineProjects } from "../data/projects";

const HeroProjects = () => {
  return (
    <div className="space-y-4 text-gray-200 text-[0.85rem] font-semibold">
      {timelineProjects.map((project, index) => (
        <div key={index} className="flex items-start">
          <div className="w-1/3">
            <div>{project.title}</div>
            <div className="font-medium text-gray-200 text-[0.70rem] uppercase">
              {project.date}
            </div>
          </div>
          <div className="w-2/3">{project.fullDescription}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroProjects;
