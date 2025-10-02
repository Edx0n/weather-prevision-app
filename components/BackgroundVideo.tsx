"use client";

import { useEffect, useState } from "react";
import { getWeatherBackground } from "@/utils/weatherUtils";

interface BackgroundVideoProps {
  condition: string;
}

export const BackgroundVideo = ({ condition }: BackgroundVideoProps): JSX.Element => {
  const [gradient, setGradient] = useState<string>("from-blue-500 via-blue-400 to-blue-300");

  useEffect(() => {
    setGradient(getWeatherBackground(condition));
  }, [condition]);

  return (
    <div className={`fixed inset-0 -z-10 bg-gradient-to-br ${gradient} transition-all duration-1000`}>
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

