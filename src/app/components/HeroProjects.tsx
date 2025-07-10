import React from "react";
import { timelineProjects } from "../data/projects";

const HeroProjects = () => {
  return (
    <div className="text-gray-200 text-[0.80rem] font-semibold">
      {timelineProjects.map((project, index) => (
        <div key={index} className="flex items-start mb-4">
          <div className="w-1/3">
            <div>{project.title}</div>
            <div className="text-gray-200 text-[0.70rem] font-medium uppercase">
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
