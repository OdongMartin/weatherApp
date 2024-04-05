'use client'

import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../utils/weatherAPI';

const Weather: React.FC<{ city: string }> = ({ city }) => {
    const [weatherData, setWeatherData] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchWeather(city);
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [city]);



    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <p>{[weatherData]}</p> */}
            <h2>Weather in {city}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>Temperature: {weatherData.main.humidity}</p>
            <p>Description: {weatherData.weather[0].description}</p>
        </div>
    );
};

export default Weather;