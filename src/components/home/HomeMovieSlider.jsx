import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MovieCard from "./MovieCard";
import animal from "../../assets/banner/animal.jpg";
const HomeMovieSlider = () => {
  const movies = [
    {
      title: "Movie One",
      portraitImgUrl: animal,
      _id: "1",
      rating: 7,
      genre: "Action, Thriller",
    },
    {
      title: "Movie Two",
      portraitImgUrl: animal,
      _id: "2",
      rating: 6,
      genre: "Action, Comedy",
    },
    {
      title: "Movie Three",
      portraitImgUrl: animal,
      _id: "3",
      rating: 7,
      genre: "Action, Thriller",
    },
    {
      title: "Movie Four",
      portraitImgUrl: animal,
      _id: "4",
      rating: 7,
      genre: "Action, Sci-Fi",
    },
  ];
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
              <MovieCard Movie={Movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeMovieSlider;
