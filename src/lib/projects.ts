export type Project = {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  problem: string | null; // TODO if null
  role: string | null; // TODO if null
  technologies: string[]; // TODO if empty
  features: string[]; // TODO if empty
  liveUrl: string | null;
  githubUrl: string | null;
};

// Ordered deliberately: AI-first, then full-stack scale, then real-world impact.
export const projects: Project[] = [
  {
    slug: "stackmind",
    name: "StackMind",
    image: "/images/project-stackmind.png",
    shortDescription:
      "An AI copilot for the Stacks blockchain ecosystem — learn, explore projects, and track your portfolio in one place.",
    problem: null, // TODO: add the specific problem StackMind solves
    role: "Built both the frontend and backend.",
    technologies: [], // TODO: add tech stack
    features: [
      "AI assistant for learning about Stacks and Bitcoin Layer 2",
      "Project explorer for discovering what's being built on Stacks",
      "News and ecosystem updates",
      "Wallet portfolio tracking",
      "Security-focused guidance to help users stay safe from scams",
    ],
    liveUrl: null, // TODO
    githubUrl: null, // TODO
  },
  {
    slug: "ceessentials",
    name: "CEESSENTIALS",
    image: "/images/project-ceessentials.png",
    shortDescription:
      "A full online marketplace — like Jumia — where customers browse products and place orders across categories.",
    problem: null, // TODO
    role: null, // TODO
    technologies: [], // TODO
    features: [
      "Multi-category product catalog (Electronics, Fashion, Home & Kitchen, and more)",
      "Search across products, brands, and categories",
      "Deals, flash sales, and promotional sections",
      "Checkout with Opay and bank transfer support",
    ],
    liveUrl: "https://ceessentials.xyz/",
    githubUrl: null, // TODO
  },
  {
    slug: "eksu-bro-media",
    name: "EKSU Bro Media",
    image: "/images/project-eksubromedia.png",
    shortDescription:
      "A past-questions portal for Ekiti State University students to find and download verified exam materials.",
    problem: null, // TODO
    role: null, // TODO
    technologies: [], // TODO
    features: [
      "Search past questions by course code",
      "Verified, downloadable PDF question papers",
      "Trending course searches",
      "Campus blog and recent uploads feed",
    ],
    liveUrl: null, // TODO
    githubUrl: null, // TODO
  },
];
