import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import animal from "../../assets/banner/animal.jpg";
import banner1 from "../../assets/banner/banner1.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { NavLink, useLocation, useParams } from "react-router-dom";
import axios from "axios";

export const MovieDetails = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const [movie, setMovie] = useState({});
  const params = useParams();
  const { movieId } = params;
  const location = useLocation();

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
    }
  };

  // const movie = {
  //   widePoster: banner1,
  //   potraitPoster: animal,
  //   title: "Movie",
  //   rating: 8,
  //   hall: ["2D", "3D"],
  //   duration: "2h 56m",
  //   genre: "Action, Thriller",
  //   casts: "Hari, Ram",
  //   description: "This is movie description.",
  //   director: "Ram Khadka",
  // };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {movie && (
        <div className="moviepage">
          <div
            className="c1"
            style={{
              backgroundImage: `url(${movie.landscapeImgUrl})`,
            }}
          >
            <div className="c11">
              <div className="left">
                <div
                  className="movie_poster"
                  style={{
                    backgroundImage: `url(${movie.portraitImgUrl})`,
                  }}
                >
                  <p>In cinemas</p>
                </div>
                <div className="movie_details">
                  <p className="title">{movie.title}</p>
                  <p className="rating">
                    <BsFillStarFill className="star" />
                    &nbsp;&nbsp;
                    {movie.rating}/10
                  </p>
                  {/* <div className='halls_languages'>
                                <p className='halls'>
                                    {
                                        movie.halls.map((hall, index) => {
                                            return (
                                                <span key={index}>{hall} </span>
                                            )
                                        })
                                    }
                                </p>
                                <p className='languages'>
                                    {movie.languages.map((language, index) => {
                                        return (
                                            <span key={index}>{language} </span>
                                        )
                                    })}
                                </p>
                            </div> */}
                  <p className="duration_type_releasedat">
                    <span className="duration">{movie.duration} minutes</span>
                    <span>•</span>
                    <span className="type">{movie?.genre?.join(", ")}</span>
                  </p>
                  <NavLink
                    to={`${location.pathname}/buytickets`}
                    className="linkstylenone"
                  >
                    <button className="bookbtn">Book Tickets</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="c2">
            <h1>About the Movie</h1>
            <p>{movie.description}</p>
            {movie.casts && (
              <div className="circlecardslider">
                <div className="line"></div>

                <h1>Cast</h1>

                {movie.casts}
              </div>
            )}

            <div className="circlecardslider">
              <div className="line"></div>

              <h1>Director</h1>

              {movie.director}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
