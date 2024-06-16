import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import toast, { Toaster } from "react-hot-toast";
import { TiWeatherCloudy } from "react-icons/ti";
import TimeDate from "../timeDate/TimeDate";
import day from "../../assets/back.jpg";
import night from "../../assets/night.jpg";
import { ThemeContext } from "../../context/themeContext";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Loader from "../../components/loader/Loader";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [note, setNote] = useState(true);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const response = await axios.get(API_URL, {
            params: {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
              appid: API_KEY,
              units: "metric", // Change to 'imperial' for Fahrenheit
            },
          });
          console.log(response.data);
          setWeatherData([response.data]);
          console.log({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          toast.error(err.message, { duration: 1000 });
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.", {
        duration: 1000,
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const cityList = location.split(",").map((city) => city.trim());
      const promises = cityList.map((city) =>
        axios.get(API_URL, {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric", // Change to 'imperial' for Fahrenheit
          },
        })
      );
      const results = await Promise.all(promises);
      setLoading(false);
      setWeatherData(results.map((result) => result.data));
      toast.success("Fetch Successful");
    } catch (error) {
      toast.error(error.response.data.message, { duration: 1000 });
      setWeatherData(null);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div
      style={
        theme === "dark"
          ? { backgroundImage: `url(${night})` }
          : { backgroundImage: `url(${day})` }
      }
      className="weather-container "
    >
      <ThemeToggle />
      <TimeDate />
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city1, city2 ..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">
          <TiWeatherCloudy />
        </button>
      </form>

      {loading && <Loader />}

      {weatherData && !loading && (
        <ul className="weather-list-container">
          {weatherData.map((data) => (
            <li key={data.id} className="data-container">
              <h2>
                {data.name}, {data.sys.country}
              </h2>
              <p>Temperature: {data.main.temp}°C</p>
              <p>Humidity: {data.main.humidity}%</p>
              <p>Wind Speed: {data.wind.speed} m/s</p>
              <p>Weather Condition: {data.weather[0].description}</p>
            </li>
          ))}
        </ul>
      )}

      {note && (
        <div onClick={() => setNote(false)} className="note">
          <RxCross1 className="cross" />
          <h4>Note</h4>
          <p>Enter cities with , seperated</p>
          <p>
            Click <MdSunny /> or <RiMoonFill /> for theme toggle
          </p>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Weather;
