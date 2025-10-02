import type { TemperatureUnit, WeatherCondition } from "@/types/weather";

export const convertTemperature = (temp: number, unit: TemperatureUnit): number => {
  if (unit === "fahrenheit") {
    return (temp * 9) / 5 + 32;
  }
  return temp;
};

export const formatTemperature = (temp: number, unit: TemperatureUnit): string => {
  const converted = Math.round(convertTemperature(temp, unit));
  return `${converted}°${unit === "celsius" ? "C" : "F"}`;
};

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getWeatherBackground = (condition: string): string => {
  const weatherCondition = condition.toLowerCase();
  
  if (weatherCondition.includes("clear") || weatherCondition.includes("sunny")) {
    return "from-blue-400 via-blue-300 to-yellow-200";
  } else if (weatherCondition.includes("cloud")) {
    return "from-gray-400 via-gray-300 to-gray-200";
  } else if (weatherCondition.includes("rain") || weatherCondition.includes("drizzle")) {
    return "from-gray-600 via-gray-500 to-blue-400";
  } else if (weatherCondition.includes("snow")) {
    return "from-blue-200 via-white to-gray-100";
  } else if (weatherCondition.includes("thunder")) {
    return "from-gray-800 via-gray-700 to-purple-900";
  } else if (weatherCondition.includes("mist") || weatherCondition.includes("fog")) {
    return "from-gray-300 via-gray-200 to-white";
  }
  
  return "from-blue-500 via-blue-400 to-blue-300";
};

export const getWeatherEmoji = (condition: string): string => {
  const weatherCondition = condition.toLowerCase();
  
  if (weatherCondition.includes("clear") || weatherCondition.includes("sunny")) {
    return "☀️";
  } else if (weatherCondition.includes("cloud")) {
    return "☁️";
  } else if (weatherCondition.includes("rain")) {
    return "🌧️";
  } else if (weatherCondition.includes("drizzle")) {
    return "🌦️";
  } else if (weatherCondition.includes("snow")) {
    return "❄️";
  } else if (weatherCondition.includes("thunder")) {
    return "⛈️";
  } else if (weatherCondition.includes("mist") || weatherCondition.includes("fog")) {
    return "🌫️";
  }
  
  return "🌤️";
};

