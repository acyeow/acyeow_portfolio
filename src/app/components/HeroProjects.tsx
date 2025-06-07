import React from "react";

const HeroProjects = () => {
  const projects = [
    {
      title: "changelog.ai",
      date: "feb 2025 - present",
      description:
        "Building an AI-powered developer onboarding tool that facilitates comprehensive understanding of GitHub repositories.",
    },
    {
      title: "L-Store DB",
      date: "jan 2025 - mar 2025",
      description:
        " A lineage-based Hybrid Transactional/Analytical Processing (HTAP) database from scratch. [ECS 165A]",
    },
    {
      title: "mistique",
      date: "sept 2024 - nov 2024",
      description:
        "A Retrieval Augemnted Generation (RAG) Q/A system for the Mistral7B paper.",
    },
    {
      title: "Sonic Gameplaying AI",
      date: "mar 2024 - jun 2024",
      description:
        "A Proximal Policy Optimization (PPO) agent that plays Sonic the Hedgehog. [ECS 170]",
    },
    {
      title: "Heart Disease Prediction",
      date: "apr 2024 - oct 2024",
      description:
        "A Light Gradient-Boosting Machine (LightGBM) model that predicts heart disease from imbalanced structured data.",
    },
  ];

  return (
    <div className="space-y-4 text-gray-200 text-[0.85rem] font-medium">
      {projects.map((project, index) => (
        <div key={index} className="flex items-start">
          <div className="w-1/3">
            <div className="font-semibold">{project.title}</div>
            <div className="text-gray-200 text-[0.60rem] uppercase">
              {project.date}
            </div>
          </div>
          <div className="w-2/3">{project.description}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroProjects;
