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
        <div className="text-gray-200 text-[0.8rem] font-medium">
          Project not found
        </div>
      </div>
    );
  }

  const isMainVideo = project.imageUrl.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div className="pb-8">
      {/* Close button */}
      <div className="fixed top-2 right-4 z-60">
        <Link href="/" prefetch={true}>
          <button className="text-gray-200 text-2xl md:text-3xl hover:text-green-200 transition-colors duration-200 cursor-pointer">
            ×
          </button>
        </Link>
      </div>

      {/* Main Project Image */}
      <div className="w-full px-4 overflow-hidden flex justify-center mb-8">
        {isMainVideo ? (
          <video
            src={project.imageUrl}
            className="max-w-full max-h-[70vh] h-auto object-contain"
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
            className="max-w-full max-h-[70vh] h-auto object-contain"
            width={1200}
            height={600}
          />
        )}
      </div>

      {/* Content Layout with Sticky Title */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* First Column: Sticky Project Name and Description */}
        <div className="px-4 md:sticky md:top-20 md:h-fit mb-8 md:mb-0">
          <div>
            <h1 className="text-gray-200 text-[1.4rem] font-semibold uppercase mb-2">
              {project.title}
            </h1>
            <p className="text-zinc-600 text-[0.7rem] uppercase">
              {project.description}
            </p>
          </div>

          {/* Citations Section */}
          {project.citations && project.citations.length > 0 && (
            <div className="space-y-4 mt-6">
              <h3 className="text-zinc-600 text-[0.7rem] uppercase">
                Image Sources
              </h3>
              <div className="space-y-2">
                {project.citations.map((citation, index) => (
                  <p
                    key={index}
                    className="text-zinc-400 text-[0.75rem] font-medium"
                  >
                    {citation}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Second and Third Columns: Scrollable Content */}
        <div className="md:col-span-2 px-4 md:pr-4 md:pl-0 space-y-8">
          {/* Full Description */}
          <div>
            <p className="text-gray-200 text-[0.8rem] font-semibold">
              {project.fullDescription}
            </p>
          </div>

          {/* Metadata Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Role */}
            <div>
              <h3 className="text-zinc-600 text-[0.7rem] uppercase mb-2">
                Role
              </h3>
              <p className="text-gray-200 text-[0.8rem] font-semibold">
                {project.role}
              </p>
            </div>

            {/* Collaborators */}
            <div>
              <h3 className="text-zinc-600 text-[0.7rem] uppercase mb-2">
                Collaborators
              </h3>
              <div className="space-y-1">
                {project.collaborators
                  ?.slice(0, 3)
                  .map((collaborator, index) => (
                    <p
                      key={index}
                      className="text-gray-200 text-[0.8rem] font-semibold"
                    >
                      {collaborator}
                    </p>
                  ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <h3 className="text-zinc-600 text-[0.7rem] uppercase mb-2">
                Duration
              </h3>
              <p className="text-gray-200 text-[0.8rem] font-semibold">
                {project.date}
              </p>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-zinc-600 text-[0.7rem] uppercase mb-2">
                Tools
              </h3>
              <div className="space-y-1">
                {project.tools?.slice(0, 3).map((tool, index) => (
                  <p
                    key={index}
                    className="text-gray-200 text-[0.8rem] font-semibold"
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Project Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* GitHub Button spanning first 2 columns */}
            {project.github && (
              <div className="col-span-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xs flex items-center justify-between py-2 px-3 w-full text-zinc-400 text-[0.75rem] font-medium uppercase hover:text-green-200 transition-colors duration-200 bg-zinc-800 hover:bg-zinc-700"
                >
                  GitHub
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}

            {/* Empty space if no GitHub link */}
            {!project.github && <div className="col-span-2"></div>}

            {/* Website Button spanning columns 3 and 4 */}
            {project.website && (
              <div className="col-span-2">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xs flex items-center justify-between py-2 px-3 w-full text-zinc-400 text-[0.75rem] font-medium uppercase hover:text-green-200 transition-colors duration-200 bg-zinc-800 hover:bg-zinc-700"
                >
                  Website
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Additional Images */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="space-y-4">
              {project.additionalImages.map((imageItem, index) => {
                const imageUrl =
                  typeof imageItem === "string" ? imageItem : imageItem.url;
                const caption =
                  typeof imageItem === "string" ? undefined : imageItem.caption;
                const isVideo = imageUrl.match(/\.(mp4|webm|ogg)$/i);

                return (
                  <div key={index} className="w-full overflow-hidden">
                    {isVideo ? (
                      <video
                        src={imageUrl}
                        className="w-full h-auto object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                      />
                    ) : (
                      <Image
                        src={imageUrl}
                        alt={caption || `${project.title} - Image ${index + 1}`}
                        className="w-full h-auto object-contain"
                        width={1200}
                        height={600}
                      />
                    )}
                    {caption && (
                      <p className="text-zinc-400 text-[0.70rem] uppercase mt-4">
                        {caption}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
