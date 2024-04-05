import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city: string) => {
    console.log('api key',API_KEY)
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                units: 'metric', // or 'imperial' for Fahrenheit
                appid: API_KEY,

            },
        });
        // const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a66a46a1f04464884f9ab1bc86b3972f')
        return response.data;
    } catch (error) {
        throw new Error('Error fetching weather data');
    }
};