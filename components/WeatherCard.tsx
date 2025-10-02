"use client";

import { motion } from "framer-motion";
import { Thermometer, Droplets, Wind } from "lucide-react";
import type { WeatherData, TemperatureUnit } from "@/types/weather";
import { formatTemperature } from "@/utils/weatherUtils";
import { getWeatherIcon, getWeatherIconColor } from "@/utils/weatherIcons";

interface WeatherCardProps {
  weather: WeatherData;
  unit: TemperatureUnit;
}

export const WeatherCard = ({ weather, unit }: WeatherCardProps): JSX.Element => {
  const { name, sys, main, weather: weatherInfo, wind } = weather;
  const condition = weatherInfo[0];
  const WeatherIcon = getWeatherIcon(condition.main);
  const iconColor = getWeatherIconColor(condition.main);

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
          <motion.div
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <WeatherIcon className={`w-32 h-32 mr-8 ${iconColor} drop-shadow-lg`} />
          </motion.div>
          <div className="text-7xl font-bold text-white">
            {formatTemperature(main.temp, unit)}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all">
            <div className="flex items-center justify-center mb-2">
              <Thermometer className="w-5 h-5 text-orange-300 mr-2" />
              <p className="text-white/70 text-sm">Feels Like</p>
            </div>
            <p className="text-white text-xl font-semibold">
              {formatTemperature(main.feels_like, unit)}
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all">
            <div className="flex items-center justify-center mb-2">
              <Droplets className="w-5 h-5 text-blue-300 mr-2" />
              <p className="text-white/70 text-sm">Humidity</p>
            </div>
            <p className="text-white text-xl font-semibold">{main.humidity}%</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all">
            <div className="flex items-center justify-center mb-2">
              <Wind className="w-5 h-5 text-cyan-300 mr-2" />
              <p className="text-white/70 text-sm">Wind Speed</p>
            </div>
            <p className="text-white text-xl font-semibold">{wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

