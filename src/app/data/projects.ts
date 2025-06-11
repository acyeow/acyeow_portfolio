export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  gridOrder: number;
  role: string;
  collaborators: string[];
  tools: string[];
  additionalImages?: string[];
}

export const projects: Project[] = [
  {
    id: "changelog-ai",
    title: "changelog.ai",
    date: "feb 2025 - present",
    description: "AI Engineering",
    fullDescription:
      "Building an AI-powered developer onboarding tool that facilitates comprehensive understanding of GitHub repositories.",
    imageUrl: "/images/changelog_clip.mp4",
    gridOrder: 1,
    role: "AI Engineer",
    collaborators: ["Solo Project"],
    tools: ["Typescript", "Next.js", "OpenAI", "Vercel"],
    additionalImages: [
      "/images/changelog_dashboard.png",
      "/images/changelog_analysis.png",
      "/images/changelog_features.png",
    ],
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
    role: "Developer",
    collaborators: ["Calvin Lau", "James Hu", "Eugene Teng"],
    tools: ["Python"],
    additionalImages: [
      "/images/lstore_architecture.png",
      "/images/lstore_performance.png",
    ],
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
    role: "Software Engineer",
    collaborators: ["Solo Project"],
    tools: ["AWS, Python, Docker, FastAPI"],
    additionalImages: [
      "/images/mistique_interface.png",
      "/images/mistique_results.png",
    ],
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
    role: "Machine Learning Engineer",
    collaborators: ["Darroll Saddi", "Ryan Li"],
    tools: ["Gymnasium", "Python"],
    additionalImages: [
      "/images/sonic1.png",
      "/images/sonic2.png",
      "/images/sonic3.png",
      "/images/sonic4.png",
      "/images/sonic5.png",
      "/images/sonic6.png",
      "/images/sonic7.png",
      "/images/sonic8.png",
      "/images/sonic9.png",
      "/images/sonic10.png",
      "/images/sonic11.png",
      "/images/sonic12.png",
    ],
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
    role: "Data Scientist",
    collaborators: ["Solo Project"],
    tools: ["Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    additionalImages: [
      "/images/heart_analysis.png",
      "/images/heart_results.png",
    ],
  },
];

// Chronological order for timeline (original order)
export const timelineProjects = projects;

// Custom order for project grid
export const gridProjects = [...projects].sort(
  (a, b) => a.gridOrder - b.gridOrder
);
