import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AdminCreateSchedule = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const [cities, setCities] = useState([]);

  const [selectedCity, setSelectedCity] = useState(null);
  const getcities = async () => {
    const indianCities = [
      "Kathmandu",
      "Biratnagar",
      "Nepaljung",
      "Butwal",
      "Narayangarh",
      "Biratamod",
      "Damauli",
      "Itahari",
      "Birjung",
    ];

    const cities = indianCities.map((city) => {
      return {
        label: city,
        value: city,
      };
    });

    setCities(cities);
  };
  const [schedule, setSchedule] = useState({
    screenId: "",
    movieId: "",
    showTime: "",
    showDate: "",
  });
  const [screens, setScreens] = useState([]);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/movie/movies`,
      config
    );
    const data = response?.data;
    setMovies(data.data);
    // console.log(data.data);
  };

  useEffect(() => {
    getMovies();
    getcities();
  }, []);

  const getScreensByCity = async () => {
    // console.log("here");
    try {
      if (selectedCity === "") return toast.error("Please select a city");
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/movie/screensbycity/${selectedCity.toLowerCase()}`,
        config
      );
      const data = res?.data;
      setScreens(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
      // If there's no specific error message in the response, re-throw the original error
      if (error.response?.data) {
        setScreens([]);
        toast.error(error.response.data.message, { autoClose: 2000 });
      }
      throw error;
    }
  };

  const createSchedule = async () => {
    if (
      !schedule.screenId ||
      !schedule.movieId ||
      !schedule.showTime ||
      !schedule.showDate
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    console.log(schedule);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/movie/addmoviescheduletoscreen`,
      schedule,
      config
    );
    // console.log(response);
    const data = response?.data;
    console.log(data);

    if (data.ok) {
      toast.success("Schedule created successfully");
    } else {
      toast.error("Schedule creation failed");
    }
  };
  return (
    <div className="formpage">
      <div className="citysearch">
        <select
          value={selectedCity}
          className="select"
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select City
          </option>
          {cities.map((city) => {
            return (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            );
          })}
        </select>

        <button
          onClick={(e) => {
            e.preventDefault();
            getScreensByCity();
          }}
        >
          Search
        </button>
      </div>

      <div className="items">
        <h1>Screens</h1>
        {screens?.map((screen, index) => (
          <div
            className={
              schedule.screenId === screen._id ? "item selected" : "item"
            }
            key={index}
            onClick={() => {
              setSchedule({ ...schedule, screenId: screen._id });
            }}
          >
            <p>{screen.name}</p>
            <p>{screen.location}</p>
            <p>{screen.city}</p>
            <p>{screen.screenType}</p>
          </div>
        ))}
      </div>

      <div className="items">
        <h1>Movies</h1>
        {movies?.map((movie, index) => (
          <div
            className={
              schedule.movieId === movie._id ? "item selected" : "item"
            }
            key={index}
            onClick={() => {
              setSchedule({ ...schedule, movieId: movie._id });
            }}
          >
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <p>{movie.rating}</p>
            <p>{movie.genre}</p>
            <p>{movie.duration}</p>
          </div>
        ))}
      </div>

      <input
        type="time"
        name="showTime"
        id="showTime"
        onChange={(e) => setSchedule({ ...schedule, showTime: e.target.value })}
      />
      <input
        type="date"
        name="showDate"
        id="showDate"
        onChange={(e) => setSchedule({ ...schedule, showDate: e.target.value })}
      />

      <button
        onClick={() => {
          createSchedule();
        }}
      >
        Save
      </button>
    </div>
  );
};
