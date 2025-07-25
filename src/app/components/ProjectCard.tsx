"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { Project } from "../data/projects";
import Image from "next/image";

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
              preload="metadata"
            />
          ) : (
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto"
              onLoad={handleMediaLoaded}
              width={1200}
              height={600}
              priority
            />
          )}
        </div>
        <div className="text-[0.7rem] uppercase">
          <h3 className="text-gray-200 mb-1">{project.title}</h3>
          <p className="text-zinc-600">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
