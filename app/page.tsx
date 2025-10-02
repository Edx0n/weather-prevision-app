"use client";

import { useEffect, useState } from "react";
import { useWeatherStore } from "@/store/weatherStore";
import { weatherService } from "@/services/weatherService";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { ForecastCard } from "@/components/ForecastCard";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { UnitToggle } from "@/components/UnitToggle";
import { LocationButton } from "@/components/LocationButton";
import { motion } from "framer-motion";

export default function Home(): JSX.Element {
  const {
    currentWeather,
    forecast,
    unit,
    isLoading,
    error,
    setCurrentWeather,
    setForecast,
    setUnit,
    setLoading,
    setError,
  } = useWeatherStore();

  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    // Load default city on mount
    if (!initialized && !currentWeather) {
      handleSearch("London");
      setInitialized(true);
    }
  }, [initialized, currentWeather]);

  const handleSearch = async (city: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city),
      ]);

      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred while fetching weather data");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = async (): Promise<void> => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const [weatherData, forecastData] = await Promise.all([
            weatherService.getCurrentWeatherByCoords(latitude, longitude),
            weatherService.getForecastByCoords(latitude, longitude),
          ]);

          setCurrentWeather(weatherData);
          setForecast(forecastData);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An error occurred while fetching weather data");
          }
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError("Unable to retrieve your location");
        setLoading(false);
      }
    );
  };

  const handleUnitToggle = (): void => {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {currentWeather && (
        <BackgroundVideo condition={currentWeather.weather[0].main} />
      )}

      <LocationButton onClick={handleLocationClick} isLoading={isLoading} />
      <UnitToggle unit={unit} onToggle={handleUnitToggle} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-white text-center mb-12 drop-shadow-lg"
        >
          Weather Forecast
        </motion.h1>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto mb-8 p-4 bg-red-500/20 backdrop-blur-md border border-red-500/50 rounded-2xl text-center text-white"
          >
            <p className="font-semibold">Error: {error}</p>
          </motion.div>
        )}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white text-2xl"
          >
            <div className="inline-block animate-spin text-6xl mb-4">⏳</div>
            <p>Loading weather data...</p>
          </motion.div>
        )}

        {!isLoading && currentWeather && (
          <>
            <WeatherCard weather={currentWeather} unit={unit} />
            {forecast && <ForecastCard forecast={forecast} unit={unit} />}
          </>
        )}
      </div>
    </main>
  );
}

