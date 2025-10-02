"use client";

import { motion } from "framer-motion";
import { Thermometer } from "lucide-react";
import type { TemperatureUnit } from "@/types/weather";

interface UnitToggleProps {
  unit: TemperatureUnit;
  onToggle: () => void;
}

export const UnitToggle = ({ unit, onToggle }: UnitToggleProps): JSX.Element => {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onToggle}
      className="fixed top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-3 text-white font-semibold hover:bg-white/30 hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
    >
      <Thermometer className="w-5 h-5" />
      <span>°{unit === "celsius" ? "C" : "F"}</span>
    </motion.button>
  );
};

