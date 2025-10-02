"use client";

import { motion } from "framer-motion";
import type { ForecastData, TemperatureUnit } from "@/types/weather";
import { formatDate, formatTemperature, getWeatherEmoji } from "@/utils/weatherUtils";

interface ForecastCardProps {
  forecast: ForecastData;
  unit: TemperatureUnit;
}

export const ForecastCard = ({ forecast, unit }: ForecastCardProps): JSX.Element => {
  // Get one forecast per day (at 12:00)
  const dailyForecasts = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  ).slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto mt-6"
    >
      <h3 className="text-2xl font-bold text-white mb-4 text-center">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-3">
        {dailyForecasts.map((day, index) => (
          <motion.div
            key={day.dt}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 text-center"
          >
            <p className="text-white/80 text-sm mb-2">{formatDate(day.dt)}</p>
            <div className="text-4xl mb-2">{getWeatherEmoji(day.weather[0].main)}</div>
            <p className="text-white text-lg font-semibold">
              {formatTemperature(day.main.temp, unit)}
            </p>
            <p className="text-white/60 text-xs mt-1 capitalize">
              {day.weather[0].description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

