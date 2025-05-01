import React, { useEffect, useState } from "react";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({}); //stores the weather data (?)
  const API_KEY = process.env.API_KEY;

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${70816}` //my API key url and I added my zipcode in place of the city placeholder.
        ); //here I am requesting the data from WeatherAPI
        const data = await res.json();
        setWeatherData(data); //stores the output data
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  //I placed the "html" in a div because I know it can only return one variable, so I made it a parent
  return (
    <div>
      <h1>WeatherApp</h1>
      <div>
        <h2></h2>
        <p></p>
      </div>
    </div>
  );
}
