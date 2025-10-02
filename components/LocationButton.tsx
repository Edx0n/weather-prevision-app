"use client";

import { motion } from "framer-motion";
import { MapPin, Loader2 } from "lucide-react";

interface LocationButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const LocationButton = ({ onClick, isLoading }: LocationButtonProps): JSX.Element => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      disabled={isLoading}
      className="fixed top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 text-white hover:bg-white/30 hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
      title="Use my location"
    >
      {isLoading ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : (
        <MapPin className="w-6 h-6" />
      )}
    </motion.button>
  );
};

