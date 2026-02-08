"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data/techStack";

export default function TechStrip() {
  // Duplicate items for seamless loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="md:max-w-full max-w-[90vw]">
      {/* Section Heading */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 tracking-wide"
      >
        Tech I Build With
      </motion.p>

      {/* Tech Strip - Waterfall Marquee */}
      <div className="relative py-2">
        {/* Fade edges with enhanced gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 dark:from-gray-950 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 dark:from-gray-950 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-3 w-max py-1"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >
            {duplicatedStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    transition: { 
                      duration: 0.25, 
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                  style={{ transformOrigin: "center center" }}
                  className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full 
                    bg-gray-50/80 dark:bg-gray-800/60 
                    border border-gray-200/70 dark:border-gray-700/50
                    hover:border-blue-400/50 dark:hover:border-blue-500/50
                    hover:bg-white dark:hover:bg-gray-700/80
                    hover:shadow-lg hover:shadow-blue-500/15 dark:hover:shadow-blue-500/10
                    transition-all duration-300 ease-out cursor-default
                    flex-shrink-0 backdrop-blur-sm"
                >
                  {/* Glow ring effect */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  
                  <IconComponent
                    className="w-4 h-4 text-gray-600 dark:text-gray-400 
                      group-hover:text-blue-600 dark:group-hover:text-blue-400
                      transition-all duration-300
                      group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]"
                  />
                  <span
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 
                      group-hover:text-gray-900 dark:group-hover:text-white
                      transition-colors duration-300 whitespace-nowrap"
                  >
                    {tech.name}
                  </span>
                  
                  {/* Subtle underline animation */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-3/4 transition-all duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
