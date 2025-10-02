import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { WeatherData, ForecastData, TemperatureUnit } from "@/types/weather";

interface WeatherState {
  currentWeather: WeatherData | null;
  forecast: ForecastData | null;
  unit: TemperatureUnit;
  isLoading: boolean;
  error: string | null;
  setCurrentWeather: (weather: WeatherData) => void;
  setForecast: (forecast: ForecastData) => void;
  setUnit: (unit: TemperatureUnit) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      currentWeather: null,
      forecast: null,
      unit: "celsius",
      isLoading: false,
      error: null,

      setCurrentWeather: (weather) =>
        set({
          currentWeather: weather,
          error: null,
        }),

      setForecast: (forecast) =>
        set({
          forecast,
          error: null,
        }),

      setUnit: (unit) =>
        set({
          unit,
        }),

      setLoading: (loading) =>
        set({
          isLoading: loading,
        }),

      setError: (error) =>
        set({
          error,
          isLoading: false,
        }),
    }),
    {
      name: "weather-storage",
    }
  )
);

