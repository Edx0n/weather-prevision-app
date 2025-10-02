"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2 } from "lucide-react";

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps): JSX.Element => {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mb-8"
    >
      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="w-full pl-14 pr-24 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !city.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-white/30 hover:bg-white/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 text-white animate-spin" />
          ) : (
            <span className="text-white font-medium">Go</span>
          )}
        </button>
      </div>
    </motion.form>
  );
};

