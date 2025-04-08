import { Droplets, Thermometer, Wind } from "lucide-react";

export default function WeatherStats({ weatherData, isDarkMode }) {
  const formatTemperature = (temp) => Math.round(temp) + "°C";

  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <WeatherStat 
        icon={<Thermometer className={`${isDarkMode ? 'text-red-400' : 'text-red-500'} h-6 w-6`} />}
        title="Temperature"
        value={formatTemperature(weatherData.main.temp)}
        subtext={`Max: ${formatTemperature(weatherData.main.temp_max)} • Min: ${formatTemperature(weatherData.main.temp_min)}`}
        isDarkMode={isDarkMode}
      />
      
      <WeatherStat 
        icon={<Droplets className={`${isDarkMode ? 'text-blue-400' : 'text-blue-500'} h-6 w-6`} />}
        title="Humidity"
        value={`${weatherData.main.humidity}%`}
        isDarkMode={isDarkMode}
      />
      
      <WeatherStat 
        icon={<Wind className={`${isDarkMode ? 'text-cyan-400' : 'text-cyan-500'} h-6 w-6`} />}
        title="Wind speed"
        value={`${weatherData.wind.speed} m/s`}
        isDarkMode={isDarkMode}
      />
      
      <WeatherStat 
        icon={<Thermometer className={`${isDarkMode ? 'text-amber-400' : 'text-amber-500'} h-6 w-6`} />}
        title="Pressure"
        value={`${weatherData.main.pressure} hPa`}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

function WeatherStat({ icon, title, value, subtext, isDarkMode }) {
  return (
    <div className={`flex items-center p-4 ${isDarkMode ? 'bg-slate-700/30' : 'bg-white/20'} rounded-xl`}>
      <div className="mr-3">{icon}</div>
      <div>
        <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-slate-500'} uppercase tracking-wider`}>{title}</p>
        <div className="flex items-baseline">
          <p className="font-medium text-lg">{value}</p>
          {subtext && (
            <p className={`text-xs ml-2 ${isDarkMode ? 'text-white/50' : 'text-slate-500'}`}>
              {subtext}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}