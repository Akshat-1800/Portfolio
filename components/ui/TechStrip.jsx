"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data/techStack";

export default function TechStrip() {
  // Duplicate items for seamless loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="w-full">
      {/* Section Heading */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 tracking-wide"
      >
        Tech I Build With
      </motion.p>

      {/* Tech Strip - Waterfall Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-3 w-max"
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
                  scale: 1.05,
                  y: -4,
                  transition: { 
                    duration: 0.3, 
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="group flex items-center gap-2 px-4 py-2 rounded-full 
                  bg-gray-100 dark:bg-gray-800/80 
                  border border-gray-200 dark:border-gray-700/50
                  hover:border-blue-300 dark:hover:border-blue-500/50
                  hover:bg-white dark:hover:bg-gray-700/90
                  hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5
                  transition-all duration-300 ease-out cursor-default
                  flex-shrink-0"
              >
                <IconComponent
                  className="w-4 h-4 text-gray-600 dark:text-gray-400 
                    group-hover:text-blue-600 dark:group-hover:text-blue-400
                    transition-colors duration-300"
                />
                <span
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 
                    group-hover:text-gray-900 dark:group-hover:text-white
                    transition-colors duration-300 whitespace-nowrap"
                >
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
