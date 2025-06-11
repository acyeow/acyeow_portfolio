"use client";

import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { gridProjects } from "../data/projects";

const ProjectGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available and set initial mobile state
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    checkMobile();

    const positionGridItems = () => {
      const grid = gridRef.current;
      if (!grid) return;

      // Skip grid positioning on mobile
      if (isMobile) return;

      // 1. Define the small "unit" height for our grid rows
      const rowHeight = 10; // in pixels
      const rowGap = 8; // Reduced from 16 to 8 pixels

      const children = Array.from(grid.children) as HTMLElement[];
      children.forEach((item: HTMLElement) => {
        const content = item.firstElementChild as HTMLElement; // Get the ProjectCard div
        if (content) {
          // 2. Calculate how many "unit" rows the content spans
          const contentHeight = content.getBoundingClientRect().height;
          const rowSpan = Math.ceil(
            (contentHeight + rowGap) / (rowHeight + rowGap)
          );
          // 3. Apply the calculated span to the grid item
          item.style.gridRowEnd = `span ${rowSpan}`;
        }
      });
    };

    const handleResize = () => {
      checkMobile();
      positionGridItems();
    };

    // A more robust solution would use a library like `imagesLoaded`,
    // but a timeout is a simple way to wait for media to render.
    const timer = setTimeout(positionGridItems, 500);

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 py-8"
      style={{ gridAutoRows: isMobile ? "auto" : `10px` }}
    >
      {gridProjects.map((project, index) => (
        <div key={index}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
