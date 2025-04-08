import { Droplets, Thermometer, Wind, Sun, Clock } from "lucide-react";
import WeatherIcon from "./WeatherIcon";
import WeatherStats from "./WeatherStats";
import SunTimes from "../SunTimes";

export default function WeatherDisplay({ weatherData, isDarkMode }) {
  const formatTemperature = (temp) => Math.round(temp) + "°C";
  const formatTime = (timestamp) => new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`mt-6 p-6 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white/30'} backdrop-blur-xl rounded-2xl ${isDarkMode ? 'text-white' : 'text-slate-700'} ${isDarkMode ? 'border-slate-700/50' : 'border border-white/50'} shadow-xl transform transition-all duration-500 animate-fade-in`}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold mb-1">{weatherData.name}</h2>
          <div className="flex items-center">
            <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>{weatherData.sys.country}</p>
            <div className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-white/40' : 'bg-slate-400'} mx-2`}></div>
            <div className="flex items-center text-sm">
              <Clock size={14} className="mr-1" />
              <p>{formatTime(weatherData.dt)}</p>
            </div>
          </div>
        </div>
        <div className="text-6xl font-bold tracking-tighter">
          {formatTemperature(weatherData.main.temp)}
        </div>
      </div>
      
      <div className="flex items-center mt-6">
        <div className={`${isDarkMode ? 'bg-slate-700/50' : 'bg-white/40'} rounded-full p-3 mr-4`}>
          <WeatherIcon condition={weatherData.weather[0].main} isDarkMode={isDarkMode} size={40} />
        </div>
        <div>
          <p className="capitalize text-xl font-medium">{weatherData.weather[0].description}</p>
          <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>
            Feels like {formatTemperature(weatherData.main.feels_like)}
          </p>
        </div>
      </div>
      
      <WeatherStats weatherData={weatherData} isDarkMode={isDarkMode} />
      <SunTimes weatherData={weatherData} isDarkMode={isDarkMode} />
    </div>
  );
}