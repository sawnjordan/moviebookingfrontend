import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MovieCard from "./MovieCard";
import animal from "../../assets/banner/animal.jpg";
import axios from "axios";
import { toast } from "react-toastify";
const HomeMovieSlider = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  // const movies = [
  //   {
  //     title: "Movie One",
  //     portraitImgUrl: animal,
  //     _id: "1",
  //     rating: 7,
  //     genre: "Action, Thriller",
  //   },
  //   {
  //     title: "Movie Two",
  //     portraitImgUrl: animal,
  //     _id: "2",
  //     rating: 6,
  //     genre: "Action, Comedy",
  //   },
  //   {
  //     title: "Movie Three",
  //     portraitImgUrl: animal,
  //     _id: "3",
  //     rating: 7,
  //     genre: "Action, Thriller",
  //   },
  //   {
  //     title: "Movie Four",
  //     portraitImgUrl: animal,
  //     _id: "4",
  //     rating: 7,
  //     genre: "Action, Sci-Fi",
  //   },
  // ];

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/movie/movies`,
        config
      );
      const data = response?.data;
      setMovies(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [user, setUser] = useState();
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

  useEffect(() => {
    getMovies();
    getLoggedInUser();
  }, []);

  return (
    <div className="container sliderout mt-3">
      <h3>Now Showing</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movies.map((Movie) => {
          return (
            <SwiperSlide key={Movie._id}>
              <MovieCard Movie={Movie} user={user} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeMovieSlider;
