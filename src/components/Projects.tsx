"use client";
import { PROJECTS } from "@/data/portfolio";
import { Github, ExternalLink, Folder } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white transition-colors">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className={`group relative p-8 rounded-3xl transition-all duration-300 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-blue-400/50 dark:hover:border-neutral-600 ${project.isFeature ? 'md:col-span-2 bg-gradient-to-br from-blue-50 to-white dark:from-neutral-900 dark:to-blue-900/20' : ''}`}>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-100 dark:bg-white/5 rounded-full text-blue-600 dark:text-blue-400 transition-colors"><Folder size={24} /></div>
              <div className="flex gap-4">
                {project.link && <Link href={project.link} target="_blank" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition"><Github size={20} /></Link>}
                <Link href="#" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition"><ExternalLink size={20} /></Link>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 transition-colors text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 text-xs rounded-full transition-colors bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}