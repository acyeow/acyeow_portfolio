"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onMediaLoad?: () => void;
}

const ProjectCard = ({ project, onMediaLoad }: ProjectCardProps) => {
  const isVideo = project.imageUrl.match(/\.(mp4|webm|ogg)$/i);

  const handleMediaLoaded = useCallback(() => {
    if (onMediaLoad) {
      // Only call once per card
      onMediaLoad();
    }
  }, [onMediaLoad]);

  return (
    <Link href={`/project/${project.id}`} prefetch={true}>
      <div className="p-1 break-inside-avoid mb-2 hover:opacity-60 transition-opacity duration-300 cursor-pointer">
        <div className="bg-gray-800 overflow-hidden mb-5">
          {isVideo ? (
            <video
              src={project.imageUrl}
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={handleMediaLoaded}
            />
          ) : (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto"
              onLoad={handleMediaLoaded}
            />
          )}
        </div>
        <h3 className="text-gray-200 text-[0.70rem] uppercase mb-1">
          {project.title}
        </h3>
        <p className="text-zinc-600 text-[0.7rem] uppercase">
          {project.description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
