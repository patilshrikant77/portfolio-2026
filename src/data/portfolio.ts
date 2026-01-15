import { Code, Cloud, Cpu, Layers } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Shrikant Y. Patil",
  role: "Full Stack Engineer & Tech Lead",
  location: "Pune, Maharashtra, India",
  email: "patilshrikant77@gmail.com",
  phone: "+91 9921908214",
  linkedin: "https://www.linkedin.com/in/shrikant-patil-8a242541/",
  github: "https://github.com/patilshrikant77",
  bio: "Expert Full Stack Engineer with 12+ years of experience building high-performance, scalable user interfaces and backend systems. Specializing in Micro-Frontend Architecture, AI integration, and Cloud-Native solutions.",
};

export const SKILLS = [
  {
    category: "Frontend Architecture",
    items: ["React", "Next.js", "Angular", "Micro-frontends", "RxJS", "Tailwind CSS"],
    icon: Layers,
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Nest.js", "Java Spring Boot", "Python FastAPI", "Microservices"],
    icon: Code,
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "CI/CD Pipelines", "Monorepo (Nx)"],
    icon: Cloud,
  },
  {
    category: "Emerging Tech",
    items: ["Generative AI", "Prompt Engineering", "AI Integration", "Module Federation"],
    icon: Cpu,
  },
];

export const EXPERIENCE = [
  {
    company: "SS&C Technologies",
    role: "Lead Software Engineer",
    period: "Apr 2022 - Present",
    location: "Pune",
    description: "Leading development of scalable investment platforms. Implemented micro-frontend architecture reducing release cycles by 30%. Optimized backend for faster API routing.",
    tech: ["Angular", "React", "Node.js", "RxJS", "GraphQL"],
  },
  {
    company: "Hexaware Technologies",
    role: "System Analyst",
    period: "Sep 2018 - Mar 2022",
    location: "Pune",
    description: "Delivered impactful financial applications. Built RESTful APIs and microservices using Java Spring Boot and Node.js. Managed state with NgRx and RxJS.",
    tech: ["Angular", "Java Spring Boot", "AWS", "TypeScript"],
  },
  {
    company: "L&T Infotech",
    role: "Team Lead",
    period: "Oct 2015 - Aug 2018",
    location: "Pune",
    description: "Specialized in banking platforms and Enterprise CMS. Championed unified codebases with Angular/Ionic. Managed cross-functional teams and AWS integrations.",
    tech: ["Drupal", "Ionic", "Angular", "AWS"],
  },
  {
    company: "Kivee Web Solution",
    role: "Senior Web Developer",
    period: "Nov 2013 - Sep 2015",
    location: "Pune",
    description: "Developed custom web solutions and dynamic admin panels. Integrated third-party APIs (Google Maps, PayPal) and built custom WordPress themes.",
    tech: ["PHP", "WordPress", "JavaScript", "CodeIgniter"],
  },
];

export const IMPACT_HIGHLIGHTS = [
  {
    title: "Architectural Modernization",
    desc: "Spearheaded transition from legacy monoliths to Micro-Frontend/Services, reducing deployment complexity.",
  },
  {
    title: "High-Scale System Design",
    desc: "Architected resilient cloud-native solutions on AWS/Azure achieving 99.99% system availability.",
  },
  {
    title: "Engineering Leadership",
    desc: "Built high-performing teams and established automated CI/CD pipelines, reducing release cycles by 40%.",
  },
];

// This was the missing part causing your error
export const PROJECTS = [
  {
    title: "Sagun - Matrimony Platform",
    description: "A high-concurrency matchmaking platform. Engineered a scalable backend to handle complex preference matching algorithms while ensuring strict user privacy and data security.",
    tech: ["Expo SDK 54", "React Native 0.81", "Expo Router", "React Native Web", "Express.js", "Node.js"],
    link: "https://github.com/patilshrikant77", 
    isFeature: true, 
  },
  {
    title: "Micro-Frontend Dashboard",
    description: "An enterprise-grade dashboard using Webpack Module Federation. Decomposed a monolithic admin panel into independent sub-apps (Auth, Analytics, Settings) for independent deployment.",
    tech: ["Next.js", "Webpack 5", "Module Federation", "TypeScript"],
    link: "#",
    isFeature: false,
  },
  {
    title: "AI Storytelling Assistant",
    description: "A Generative AI web app that creates children's stories on the fly. Utilizes local LLM processing (Ollama) for privacy and lower latency responses.",
    tech: ["React", "Ollama", "WebSockets", "Tailwind"],
    link: "#",
    isFeature: false,
  },
];