// Define the type for the weather data
export type WeatherData = {
    name: string;
    sys: { country: string };
    weather: Array<{ main: string; description: string; icon: string }>;
    main: { temp: number; feels_like: number };
    wind: { speed: number };
    dt: number; // Unix timestamp
  };
  
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  
  export async function getWeather(city: string): Promise<WeatherData> {
    if (!API_KEY) {
      throw new Error("API key is missing. Set NEXT_PUBLIC_WEATHER_API_KEY in your environment variables.");
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to fetch weather data: ${errorData.message || response.statusText}`);
      }
  
      // Parse the response and return as WeatherData type
      const data = await response.json();
      return data as WeatherData;  // Cast to WeatherData to ensure correct typing
    } catch (error) {
      console.error("Weather API Error:", error);
      throw new Error("Unable to retrieve weather data. Please try again later.");
    }
  }   