export const projects = [
  {
    id: "changelog-ai",
    title: "changelog.ai",
    date: "feb 2025 - present",
    description: "AI Engineering",
    fullDescription:
      "Building an AI-powered developer onboarding tool that facilitates comprehensive understanding of GitHub repositories.",
    imageUrl: "/images/changelog_clip.mp4",
    gridOrder: 1,
  },
  {
    id: "l-store-db",
    title: "L-Store DB",
    date: "jan 2025 - mar 2025",
    description: "Database Systems",
    fullDescription:
      "A lineage-based Hybrid Transactional/Analytical Processing (HTAP) database from scratch. [ECS 165A]",
    imageUrl: "/images/lstore_merge.png",
    gridOrder: 3,
  },
  {
    id: "mistique",
    title: "mistique",
    date: "sept 2024 - nov 2024",
    description: "Retrieval Augmented Generation",
    fullDescription:
      "A Retrieval Augmented Generation (RAG) Q/A system for the Mistral7B paper.",
    imageUrl: "/images/mistique_homepage.png",
    gridOrder: 4,
  },
  {
    id: "sonic-gameplaying-ai",
    title: "Sonic Gameplaying AI",
    date: "mar 2024 - jun 2024",
    description: "Reinforcement Learning",
    fullDescription:
      "A Proximal Policy Optimization (PPO) agent that plays Sonic the Hedgehog. [ECS 170]",
    imageUrl: "/images/sonic_clip.mp4",
    gridOrder: 2,
  },
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    date: "apr 2024 - oct 2024",
    description: "Supervised Learning",
    fullDescription:
      "A Light Gradient-Boosting Machine (LightGBM) model that predicts heart disease from imbalanced structured data.",
    imageUrl: "/images/heart_disease.png",
    gridOrder: 5,
  },
];

// Chronological order for timeline (original order)
export const timelineProjects = projects;

// Custom order for project grid
export const gridProjects = [...projects].sort(
  (a, b) => a.gridOrder - b.gridOrder
);
