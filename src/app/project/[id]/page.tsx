"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";

const ProjectPage = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-200 text-[0.85rem] font-medium">
          Project not found
        </div>
      </div>
    );
  }

  const isVideo = project.imageUrl.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div>
      {/* Close button */}
      <div className="fixed top-2 right-4 z-60">
        <Link href="/" prefetch={true}>
          <button className="text-gray-200 text-2xl md:text-3xl hover:text-green-200 transition-colors duration-200 cursor-pointer">
            ×
          </button>
        </Link>
      </div>

      {/* Project Title */}
      <div className="p-4">
        <h1 className="text-gray-200 text-[1.2rem] md:text-[1.5rem] font-semibold uppercase">
          {project.title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
          <span className="text-zinc-600 text-[0.65rem] uppercase">
            {project.description}
          </span>
          <span className="text-zinc-600 text-[0.60rem] uppercase">
            {project.date}
          </span>
        </div>
        <p className="text-gray-400 text-[0.85rem] font-medium mt-2 max-w-2xl">
          {project.fullDescription}
        </p>
      </div>

      {/* Media Display */}
      <div className="px-4 pb-4">
        <div className="w-full overflow-hidden">
          {isVideo ? (
            <video
              src={project.imageUrl}
              className="w-full h-auto max-h-[50vh] md:max-h-[70vh] object-contain"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          ) : (
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto max-h-[50vh] md:max-h-[70vh] object-contain"
              width={800}
              height={450}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
