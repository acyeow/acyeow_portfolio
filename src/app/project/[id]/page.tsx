"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ProjectPage = () => {
  const { id } = useParams();

  const projects = [
    {
      id: "changelog-ai",
      title: "changelog.ai",
      description: "AI Engineering",
      imageUrl: "/images/changelog_clip.mp4",
      fullDescription:
        "Building an AI-powered developer onboarding tool that facilitates comprehensive understanding of GitHub repositories.",
      date: "feb 2025 - present",
    },
    {
      id: "sonic-gameplaying-ai",
      title: "Sonic Gameplaying AI",
      description: "Reinforcement Learning",
      imageUrl: "/images/sonic_clip.mp4",
      fullDescription:
        "A Proximal Policy Optimization (PPO) agent that plays Sonic the Hedgehog. [ECS 170]",
      date: "mar 2024 - jun 2024",
    },
    {
      id: "l-store-db",
      title: "L-Store DB",
      description: "Database Systems",
      imageUrl: "/images/lstore_merge.png",
      fullDescription:
        "A lineage-based Hybrid Transactional/Analytical Processing (HTAP) database from scratch. [ECS 165A]",
      date: "jan 2025 - mar 2025",
    },
    {
      id: "mistique",
      title: "mistique",
      description: "Retrieval Augmented Generation",
      imageUrl: "/images/mistique_homepage.png",
      fullDescription:
        "A Retrieval Augmented Generation (RAG) Q/A system for the Mistral7B paper.",
      date: "sept 2024 - nov 2024",
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction",
      description: "Supervised Learning",
      imageUrl: "/images/heart_disease.png",
      fullDescription:
        "A Light Gradient-Boosting Machine (LightGBM) model that predicts heart disease from imbalanced structured data.",
      date: "apr 2024 - oct 2024",
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-gray-200 text-[0.85rem] font-medium">
          Project not found
        </div>
      </div>
    );
  }

  const isVideo = project.imageUrl.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div className="bg-black">
      {/* Close button */}
      <div className="fixed top-2 right-4 z-10">
        <Link href="/" prefetch={true}>
          <button className="text-gray-200 text-3xl hover:text-green-200 transition-colors duration-200 cursor-pointer">
            ×
          </button>
        </Link>
      </div>

      {/* Project Title */}
      <div className="p-4">
        <h1 className="text-gray-200 text-[1.5rem] font-semibold uppercase">
          {project.title}
        </h1>
        <div className="flex items-center gap-4 mt-2">
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
        <div className="w-full bg-gray-800 overflow-hidden">
          {isVideo ? (
            <video
              src={project.imageUrl}
              className="w-full h-auto max-h-[70vh] object-contain"
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
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
