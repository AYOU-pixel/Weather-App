import { Cloud, Sun } from "lucide-react";

export default function WeatherBackground({ theme, isDarkMode }) {
  const getBackgroundGradient = () => {
    if (isDarkMode) {
      switch (theme) {
        case "rainy": return "bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950";
        case "cloudy": return "bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900";
        case "clear": return "bg-gradient-to-b from-blue-900 via-indigo-900 to-violet-950";
        case "snow": return "bg-gradient-to-b from-slate-700 via-blue-900 to-indigo-950";
        default: return "bg-gradient-to-b from-slate-800 via-purple-900 to-slate-900";
      }
    } else {
      switch (theme) {
        case "rainy": return "bg-gradient-to-b from-slate-300 via-blue-300 to-slate-400";
        case "cloudy": return "bg-gradient-to-b from-blue-200 via-slate-300 to-blue-300";
        case "clear": return "bg-gradient-to-b from-sky-200 via-blue-300 to-indigo-300";
        case "snow": return "bg-gradient-to-b from-blue-50 via-blue-100 to-indigo-200";
        default: return "bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200";
      }
    }
  };

  return (
    <div className={`absolute inset-0 ${getBackgroundGradient()}`}>
      {/* Animated Weather Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {theme === "rainy" && (
          Array(20).fill().map((_, i) => (
            <div 
              key={i}
              className="raindrop absolute rounded-full bg-blue-200/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-30px`,
                width: `${2 + Math.random() * 3}px`,
                height: `${10 + Math.random() * 15}px`,
                animationDuration: `${0.7 + Math.random() * 0.6}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))
        )}
        
        {/* Clouds */}
        <div className="absolute top-10 left-10 opacity-50 animate-float">
          <Cloud size={80} className={isDarkMode ? "text-white/40" : "text-white/70"} />
        </div>
        <div className="absolute top-20 right-20 opacity-40 animate-float-slow">
          <Cloud size={100} className={isDarkMode ? "text-white/30" : "text-white/60"} />
        </div>
        <div className="absolute bottom-10 left-20 opacity-30 animate-float-slower">
          <Cloud size={120} className={isDarkMode ? "text-white/20" : "text-white/50"} />
        </div>
      </div>
    </div>
  );
}