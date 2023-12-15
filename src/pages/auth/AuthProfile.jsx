import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { format, parse } from "date-fns";

export const AuthProfile = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const [user, setUser] = useState(null);
  const getLoggedInUser = async () => {
    try {
      // const response = await axios.post(`http://localhost:5000/api/v1/order/new`);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/me`,
        {
          withCredentials: true,
        }
      );
      const data = response.data?.data;
      setUser(data);
    } catch (error) {
      console.log(error);
      // If there's no specific error message in the response, re-throw the original error
      if (error.response?.data) {
        toast.error(error.response.data.message, { autoClose: 2000 });
        window.location.href = "/login";
      }
      throw error;
    }
  };
  const [bookings, setBookings] = useState();
  const getUserBookings = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/movie/getuserbookings`,
        config
      );
      const data = response?.data;
      setBookings(data.data);

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

  useEffect(() => {
    getUserBookings();
    getLoggedInUser();
  }, []);
  return (
    <div className="profile">
      <h1 className="head">Profile</h1>
      <div className="user">
        <h2>User Details</h2>
        <div className="details">
          <div className="detail">
            <h3>Name</h3>
            <p>{user?.name}</p>
          </div>
          <div className="detail">
            <h3>Email</h3>
            <p>{user?.email}</p>
          </div>

          <div className="detail">
            <h3>City</h3>
            <p>{user?.address}</p>
          </div>
        </div>
      </div>
      <div className="bookings">
        <h2>Bookings</h2>
        <div className="details">
          {bookings?.map((booking) => {
            return (
              <div className="booking" key={booking._id}>
                <div className="detail">
                  <h3>Movie</h3>
                  <p>{booking.movieId.title}</p>
                </div>

                <div className="detail">
                  <h3>Screen: </h3>
                  <p>
                    {booking.screenId.name} - {booking.screenId.hallName}
                  </p>
                </div>

                <div className="detail">
                  <h3>Seats: </h3>
                  <p>
                    {booking.seats.map((seat, index) => {
                      return (
                        <span key={index}>
                          ({seat.row}
                          {seat.seat_id}){" "}
                        </span>
                      );
                    })}
                  </p>
                </div>

                <div className="detail">
                  <h3>Price: </h3>
                  <p>{booking.totalPrice}</p>
                </div>

                <div className="detail">
                  <h3>Payment Type: </h3>
                  <p>{booking.paymentType}</p>
                </div>

                <div className="detail">
                  <h3>Show Date: </h3>
                  {/* <p>{booking.showDate}</p> */}
                  <p>{format(new Date(booking.showDate), "MMMM dd, yyyy")}</p>
                </div>

                <div className="detail">
                  <h3>Show Time: </h3>
                  {/* <p>{booking.showTime}</p> */}
                  <p>
                    {format(
                      parse(booking.showTime, "HH:mm", new Date()),
                      "hh:mm a"
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
