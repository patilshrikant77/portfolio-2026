"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Fix: This pattern is safe for hydration mismatch handling.
  // We use useEffect to ensure code runs only on the client.
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Return a placeholder or null during server-side rendering
  if (!mounted) {
    return <div className="w-9 h-9" />; // Prevents layout shift
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Moon className="w-5 h-5 text-white" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? -180 : 0, scale: isDark ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Sun className="w-5 h-5 text-black" />
        </motion.div>
      </div>
    </button>
  );
}