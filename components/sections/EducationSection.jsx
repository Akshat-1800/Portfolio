"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "../ui/Section";

const educationData = [
  {
    id: 1,
    year: "2023 - 2027",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Vellore Institute of Technology Bhopal",
    details: "CGPA: 8.45/10",
  },
  {
    id: 2,
    year: "2023",
    degree: "Higher Secondary Education",
    institution: "St. Joseph's College, Prayagraj",
    details: "ISC Board. Science stream (PCM) with Computer Science. Scored 89.5%.",
  },
  {
    id: 3,
    year: "2021",
    degree: "Secondary Education",
    institution: "St. Joseph's College, Prayagraj",
    details: "ICSE Board — Completed Secondary Education. Percentage: 94.2%",
  },
];

export default function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-gray-50/50 dark:bg-gray-900/30 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl" />
      </div>
      
      <SectionHeader
        title="Education"
        subtitle="My academic journey and qualifications"
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <motion.div
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/80 dark:border-gray-700/60 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.1), 0 0 30px -10px rgba(59, 130, 246, 0.15), 0 20px 40px -15px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {item.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.details}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-white dark:border-gray-900 shadow-lg shadow-blue-500/30"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
