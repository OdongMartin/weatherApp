import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                units: 'metric', // or 'imperial' for Fahrenheit
                appid: API_KEY,

            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Error fetching weather data');
    }
};