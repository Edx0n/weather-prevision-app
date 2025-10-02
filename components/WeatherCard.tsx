"use client";

import { motion } from "framer-motion";
import type { WeatherData, TemperatureUnit } from "@/types/weather";
import { formatTemperature, getWeatherEmoji } from "@/utils/weatherUtils";

interface WeatherCardProps {
  weather: WeatherData;
  unit: TemperatureUnit;
}

export const WeatherCard = ({ weather, unit }: WeatherCardProps): JSX.Element => {
  const { name, sys, main, weather: weatherInfo, wind } = weather;
  const condition = weatherInfo[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-white mb-2">
            {name}, {sys.country}
          </h2>
          <p className="text-white/80 text-lg capitalize">{condition.description}</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <span className="text-8xl mr-4">{getWeatherEmoji(condition.main)}</span>
          <div className="text-7xl font-bold text-white">
            {formatTemperature(main.temp, unit)}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/70 text-sm mb-1">Feels Like</p>
            <p className="text-white text-xl font-semibold">
              {formatTemperature(main.feels_like, unit)}
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/70 text-sm mb-1">Humidity</p>
            <p className="text-white text-xl font-semibold">{main.humidity}%</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/70 text-sm mb-1">Wind Speed</p>
            <p className="text-white text-xl font-semibold">{wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

