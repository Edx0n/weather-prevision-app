"use client";

import { motion } from "framer-motion";

interface LocationButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const LocationButton = ({ onClick, isLoading }: LocationButtonProps): JSX.Element => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      disabled={isLoading}
      className="fixed top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      title="Use my location"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    </motion.button>
  );
};

