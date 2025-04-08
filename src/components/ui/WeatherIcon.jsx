import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react";

export default function WeatherIcon({ condition, size = 40, isDarkMode }) {
  const iconColor = isDarkMode ? "text-white" : "text-slate-700";
  
  switch(condition.toLowerCase()) {
    case "clear": return <Sun size={size} className={iconColor} />;
    case "clouds": return <Cloud size={size} className={iconColor} />;
    case "rain":
    case "drizzle": return <CloudRain size={size} className={iconColor} />;
    case "snow": return <CloudSnow size={size} className={iconColor} />;
    default: return <Cloud size={size} className={iconColor} />;
  }
}