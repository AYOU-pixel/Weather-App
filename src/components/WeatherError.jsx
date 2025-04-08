export default function WeatherError({ error, isDarkMode }) {
    return (
      <div className={`mt-4 p-5 ${isDarkMode ? 'bg-red-900/30' : 'bg-red-500/20'} backdrop-blur-md rounded-xl ${isDarkMode ? 'text-red-300' : 'text-red-500'} ${isDarkMode ? 'border-red-900/50' : 'border border-red-500/30'} animate-fade-in`}>
        <p className="font-medium">{error}</p>
      </div>
    );
  }