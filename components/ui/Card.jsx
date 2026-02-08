"use client";

import { motion } from "framer-motion";

export function Card({ 
  children, 
  className = "", 
  hover = true,
  glow = false,
  ...props 
}) {
  return (
    <motion.div
      className={`relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 dark:border-gray-800/60 shadow-sm transition-all duration-300 ${glow ? 'card-glow' : ''} ${className}`}
      whileHover={hover ? { 
        y: -6, 
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      } : {}}
      style={hover ? {
        boxShadow: undefined
      } : undefined}
      onHoverStart={hover ? (e) => {
        e.currentTarget.style.boxShadow = "0 0 0 1px rgba(59, 130, 246, 0.1), 0 0 30px -5px rgba(59, 130, 246, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.15)";
      } : undefined}
      onHoverEnd={hover ? (e) => {
        e.currentTarget.style.boxShadow = "";
      } : undefined}
      {...props}
    >
      {/* Gradient border overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
        style={{ padding: '1px' }}
      />
      {children}
    </motion.div>
  );
}

export function CardImage({ src, alt, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-t-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
