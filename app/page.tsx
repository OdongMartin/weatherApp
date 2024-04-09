'use client'
import { useState } from 'react';
import Weather from '../components/weather';
import Search from '../components/search';

const Home: React.FC = () => {
  const [city, setCity] = useState('');

  const handleSearch = (city: string) => {
      setCity(city);
  };

  return (
      <div>
          <h1>My Weather App</h1>
          <Search onSearch={handleSearch} />
          {city && <Weather city={city} />}
      </div>
  );
};

export default Home;
