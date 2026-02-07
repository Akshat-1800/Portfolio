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
    <SectionWrapper id="exploring" className="bg-gray-50 dark:bg-gray-900/50">
      <SectionHeader
        title="Currently Exploring"
        subtitle="Technologies and concepts I'm actively learning"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {exploringItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{item.icon}</span>
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
