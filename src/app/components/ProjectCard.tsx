"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectId: string;
  onMediaLoad?: () => void;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectId,
  onMediaLoad,
}: ProjectCardProps) => {
  const isVideo = imageUrl.match(/\.(mp4|webm|ogg)$/i);

  const handleMediaLoaded = () => {
    if (onMediaLoad) {
      onMediaLoad();
    }
  };

  return (
    <Link href={`/project/${projectId}`} prefetch={true}>
      <div className="p-1 break-inside-avoid mb-2 hover:opacity-60 transition-opacity duration-300 cursor-pointer">
        <div className="bg-gray-800 overflow-hidden mb-5">
          {isVideo ? (
            <video
              src={imageUrl}
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={handleMediaLoaded}
            />
          ) : (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto"
              onLoadedData={handleMediaLoaded}
            />
          )}
        </div>
        <h3 className="text-gray-200 text-[0.65rem] uppercase mb-1">{title}</h3>
        <p className="text-zinc-600 text-[0.7rem] uppercase">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
