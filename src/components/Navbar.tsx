"use client";
import Link from 'next/link';
import { ThemeToggle } from "./ThemeToggle"; 

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/50 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Shrikant Patil
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {/* Links: Text-Gray-900 (Light Mode) | Text-Gray-300 (Dark Mode) */}
            {['About', 'Experience', 'Projects'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}