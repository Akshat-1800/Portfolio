"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "../ui/Section";
import { Button } from "../ui/Button";
import { codingProfiles } from "../../lib/data/codingProfiles";

function CodingProfileCard({ profile, index }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "leetcode":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
        );
      case "codeforces":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
          </svg>
        );
      case "github":
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const getStats = (profile) => {
    switch (profile.platform) {
      case "LeetCode":
        return [
          { label: "Problems Solved", value: profile.stats.solved },
          { label: "Ranking", value: profile.stats.ranking },
          { label: "Rating", value: profile.stats.rating },
        ];
      case "Codeforces":
        return [
          { label: "Problems Solved", value: profile.stats.solved },
          { label: "Rank", value: profile.stats.ranking },
          { label: "Rating", value: profile.stats.rating },
        ];
      case "GitHub":
        return [
          { label: "Repositories", value: profile.stats.repositories },
          { label: "Contributions", value: profile.stats.contributions },
          { label: "Stars", value: profile.stats.stars },
        ];
      default:
        return [];
    }
  };

  return (
    <motion.div
      className="group relative bg-white/95 dark:bg-gray-800/95 rounded-2xl p-6 border border-gray-100/80 dark:border-gray-700/60 shadow-lg transition-all duration-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ 
        y: -6,
        boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.1), 0 0 30px -10px rgba(59, 130, 246, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
    >
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {/* Header */}
      <div className="relative flex items-center gap-4 mb-6">
        <motion.div
          className="p-3 rounded-xl transition-all duration-200 group-hover:scale-105"
          style={{ backgroundColor: `${profile.color}15`, color: profile.color }}
          whileHover={{ scale: 1.08 }}
        >
          <span className="transition-colors duration-200">
            {getIcon(profile.icon)}
          </span>
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {profile.platform}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            @{profile.username}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="relative grid grid-cols-3 gap-4 mb-6">
        {getStats(profile).map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Action */}
      <Button
        variant="secondary"
        href={profile.profileUrl}
        target="_blank"
        className="w-full"
      >
        <span className="flex items-center justify-center gap-2">
          View Profile
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      </Button>
    </motion.div>
  );
}

export default function CodingProfilesSection() {
  return (
    <SectionWrapper id="coding" className="bg-white/50 dark:bg-gray-950/50 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[250px] bg-blue-500/4 dark:bg-blue-500/8 rounded-full blur-2xl transform-gpu" />
      </div>
      
      <SectionHeader
        title="Coding Profiles"
        subtitle="My presence across competitive programming platforms"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {codingProfiles.map((profile, index) => (
          <CodingProfileCard key={profile.id} profile={profile} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
