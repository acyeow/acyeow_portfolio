"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import ProjectCard from "./ProjectCard";
import { gridProjects } from "../data/projects";

const ProjectGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPositioned, setIsPositioned] = useState(false);
  const positionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [pageVisible, setPageVisible] = useState(true);

  const positionGridItems = useCallback(() => {
    const grid = gridRef.current;
    if (!grid || isMobile) return;

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

    setIsPositioned(true);
  }, [isMobile]);

  // Reset positioning when page becomes visible (handles browser back button)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && !pageVisible) {
        // Page became visible again (likely from browser back button)
        setIsPositioned(false);
        setPageVisible(true);
      } else if (document.visibilityState === "hidden") {
        setPageVisible(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pageVisible]);

  // Also reset on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setIsPositioned(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    // Check if window is available and set initial mobile state
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    checkMobile();

    const handleResize = () => {
      const wasMobile = isMobile;
      checkMobile();

      // Only reposition if mobile state changed
      if (wasMobile !== window.innerWidth < 768) {
        setIsPositioned(false);
      }
    };

    // Set up positioning
    if (!isPositioned && !isMobile) {
      // Clear any existing timeout
      if (positionTimeoutRef.current) {
        clearTimeout(positionTimeoutRef.current);
      }

      positionTimeoutRef.current = setTimeout(() => {
        positionGridItems();
      }, 500);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // Cleanup function
    return () => {
      if (positionTimeoutRef.current) {
        clearTimeout(positionTimeoutRef.current);
      }
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [isMobile, isPositioned, positionGridItems]);

  // Simplified media load handler - only for initial positioning
  const handleMediaLoad = useCallback(() => {
    if (!isPositioned && !isMobile) {
      // Debounce the positioning to avoid multiple calls
      if (positionTimeoutRef.current) {
        clearTimeout(positionTimeoutRef.current);
      }

      positionTimeoutRef.current = setTimeout(() => {
        positionGridItems();
      }, 100);
    }
  }, [isPositioned, isMobile, positionGridItems]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 py-8"
      style={{ gridAutoRows: isMobile ? "auto" : `10px` }}
    >
      {gridProjects.map((project) => (
        <div key={project.id}>
          <ProjectCard project={project} onMediaLoad={handleMediaLoad} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
