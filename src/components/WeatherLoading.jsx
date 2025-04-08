import { Loader2 } from "lucide-react";

export default function WeatherLoading({ isDarkMode }) {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="animate-pulse flex flex-col items-center">
        <div className={`h-14 w-14 rounded-full ${isDarkMode ? 'bg-slate-700/50' : 'bg-white/30'} flex items-center justify-center`}>
          <Loader2 className={`h-8 w-8 ${isDarkMode ? 'text-white/70' : 'text-slate-500'} animate-spin`} />
        </div>
        <p className={`${isDarkMode ? 'text-white/70' : 'text-slate-600'} mt-4`}>Fetching weather data...</p>
      </div>
    </div>
  );
}