import { Input } from "@/components/ui/input";
import { Search, Loader2, X } from "lucide-react";
import { useState, useRef } from "react";

export default function WeatherSearch({ city, setCity, onSubmit, loading, isDarkMode }) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  const handleClear = () => {
    setCity("");
    inputRef.current?.focus();
  };

  const renderSearchIcon = () => {
    if (loading) {
      return (
        <Loader2 
          size={20} 
          className={`animate-spin ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} 
        />
      );
    }
    return (
      <button
        type="submit"
        className={`flex items-center justify-center w-full h-full transition-colors cursor-pointer ${
          isDarkMode 
            ? (isFocused ? 'text-white' : 'text-slate-400')
            : (isFocused ? 'text-indigo-600' : 'text-slate-500')
        }`}
      >
        <Search size={20} />
      </button>
    );
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-3 mb-4">
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
          Weather Forecast
        </h1>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full">
        <div 
          className={`relative flex items-center w-full rounded-2xl transition-all duration-300 backdrop-blur-md ${
            isDarkMode 
              ? 'bg-slate-800/80 border border-slate-700/70' 
              : 'bg-white/60 border border-white/50'
          } ${
            isFocused 
              ? `shadow-lg ${isDarkMode ? 'shadow-indigo-500/20' : 'shadow-indigo-300/30'} ring-2 ${isDarkMode ? 'ring-indigo-500/30' : 'ring-indigo-300/50'}` 
              : 'shadow-md'
          }`}
        >
          <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center">
            {renderSearchIcon()}
          </div>

          <Input
            ref={inputRef}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter city name..."
            className={`flex-1 border-0 bg-transparent py-3 pl-12 pr-6 text-base focus:ring-0 focus:outline-none ${
              isDarkMode 
                ? 'text-white placeholder-slate-500' 
                : 'text-slate-800 placeholder-slate-400'
            }`}
          />

          {city.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors ${
                isDarkMode 
                  ? 'hover:bg-slate-700/50 text-slate-400 hover:text-white' 
                  : 'hover:bg-white/30 text-slate-500 hover:text-slate-800'
              }`}
            >
              <X size={18} />
            </button>
          )}
        </div>
      </form>
    </>
  );
}