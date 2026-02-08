"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "../ui/Section";

const exploringItems = [
  {
    id: 1,
    name: "Data Structures & Algorithms",
    description: "Efficient coding patterns and problem-solving techniques",
    icon: "📚",
  },
  {
    id: 2,
    name: "Machine Learning",
    description: "Deep learning and neural networks",
    icon: "🤖",
  },
  {
    id: 3,
    name: "AWS & Cloud Computing",
    description: "Scalable infrastructure and cloud services",
    icon: "☁️",
  },
  {
    id: 4,
    name: "Blockchain",
    description: "Decentralized applications",
    icon: "⛓️",
  },
  {
    id: 5,
    name: "System Design",
    description: "Distributed systems architecture",
    icon: "🏗️",
  },
  {
    id: 6,
    name: "WebRTC & Real-Time Communication",
    description: "Building real-time applications",
    icon: "📡",
  },
];

export default function ExploringSection() {
  return (
    <SectionWrapper id="exploring" className="bg-gray-50/50 dark:bg-gray-900/30 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <SectionHeader
        title="Currently Exploring"
        subtitle="Technologies and concepts I'm actively learning"
      />

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {exploringItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/80 dark:border-gray-700/60 shadow-sm transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ 
              scale: 1.03, 
              y: -6,
              boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.1), 0 0 25px -10px rgba(59, 130, 246, 0.12), 0 20px 40px -15px rgba(0, 0, 0, 0.1)"
            }}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative flex items-start gap-4">
              <motion.span 
                className="text-3xl group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {item.icon}
              </motion.span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
