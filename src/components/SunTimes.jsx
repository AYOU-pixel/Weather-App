import { Sun } from "lucide-react";

export default function SunTimes({ weatherData, isDarkMode }) {
  const formatTime = (timestamp) => new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="mt-8 flex justify-between items-center">
      <SunTime 
        time={formatTime(weatherData.sys.sunrise)}
        title="Sunrise"
        iconColor={isDarkMode ? "text-yellow-300" : "text-yellow-500"}
        isDarkMode={isDarkMode}
      />
      
      <div className={`h-0.5 flex-1 mx-4 ${isDarkMode ? 'bg-slate-700/50' : 'bg-white/30'} rounded-full`}></div>

      <SunTime 
        time={formatTime(weatherData.sys.sunset)}
        title="Sunset"
        iconColor={isDarkMode ? "text-orange-300" : "text-orange-500"}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

function SunTime({ time, title, iconColor, isDarkMode }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`p-3 ${isDarkMode ? 'bg-slate-700/30' : 'bg-white/20'} rounded-full mb-2`}>
        <Sun size={24} className={iconColor} />
      </div>
      <p className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-slate-500'} uppercase tracking-wider mb-1`}>{title}</p>
      <p className="font-medium">{time}</p>
    </div>
  );
}