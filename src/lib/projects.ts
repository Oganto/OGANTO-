export type Project = {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  problem: string | null;
  role: string | null;
  technologies: string[];
  features: string[];
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
    problem:
      "Getting into a new blockchain ecosystem means scattered docs, threads and dashboards. StackMind pulls learning, project discovery and portfolio tracking into one assistant, so newcomers understand Stacks and its Bitcoin Layer 2 story without juggling ten tabs.",
    role: "Solo build — product, interface, backend and the AI layer.",
    technologies: [],
    features: [
      "AI assistant for learning about Stacks and Bitcoin Layer 2",
      "Project explorer for discovering what's being built on Stacks",
      "News and ecosystem updates",
      "Wallet portfolio tracking",
      "Security-focused guidance to help users stay safe from scams",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "ceessentials",
    name: "CEESSENTIALS",
    image: "/images/project-ceessentials.png",
    shortDescription:
      "A full online marketplace — like Jumia — where customers browse products and place orders across categories.",
    problem:
      "Small retailers sell through WhatsApp DMs and Instagram captions, which means no catalog, no order record and no way for a buyer to compare anything. CEESSENTIALS gives them a real storefront with categories, search and a checkout that accepts how Nigerians actually pay.",
    role: "Solo build — catalog, cart, checkout and order flow.",
    technologies: [
      "React",
      "React Router",
      "Firebase",
      "EmailJS",
      "Responsive CSS",
    ],
    features: [
      "Multi-category product catalog (Electronics, Fashion, Home & Kitchen, and more)",
      "Search across products, brands, and categories",
      "Deals, flash sales, and promotional sections",
      "Checkout with Opay and bank transfer support",
      "Order confirmation emails through EmailJS",
    ],
    liveUrl: "https://ceessentials.xyz/",
    githubUrl: "https://github.com/Oganto/ceessentials",
  },
  {
    slug: "take-over-tickets",
    name: "The Take Over Tickets",
    image: "/images/project-takeover.png",
    shortDescription:
      "An event ticketing platform with payment-proof submission, admin approval and QR ticket verification at the gate.",
    problem:
      "Event organisers in Nigeria sell tickets over bank transfer, then spend the day checking screenshots by hand and arguing at the gate about who paid and who did not. This replaces that with a submission-and-approval flow and a scan at the entrance.",
    role: "Solo build — ticketing flow, payment verification, admin dashboard and QR check-in.",
    technologies: [
      "React",
      "React Router",
      "Supabase",
      "Tailwind CSS",
      "ZXing (QR scanning)",
    ],
    features: [
      "Ticket tiers with selection and quantity control",
      "Payment proof upload instead of automatic card payment",
      "Admin dashboard to review and approve or reject each proof",
      "QR-coded tickets issued after approval",
      "In-browser QR scanning to verify a ticket at the gate",
    ],
    liveUrl: "https://the-take-over-tickets.vercel.app",
    githubUrl: "https://github.com/Oganto/TIcket-",
  },
  {
    slug: "eksu-bro-media",
    name: "EKSU Bro Media",
    image: "/images/project-eksubromedia.png",
    shortDescription:
      "A past-questions portal for Ekiti State University students to find and download verified exam materials.",
    problem:
      "Students hunt for past questions across WhatsApp groups, half-broken PDFs and seniors' phones. This puts verified papers in one searchable library so a student can find the right course code in seconds instead of begging in a group chat.",
    role: "Solo build — search, uploads, course-code filtering and the admin side.",
    technologies: ["React", "TypeScript", "TanStack", "Tailwind CSS", "Radix UI"],
    features: [
      "Search past questions by course code",
      "Verified, downloadable PDF question papers",
      "Trending course searches",
      "Campus blog and recent uploads feed",
    ],
    liveUrl: "https://bro-media-hub.vercel.app",
    githubUrl: "https://github.com/Oganto/bro-media-hub",
  },
];
