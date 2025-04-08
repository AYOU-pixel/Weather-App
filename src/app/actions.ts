"use server";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function getWeather(city: string): Promise<any> {
    if (!API_KEY) {
        throw new Error("API key is missing. Set NEXT_PUBLIC_WEATHER_API_KEY in your environment variables.");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json(); // Parse error response
            throw new Error(`Failed to fetch weather data: ${errorData.message || response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Weather API Error:", error);
        throw new Error("Unable to retrieve weather data. Please try again later.");
    }
}