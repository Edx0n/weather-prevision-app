import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
  CloudFog,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const getWeatherIcon = (condition: string): LucideIcon => {
  const weatherCondition = condition.toLowerCase();

  if (weatherCondition.includes("clear") || weatherCondition.includes("sunny")) {
    return Sun;
  } else if (weatherCondition.includes("cloud")) {
    return Cloud;
  } else if (weatherCondition.includes("rain")) {
    return CloudRain;
  } else if (weatherCondition.includes("drizzle")) {
    return CloudDrizzle;
  } else if (weatherCondition.includes("snow")) {
    return CloudSnow;
  } else if (weatherCondition.includes("thunder")) {
    return CloudLightning;
  } else if (
    weatherCondition.includes("mist") ||
    weatherCondition.includes("fog") ||
    weatherCondition.includes("haze")
  ) {
    return CloudFog;
  }

  return Cloud;
};

export const getWeatherIconColor = (condition: string): string => {
  const weatherCondition = condition.toLowerCase();

  if (weatherCondition.includes("clear") || weatherCondition.includes("sunny")) {
    return "text-yellow-300";
  } else if (weatherCondition.includes("cloud")) {
    return "text-gray-300";
  } else if (weatherCondition.includes("rain")) {
    return "text-blue-300";
  } else if (weatherCondition.includes("drizzle")) {
    return "text-blue-200";
  } else if (weatherCondition.includes("snow")) {
    return "text-white";
  } else if (weatherCondition.includes("thunder")) {
    return "text-purple-300";
  } else if (weatherCondition.includes("mist") || weatherCondition.includes("fog")) {
    return "text-gray-400";
  }

  return "text-white";
};

