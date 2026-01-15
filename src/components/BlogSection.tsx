"use client";
import { BLOGS } from "@/data/blogs";
import { ArrowUpRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-white/5 transition-colors">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white flex items-center gap-3 transition-colors">
        Latest Thoughts <span className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 px-2 py-1 rounded-full">New</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOGS.map((blog) => (
          <div key={blog.id} className="group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm text-gray-500 font-mono">{blog.date} • {blog.readTime}</span>
              <ArrowUpRight className="text-gray-400 group-hover:text-blue-500 transition" size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{blog.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">{blog.excerpt}</p>
            <div className="flex gap-2">
              {blog.tags.map(tag => (
                <span key={tag} className="text-xs text-gray-500 border border-gray-200 dark:border-white/10 px-2 py-1 rounded">#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}