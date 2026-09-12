// Central content for the site. Edit here — components read from this file.
// Anything marked TODO is a placeholder you should replace with real info.

export const identity = {
  realName: "Oginni Isreal",
  brandName: "Oganto",
  positioning: [
    "Full-Stack Developer",
    "AI Application Developer",
    "AI Trainer",
    "Prompt Engineer",
  ],
  intro:
    "I build modern digital products and AI-powered solutions — from full-stack web platforms to intelligent, LLM-driven tools that solve real problems.",
  heroPhoto: "/images/oginni-hero.jpg",
  avatar: "/images/oganto-avatar.jpg",
};

export const contact = {
  email: "tomilolaisraeloginni@gmail.com",
  twitter: "https://x.com/oganto_",
  // TODO: add GitHub and LinkedIn URLs when ready
  github: null as string | null,
  linkedin: "https://www.linkedin.com/in/israel-oginni-206071433",
};

export const whatIDo = [
  {
    title: "Full-Stack Development",
    description:
      "Designing and building complete web applications — from responsive frontends to robust backend systems and APIs.",
  },
  {
    title: "AI Application Development",
    description:
      "Building products powered by LLMs — from AI copilots to intelligent assistants that solve real, practical problems.",
  },
  {
    title: "AI Training",
    description:
      "Working with AI tools and workflows to train, guide, and refine how models perform in real-world applications.",
  },
  {
    title: "Prompt Engineering",
    description:
      "Crafting precise, structured prompts that get reliable, high-quality output from language models.",
  },
];

// TODO: confirm this list — only keep what you actually use, add anything missing
export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  backend: ["Node.js", "APIs", "Databases", "Authentication"],
  ai: [
    "LLM APIs",
    "Prompt Engineering",
    "AI Application Development",
    "AI Workflows",
    "RAG & AI Integrations",
  ],
};

// TODO: flesh out with real milestones (when you started, key turning points, what you're learning now)
export const journey = {
  summary:
    "Over 1 year of hands-on experience building full-stack and AI-powered products — a journey that's still just getting started.",
  milestones: [
    {
      label: "Now",
      description:
        "Over 1 year in, building full-stack platforms and AI-powered applications like StackMind.",
    },
  ],
};

export const aiFocus = {
  heading: "Building with AI, not just talking about it",
  description:
    "I work hands-on with modern AI tools and LLM-powered applications — designing products where AI is the core of the experience, not a bolted-on feature.",
  points: [
    "AI copilots and assistants (e.g. StackMind)",
    "Prompt engineering for reliable, structured LLM output",
    "Integrating LLM APIs into full-stack products",
    "AI-driven workflows and automation",
  ],
};
