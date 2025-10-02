import axios from "axios";
import type { WeatherData, ForecastData } from "@/types/weather";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || "demo";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const weatherService = {
  getCurrentWeather: async (city: string): Promise<WeatherData> => {
    try {
      const response = await axios.get<WeatherData>(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Failed to fetch weather data");
      }
      throw new Error("An unexpected error occurred");
    }
  },

  getCurrentWeatherByCoords: async (lat: number, lon: number): Promise<WeatherData> => {
    try {
      const response = await axios.get<WeatherData>(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Failed to fetch weather data");
      }
      throw new Error("An unexpected error occurred");
    }
  },

  getForecast: async (city: string): Promise<ForecastData> => {
    try {
      const response = await axios.get<ForecastData>(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Failed to fetch forecast data");
      }
      throw new Error("An unexpected error occurred");
    }
  },

  getForecastByCoords: async (lat: number, lon: number): Promise<ForecastData> => {
    try {
      const response = await axios.get<ForecastData>(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Failed to fetch forecast data");
      }
      throw new Error("An unexpected error occurred");
    }
  },
};

