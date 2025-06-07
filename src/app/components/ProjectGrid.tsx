"use client";

import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  const projects = [
    {
      id: "changelog-ai",
      title: "changelog.ai",
      description: "AI Engineering",
      imageUrl: "/images/changelog_clip.mp4",
    },
    {
      id: "sonic-gameplaying-ai",
      title: "Sonic Gameplaying AI",
      description: "Reinforcement Learning",
      imageUrl: "/images/sonic_clip.mp4",
    },
    {
      id: "l-store-db",
      title: "L-Store DB",
      description: "Database Systems",
      imageUrl: "/images/lstore_merge.png",
    },
    {
      id: "mistique",
      title: "mistique",
      description: "Retrieval Augmented Generation",
      imageUrl: "/images/mistique_homepage.png",
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction",
      description: "Supervised Learning",
      imageUrl: "/images/heart_disease.png",
    },
  ];

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const positionGridItems = () => {
      const grid = gridRef.current;
      if (!grid) return;

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

    // A more robust solution would use a library like `imagesLoaded`,
    // but a timeout is a simple way to wait for media to render.
    const timer = setTimeout(positionGridItems, 500);
    window.addEventListener("resize", positionGridItems);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", positionGridItems);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-3 gap-2 px-4 py-8"
      // Define a small, fixed height for each grid row "unit"
      style={{ gridAutoRows: `10px` }}
    >
      {projects.map((project, index) => (
        // Each card is a direct child of the grid
        <div key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectId={project.id}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
