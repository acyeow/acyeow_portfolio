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
      "A reimplementation of L-Store, a lineage-based Hybrid Transactional/Analytical Processing (HTAP) database. [ECS 165A]",
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
        caption: "Record storage structure with lineage information.",
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
      To create the embeddings for the vector database, Amazon Bedrock embeddings are created from overlaping chunks of text from the source pdf. 
      Cosine similarity is used to compute the relevance between the prompt embedding and embeddings saved to the ChromaDB. This functionality 
      is wrapped in a FastAPI endpoint which has been deployed as an AWS Lambda function. AWS Lambda has a cold start so the inital request will 
      take longer but subsequent request will be processed more quickly. AWS CDK was used to provison resources for support this functionality. 
      The frontend of this application was created using Next.js, Tailwind CSS, and Shadcn and deployed to Vercel. The frontend allows users to ask questions, 
      which are processed asynchronously, about the Mistral7B paper and see the relevant sections of the paper that were used to answer the question.
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
    projectDescription: `In this project, we implemented a Proximal Policy Optimization (PPO) agent that plays the first level of Sonic the Hedgehog. To create the 
      enviornment, we used the Gymnasium libary. We also used some preprocessing wrappers from stable-baselines3 to enable the actor-critic neural network feedback loop,
      reduce feature dimensionaity, and allow for concurrent agent training. Ultimately, we achieved the best completion rate of 78% overall and 83% when ignoring the first
      20% of training runs. We used a 3 pass method in which each pass used a slightly different reward function. Our project implementation and presentation recieved high 
      remarks from the professor.
      `,
    imageUrl: "/images/sonic_clip.mp4",
    gridOrder: 2,
    role: "Machine Learning Engineer",
    collaborators: ["Darroll Saddi", "Ryan Li"],
    tools: ["Gymnasium", "Python", "PyTorch"],
    additionalImages: [
      {
        url: "/images/sonic1.png",
        caption: `PPO is an actor-critic algorithm, which means that it uses two neural networks to approximate the policy and value functions. In actor-critic models, the actor controls which action the agent should take by executing the policy, while the critic returns a value that represents how good that action was in the state it was taken in. `,
      },
      {
        url: "/images/sonic2.png",
        caption: `The Surrogate Objective Function's main purpose is to keep policy updates within a trust region (to ensure stable training), using clipping within the range [1 - ϵ, 1 + ϵ], where ϵ is the hyperparameter that determines the allowed deviation between the new and old policy.
        
        The Probablity Ratio is primarily how the algorithm compares the current policy, πθ, and the previous policy, πθ old. By simply dividing the probability that the current policy chooses action a_t in some state s_t by the probability that the old policy chooses the same action in that state, we can quantify how much the input action influenced the policy. A resultant value greater than 1 indicates the action a_t in the state s_t is more likely than the average action, and is therefore better. Conversely, a value less than 1 means the action is worse.

        Genralized Advantage Estimation (GAE) is used to calculate advantage, a measure of how much better (or worse) an action is in comparison to the expected return from the current policy, AKA the average action. At a high level, GAE significantly reduces variance (policy updates that are too large) while maintaining a tolerable level of bias (maintaining aspects of the current policy).
        `,
      },
      {
        url: "/images/sonic3.png",
        caption:
          "To preprocess game frames we passed them to the Frame Stacker, Observer, Action Mapper, adn Frame Skipper.",
      },
      {
        url: "/images/sonic4.png",
        caption: `The Frame Stacker was used so the agent could recognize a time dimension.
            
            The Frame Observer was used to feed game snapshots into a Convolutional Neural Network (CNN) reducing feature dimensionality, therby speeding up training. 
            
            The Action Mapper was used to create a discrete one-hot encoded action space.
            
            The Frame Skipper was used to periodically skip frames, allowing for faster training and less overfitting. 
        `,
      },
      {
        url: "/images/sonic5.png",
        caption:
          "The preprocessed frames were passed to a Convolutional Neural Network to extract features. These features were passed to the fully connected layers which outputed the a probality distribution over the actions and a estimated value of the current state. ",
      },
      {
        url: "/images/sonic6.png",
        caption: "",
      },
      {
        url: "/images/sonic7.png",
        caption:
          "Due to initial hyperparameters, the agent got stuck on the loop obstacle. This meant that it was entering an exploitation phase too early, so to encourage more initial exploration, we increased entropy and reduced the learning rate.",
      },
      {
        url: "/images/sonic8.png",
        caption:
          "Our initial results, using a reward function that did not punish lack of progess, resulted in a 43% winrate.",
      },
      {
        url: "/images/sonic9.png",
        caption: `To further control the exporation-exploitation tradeoff, we used a 3 pass method. The first pass did not punish lack of progress, the second did punish lack of progress, and the third added additional reward for faster completion times.
          
          This 3 pass method, yielded a 78% winrate.
          `,
      },
      {
        url: "/images/sonic10.png",
        caption:
          "To validate our results, we retrained agents using each of the reward functions, individually. We found that the pass 3 reward function yielded the same results as our 3 pass method.",
      },
      {
        url: "/images/sonic11.png",
        caption:
          "Using only the pass 3 reward function, we achieved a similar winrate as before.",
      },
      {
        url: "/images/sonic12.png",
        caption: `We want AI-agents that can discover like we can, not which contain what we have already discovered.
        
        Through the work conducted in this project, we learned that implementing human ingenuity should not be the focus of practioning AI, but rather the focus should be on the learning process itself.
        `,
      },
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
