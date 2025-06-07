import React from "react";
import HeroAbout from "./HeroAbout";
import HeroProjects from "./HeroProjects";

const HeroHeader = () => {
  return (
    <div className="flex p-4 text-zinc-600 text-[0.7rem] ">
      <div className="w-1/3">
        ABOUT
        <div className="p-1"></div>
        <HeroAbout />
      </div>
      <div className="w-1/6">
        <div className="p-1"></div>
      </div>
      <div className="w-1/2">
        <div className="flex">
          <div className="w-1/3">PROJECTS</div>
          <div className="w-2/3">DESCRIPTION</div>
        </div>
        <div className="p-1"></div>
        <HeroProjects />
      </div>
    </div>
  );
};

export default HeroHeader;
