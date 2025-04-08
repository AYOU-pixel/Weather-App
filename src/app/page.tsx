"use client";
import { useState, useEffect } from "react";
import WeatherSearch from "../components/ui/WeatherSearch";
import WeatherDisplay from "../components/ui/WeatherDisplay";
import WeatherBackground from "../components/ui/WeatherBackground";
import WeatherLoading from "../components/WeatherLoading";
import WeatherError from "../components/WeatherError";
import "./globals.css";
import { getWeather } from "./actions";
import type { WeatherData } from "./actions";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("default");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference for dark mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(darkModePreference);
      
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Set theme based on weather condition
  useEffect(() => {
    if (weatherData) {
      const condition = weatherData.weather[0].description.toLowerCase();
      if (condition.includes("rain") || condition.includes("drizzle")) {
        setTheme("rainy");
      } else if (condition.includes("cloud")) {
        setTheme("cloudy");
      } else if (condition.includes("clear")) {
        setTheme("clear");
      } else if (condition.includes("snow")) {
        setTheme("snow");
      } else {
        setTheme("default");
      }
    }
  }, [weatherData]);

  const handleSubmit = async (city: string) => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to fetch weather data");
      } else {
        setError("An unknown error occurred");
      }
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-all duration-1000`}>
      <WeatherBackground theme={theme} isDarkMode={isDarkMode} />
      
      <div className={`w-full max-w-md ${isDarkMode ? 'bg-slate-900/60' : 'bg-white/25'} backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-6 ${isDarkMode ? 'border border-white/10' : 'border border-white/40'} transition-all duration-500 hover:shadow-2xl mx-4 z-10`}>
        <WeatherSearch 
          city={city}
          setCity={setCity}
          onSubmit={handleSubmit}
          loading={loading}
          isDarkMode={isDarkMode}
        />
        
        {loading && !weatherData && <WeatherLoading isDarkMode={isDarkMode} />}
        {error && <WeatherError error={error} isDarkMode={isDarkMode} />}
        {weatherData && (
          <WeatherDisplay 
            weatherData={weatherData} 
            isDarkMode={isDarkMode} 
          />
        )}
      </div>
    </div>
  );
}