"use client";

import { motion } from "framer-motion";
import type { TemperatureUnit } from "@/types/weather";

interface UnitToggleProps {
  unit: TemperatureUnit;
  onToggle: () => void;
}

export const UnitToggle = ({ unit, onToggle }: UnitToggleProps): JSX.Element => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={onToggle}
      className="fixed top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white font-semibold hover:bg-white/30 transition-all"
    >
      °{unit === "celsius" ? "C" : "F"} → °{unit === "celsius" ? "F" : "C"}
    </motion.button>
  );
};

