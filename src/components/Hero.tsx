"use client";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-12 relative overflow-hidden pt-20 max-w-7xl mx-auto">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      {/* Left Side: Text */}
      <div className="max-w-3xl z-10 md:pr-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium tracking-wide transition-colors">
            {PERSONAL_INFO.location}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight text-gray-900 dark:text-white transition-colors">
            {PERSONAL_INFO.name} <br />
            <span className="text-gray-500 dark:text-gray-400 transition-colors">Full Stack Engineer.</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed transition-colors">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex gap-4">
            <a 
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Contact Me <ArrowRight size={20} />
            </a>
            
            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Resume Access`}
              className="px-8 py-3 rounded-full font-semibold border flex items-center gap-2 transition-colors border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Request Resume <Lock size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Photo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 md:mt-0 relative"
      >
        <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <Image 
            src="/profile.png" 
            alt="Shrikant Patil"
            fill
            className="rounded-full border-4 shadow-2xl object-cover border-gray-200 dark:border-white/10 transition-all duration-500 grayscale-0 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          />
        </div>
      </motion.div>
    </section>
  );
}