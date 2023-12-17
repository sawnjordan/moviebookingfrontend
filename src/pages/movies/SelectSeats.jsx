import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { format, parse } from "date-fns";

export const SelectSeats = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  const params = useParams();
  // const searchParams = useSearchParams();
  const [searchParams] = useSearchParams();

  const date = searchParams.get("date");
  const { movieId, city, screenId } = params;
  console.log(movieId, city, screenId, date);

  const [screen, setScreen] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [movie, setMovie] = useState(null);
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
      console.log(error);
      // If there's no specific error message in the response, re-throw the original error
      if (error.response?.data) {
        toast.error(error.response.data.message, { autoClose: 2000 });
      }
      throw error;
    }
  };

  const getschedules = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/movie/schedulebymovie/${screenId}/${date}/${movieId}`,
        config
      );
      const data = response?.data;
      setScreen(data.data);
      setSelectedTime(data.data.movieSchedulesforDate[0]);

      // console.log(data.data);
    } catch (error) {
      console.log(error);
      // If there's no specific error message in the response, re-throw the original error
      if (error.response?.data) {
        toast.error(error.response.data.message, { autoClose: 2000 });
      }
      throw error;
    }
  };
  const selectedSeatsHandle = (seat) => {
    console.log(seat);
    // {
    //     "row": "F",
    //     "col": 1,
    //     "seat_id": "6",
    //     "price": 500
    // }
    const isSelected = selectedSeats.find(
      (s) =>
        s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id
    );

    if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter(
          (s) =>
            s.row !== seat.row ||
            s.col !== seat.col ||
            s.seat_id !== seat.seat_id
        )
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const generateSeatLayout = () => {
    const x = screen.movieSchedulesforDate.findIndex(
      (t) => t.showTime === selectedTime.showTime
    );
    let notavailableseats = screen.movieSchedulesforDate[x].notAvailableSeats;

    return (
      <div>
        {screen.screen.seats.map((seatType, index) => (
          <div className="seat-type" key={index}>
            <h2>
              <b>
                {seatType.type.charAt(0).toUpperCase() + seatType.type.slice(1)}
              </b>{" "}
              - Rs. {seatType.price}
            </h2>
            <div className="seat-rows">
              {seatType.rows.map((row, rowIndex) => (
                <div className="seat-row" key={rowIndex}>
                  <p className="rowname">{row.rowname}</p>
                  <div className="seat-cols">
                    {row.cols.map((col, colIndex) => (
                      <div className="seat-col" key={colIndex}>
                        {col.seats.map((seat, seatIndex) => (
                          <div key={seatIndex}>
                            {notavailableseats.find(
                              (s) =>
                                s.row === row.rowname &&
                                s.seat_id === seat.seat_id &&
                                s.col === colIndex
                            ) ? (
                              <span className="seat-unavailable">
                                {seatIndex + 1}
                              </span>
                            ) : (
                              <span
                                className={
                                  selectedSeats.find(
                                    (s) =>
                                      s.row === row.rowname &&
                                      s.seat_id === seat.seat_id &&
                                      s.col === colIndex
                                  )
                                    ? "seat-selected"
                                    : "seat-available"
                                }
                                onClick={() =>
                                  selectedSeatsHandle({
                                    row: row.rowname,
                                    col: colIndex,
                                    seat_id: seat.seat_id,
                                    price: seatType.price,
                                  })
                                }
                              >
                                {seatIndex + 1}
                              </span>
                            )}
                            {/* {seat.status === "not-available" && (
                              <span className="seat-unavailable">
                                {seatIndex + 1}
                              </span>
                            )} */}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <br /> <br /> <br />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleBooking = async () => {
    try {
      const bookingData = {
        showTime: selectedTime.showTime,
        showDate: date,
        movieId: movieId,
        screenId: screenId,
        seats: selectedSeats,
        totalPrice: selectedSeats.reduce((acc, seat) => acc + seat.price, 0),
        paymentId: "123456789",
        paymentType: "cod",
      };
      console.log(bookingData);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/movie/bookticket`,
        bookingData,
        config
      );
      const data = response?.data;
      console.log(data.data, "booking");
      toast.success("Booking Successful", { autoClose: 2000 });
      window.location.href = "/me";
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
    getschedules();
  }, []);

  console.log(screen, "screen");
  return (
    <div className="selectseatpage">
      {movie && screen && (
        <div className="s1">
          <div className="head">
            <h1>
              {movie.title} - {screen?.name}
            </h1>
            <h3>{movie?.genre?.join(", ")}</h3>
          </div>
        </div>
      )}

      {screen && (
        <div className="selectseat">
          <div className="timecont">
            {screen.movieSchedulesforDate.map((time, i) => (
              <h3
                className={
                  selectedTime?._id === time._id ? "time selected" : "time"
                }
                onClick={() => {
                  setSelectedTime(time);
                  setSelectedSeats([]);
                }}
                key={i}
              >
                {format(parse(time.showTime, "HH:mm", new Date()), "hh:mm a")}
              </h3>
            ))}
          </div>
          <div className="indicators">
            <div>
              <span className="seat-unavailable"></span>
              <p>Not available</p>
            </div>
            <div>
              <span className="seat-available"></span>
              <p>Available</p>
            </div>
            <div>
              <span className="seat-selected"></span>
              <p>Selected</p>
            </div>
          </div>

          {generateSeatLayout()}

          <div className="totalcont">
            <div className="total">
              <h2>Total</h2>
              <h3>
                Rs. {selectedSeats.reduce((acc, seat) => acc + seat.price, 0)}
              </h3>
            </div>

            {/* <Link href="/" className='theme_btn1 linkstylenone'>Continue</Link> */}
            <button
              className="theme_btn1 linkstylenone"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
