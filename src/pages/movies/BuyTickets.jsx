import { useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import { NavLink, useLocation, useParams } from "react-router-dom";

export const BuyTickets = () => {
  const params = useParams();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { movieId, city } = params;

  const movie = {
    title: "Movie",
    screen: "4D",
    date: new Date(),
    language: "Hindi",
    genre: "Action,Thriller",
    theatres: [
      {
        _id: "1",
        name: "Screen 1",
        location: "QFX Cinemas, Civil Mall, Kathmandu",
      },
      {
        _id: "2",
        name: "Screen 2",
        location: "QFX Cinemas, Civil Mall, Kathmandu",
      },
      {
        _id: "3",
        name: "Screen 3",
        location: "QFX Cinemas, Civil Mall, Kathmandu",
      },
    ],
  };

  return (
    <>
      {movie && (
        <div className="buytickets">
          <div className="s1">
            <div className="head">
              <h1>
                {movie.title} - {movie.language}
              </h1>
              <h3>{movie.genre}</h3>
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

          {movie.theatres && movie.theatres.length > 0 && (
            <div className="screens">
              {movie.theatres.map((screen, index) => {
                let screenId = screen._id;
                return (
                  <div className="screen" key={index}>
                    <div>
                      <h2>{screen.name}</h2>
                      <h3>{screen.location}</h3>
                    </div>

                    <NavLink
                      to={`${location.pathname}/${screenId}`}
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
