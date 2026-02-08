"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export default function HeroSection() {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden max-w-full"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Gradient Orbs - Enhanced with smoother, larger orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/15 dark:bg-blue-500/20 rounded-full blur-[60px] sm:blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-500/15 dark:bg-purple-500/20 rounded-full blur-[70px] sm:blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-pink-500/10 dark:bg-pink-500/15 rounded-full blur-[50px] sm:blur-[80px]"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Additional subtle cyan orb */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-cyan-500/8 dark:bg-cyan-500/12 rounded-full blur-[50px] sm:blur-[90px]"
          animate={{
            x: [0, -15, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] dark:opacity-[0.06]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.p
            className="text-blue-600 dark:text-blue-400 font-medium mb-4 tracking-widest uppercase text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent drop-shadow-sm">
              Akshat Jaiswal
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            Building scalable systems that create real-world impact.
Passionate about clean code, elegant solutions, and solving complex problems with technology.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleScroll("#projects")}
            >
              <span className="flex items-center gap-2">
                View Projects
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
}
