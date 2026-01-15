"use client";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white transition-colors">Professional Journey</h2>
      <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12 transition-colors">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors">{exp.role}</h3>
              <span className="text-gray-500 font-mono text-sm blur-sm hover:blur-none transition-all cursor-pointer">{exp.period}</span>
            </div>
            <div className="text-lg text-blue-600 dark:text-blue-400 mb-4 blur-md hover:blur-none transition-all cursor-pointer font-medium">{exp.company}</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-3xl leading-relaxed transition-colors">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-700 border border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/10">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}