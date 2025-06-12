export interface ProjectImage {
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  fullDescription: string;
  projectDescription: string;
  imageUrl: string;
  gridOrder: number;
  role: string;
  collaborators: string[];
  tools: string[];
  additionalImages?: (string | ProjectImage)[];
  github?: string;
  website?: string;
  citations?: string[];
}

export const projects: Project[] = [
  {
    id: "changelog-ai",
    title: "changelog.ai",
    date: "feb 2025 - present",
    description: "AI Engineering",
    fullDescription:
      "Building an AI-powered developer onboarding tool that facilitates comprehensive understanding of GitHub repositories.",
    projectDescription: "",
    imageUrl: "/images/changelog_clip.mp4",
    gridOrder: 4,
    role: "AI Engineer",
    collaborators: ["Solo Project"],
    tools: ["Typescript", "Next.js", "OpenAI"],
    additionalImages: [],
    github: "https://github.com/acyeow/changelog.ai",
    website: "https://changelog-ai-rpsg.vercel.app/",
  },
  {
    id: "l-store-db",
    title: "L-Store DB",
    date: "jan 2025 - mar 2025",
    description: "Database Systems",
    fullDescription:
      "A lineage-based Hybrid Transactional/Analytical Processing (HTAP) database from scratch. [ECS 165A]",
    projectDescription: "",
    imageUrl: "/images/lstore_merge.png",
    gridOrder: 3,
    role: "Python Developer",
    collaborators: ["Calvin Lau", "James Hu", "Eugene Teng"],
    tools: ["Python"],
    additionalImages: [
      {
        url: "/images/lstore1.PNG",
        caption: "L-Store base and tail records intuition.",
      },
      {
        url: "/images/lstore2.PNG",
        caption: "Record storage structure with lineage information",
      },
      {
        url: "/images/lstore3.PNG",
        caption: "Base record points to tail record via indirection.",
      },
      {
        url: "/images/lstore4.PNG",
        caption:
          "On update, base record points to new tail record and new tail record points to old tail record.",
      },
      {
        url: "/images/lstore5.PNG",
        caption: "Merge process to consolidate base and tail records.",
      },
      {
        url: "/images/lstore6.PNG",
        caption: "Merge is performed asynchronously in the background.",
      },
      {
        url: "/images/lstore7.PNG",
        caption: "Epoch-based base page dealocation to reclaim space.",
      },
    ],
    github: "https://github.com/acyeow/165a-l-store-project",
    citations: [
      "Sadoghi, Mohammad, et al. 'L-Store: A Real-time OLTP and OLAP System.' arXiv preprint arXiv:1601.04084 (2016). https://arxiv.org/pdf/1601.04084",
      "ECS 165A Course Materials: 'L-Store Storage Architecture.' UC Davis, Winter 2025. https://expolab.org/ecs165a-winter2025/lectures/L-Store%20Storage%20Architecture.pdf",
    ],
  },
  {
    id: "mistique",
    title: "mistique",
    date: "sept 2024 - nov 2024",
    description: "Retrieval Augmented Generation",
    fullDescription:
      "A Retrieval Augmented Generation (RAG) Q/A system for the Mistral7B paper.",
    projectDescription: `
      mistique allows users to ask questions about the Mistral7B reserach paper thorugh a Retrival Augmented Generation (RAG) pipeline. 
      This application uses ChromaDB to create a vector database, which will be queried to find relevant information to the prompt. 
      To create the embeddings for the vector database, Amazon Bedrock embeddings are used and cosine similarity is used to compute the 
      similarity between the prompt embedding and embeddings saved to the ChromaDB. This functionality is wrapped in a FastAPI endpoint 
      which has been deployed as an AWS Lambda function. AWS CDK was used to provison resources for support this functionality. The 
      frontend of this application was created using Next.js and deployed to Vercel.
      `,
    imageUrl: "/images/mistique_homepage.png",
    gridOrder: 1,
    role: "Software Engineer",
    collaborators: ["Solo Project"],
    tools: ["AWS", "Docker", "FastAPI"],
    additionalImages: [
      {
        url: "/images/mistique_question.png",
        caption: "Question answer UI showing RAG sources.",
      },
      { url: "/images/mistique1.PNG", caption: "FastAPI endpoints." },
      {
        url: "/images/mistique2.PNG",
        caption: "Asking a question using the /submit_query endpoint.",
      },
      {
        url: "/images/mistique3.PNG",
        caption:
          "Getting a query_id back as backend processes the request asynchronously.",
      },
      {
        url: "/images/mistique4.PNG",
        caption: "Passing the query_id back via the /get_query endpoint.",
      },
      {
        url: "/images/mistique5.PNG",
        caption: "Getting the response back from the /get_query endpoint.",
      },
    ],
    github: "https://github.com/acyeow/mistique",
    website: "https://deploy-rag-to-aws-mu.vercel.app/",
  },
  {
    id: "sonic-gameplaying-ai",
    title: "Sonic Gameplaying AI",
    date: "mar 2024 - jun 2024",
    description: "Reinforcement Learning",
    fullDescription:
      "A Proximal Policy Optimization (PPO) agent that plays Sonic the Hedgehog. [ECS 170]",
    projectDescription: "",
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
    github: "https://github.com/Iemontine/SonicGameplayingAI",
  },
  // {
  //   id: "heart-disease-prediction",
  //   title: "Heart Disease Prediction",
  //   date: "apr 2024 - oct 2024",
  //   description: "Supervised Learning",
  //   fullDescription:
  //     "A Light Gradient-Boosting Machine (LightGBM) model that predicts heart disease from imbalanced structured data.",
  //   projectDescription: "",
  //   imageUrl: "/images/heart_disease.png",
  //   gridOrder: 5,
  //   role: "Data Scientist",
  //   collaborators: ["Solo Project"],
  //   tools: ["Pytorch", "Pandas", "NumPy"],
  //   additionalImages: [],
  // },
];

// Chronological order for timeline (original order)
export const timelineProjects = projects;

// Custom order for project grid
export const gridProjects = [...projects].sort(
  (a, b) => a.gridOrder - b.gridOrder
);
