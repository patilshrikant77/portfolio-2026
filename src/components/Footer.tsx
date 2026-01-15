"use client";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">Let&apos;s Connect</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-lg mb-8 transition-colors">Currently exploring new opportunities in High-Level Design and AI Integration.</p>
        <div className="flex gap-8 mb-12">
          {[
            { icon: Github, link: PERSONAL_INFO.github, color: "hover:bg-black hover:border-black" },
            { icon: Linkedin, link: PERSONAL_INFO.linkedin, color: "hover:bg-[#0077b5] hover:border-[#0077b5]" },
            { icon: Mail, link: `mailto:${PERSONAL_INFO.email}`, color: "hover:bg-green-600 hover:border-green-600" }
          ].map((item, i) => (
            <a key={i} href={item.link} target="_blank" className={`p-3 rounded-full transition-all duration-300 bg-white border border-gray-200 text-gray-700 hover:text-white dark:bg-white/5 dark:border-transparent dark:text-white ${item.color}`}>
              <item.icon size={24} />
            </a>
          ))}
        </div>
        <div className="text-center text-gray-500 dark:text-gray-600 text-sm transition-colors">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Built with Next.js 15, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}