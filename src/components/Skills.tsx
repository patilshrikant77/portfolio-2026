"use client";
import { SKILLS, IMPACT_HIGHLIGHTS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white transition-colors">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl transition-colors duration-300 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-neutral-700">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400"><Icon size={24} /></div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-800/50 pb-1 last:border-0">{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {IMPACT_HIGHLIGHTS.map((highlight, idx) => (
          <div key={idx} className="p-6 rounded-2xl transition-colors duration-300 bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:to-black border border-gray-200 dark:border-neutral-800 shadow-sm dark:shadow-none">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">{highlight.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{highlight.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}