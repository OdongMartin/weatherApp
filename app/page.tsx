import Image from "next/image";
import Weather from '../components/weather';

export default function Home() {
  return (
    <div>
      <h1>My Weather App</h1>
      <Weather city="Kampala" />
    </div>
  );
}
