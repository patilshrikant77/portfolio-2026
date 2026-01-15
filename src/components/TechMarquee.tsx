"use client";
import React from "react";

// 1. FULL TECH LIST FROM RESUME
const INNER_ORBIT = [
  "React", "Next.js", "Angular", "React Native", "Expo", 
  "TypeScript", "Tailwind CSS", "RxJS", "Redux", "Framer Motion",
  "Micro-frontends", "Module Federation", "Webpack 5"
];

const OUTER_ORBIT = [
  "Node.js", "Java Spring Boot", "Python FastAPI", "Nest.js", 
  "AWS", "Azure", "Docker", "Kubernetes", "CI/CD", 
  "MongoDB", "Redis", "GraphQL", "PostgreSQL", 
  "Generative AI", "Prompt Engineering"
];

export default function TechMarquee() {
  return (
    <section className="py-24 overflow-hidden relative flex items-center justify-center min-h-[600px] bg-gray-50/50 dark:bg-black/50 transition-colors">
      
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      {/* CORE: The Center Piece */}
      <div className="absolute z-10 p-4 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tech Stack
        </span>
      </div>

      {/* INNER ORBIT: Frontend & Mobile (Clockwise) */}
      <div className="absolute animate-spin-slow w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-gray-300/30 dark:border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-none">
        {INNER_ORBIT.map((tech, i) => {
          const angle = (360 / INNER_ORBIT.length) * i;
          return (
            <div
              key={tech}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(175px) rotate(-${angle}deg)`, // Adjust 175px for radius
              }}
            >
              {/* Counter-rotate text so it stays upright while orbiting */}
              <div className="animate-reverse-spin-slow">
                <TechBadge text={tech} />
              </div>
            </div>
          );
        })}
      </div>

      {/* OUTER ORBIT: Backend & Cloud (Counter-Clockwise) */}
      <div className="absolute animate-reverse-spin-slower w-[550px] h-[550px] md:w-[700px] md:h-[700px] rounded-full border border-gray-300/30 dark:border-white/5 border-dashed opacity-80">
        {OUTER_ORBIT.map((tech, i) => {
          const angle = (360 / OUTER_ORBIT.length) * i;
          return (
            <div
              key={tech}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(275px) rotate(-${angle}deg)`, // Adjust 275px for radius
              }}
            >
               <div className="animate-spin-slower">
                <TechBadge text={tech} />
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
}

// Reusable Tech Badge Component
function TechBadge({ text }: { text: string }) {
  return (
    <span className="
      inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap
      bg-white dark:bg-neutral-900 
      border border-gray-200 dark:border-neutral-800
      text-gray-700 dark:text-gray-300
      shadow-sm hover:scale-110 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 cursor-default
    ">
      {text}
    </span>
  );
}