import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const BuyTickets = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const params = useParams();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [movie, setMovie] = useState({});
  const { movieId, city } = params;
  const [screens, setScreens] = useState(null);
  // const movie = {
  //   title: "Movie",
  //   screen: "4D",
  //   date: new Date(),
  //   language: "Hindi",
  //   genre: "Action,Thriller",
  //   theatres: [
  //     {
  //       _id: "1",
  //       name: "Screen 1",
  //       location: "QFX Cinemas, Civil Mall, Kathmandu",
  //     },
  //     {
  //       _id: "2",
  //       name: "Screen 2",
  //       location: "QFX Cinemas, Civil Mall, Kathmandu",
  //     },
  //     {
  //       _id: "3",
  //       name: "Screen 3",
  //       location: "QFX Cinemas, Civil Mall, Kathmandu",
  //     },
  //   ],
  // };

  const getMovie = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/movie/movies/${movieId}`,
        config
      );
      const data = response?.data;
      setMovie(data.data);
      console.log(data.data);
    } catch (error) {
      cconsole.log(error);
      // If there's no specific error message in the response, re-throw the original error
      if (error.response?.data) {
        toast.error(error.response.data.message, { autoClose: 2000 });
      }
      throw error;
    }
  };
  const getScreen = async (date) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/movie/screensbymovieschedule/${city}/${date}/${movieId}`,
        config
      );
      const data = response?.data;
      setScreens(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
      // If there's no specific error message in the response, re-throw the original error
      if (error.response?.data) {
        toast.error(error.response.data.message, { autoClose: 2000 });
      }
      throw error;
    }
  };
  useEffect(() => {
    getMovie();
  }, []);
  useEffect(() => {
    getScreen(selectedDate);
  }, [selectedDate]);

  return (
    <>
      {movie && (
        <div className="buytickets">
          <div className="s1">
            <div className="head">
              <h1>{movie.title}</h1>
              <h3>{movie?.genre?.join(", ")}</h3>
            </div>
            <DatePicker
              getSelectedDay={(date) => {
                console.log(date);
                setSelectedDate(date);
              }}
              endDate={100}
              selectDate={selectedDate}
              labelFormat={"MMMM"}
              color={"rgb(248, 68, 100)"}
            />
          </div>

          {screens && screens.length > 0 && (
            <div className="screens">
              {screens.map((screen, index) => {
                let screenId = screen._id;
                return (
                  <div className="screen" key={index}>
                    <div>
                      <h2>{screen.name}</h2>
                      <h3>
                        {screen.hallName},{" "}
                        {screen.city.charAt(0).toUpperCase() +
                          screen.city.slice(1)}
                      </h3>
                    </div>

                    <NavLink
                      to={`${location.pathname}/${screenId}?date=${selectedDate}`}
                      className="theme_btn1 linkstylenone"
                    >
                      Select
                    </NavLink>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};
