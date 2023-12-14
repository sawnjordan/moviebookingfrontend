import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MovieCard = (data) => {
  const { _id, title, genre, rating, portraitImgUrl } = data.Movie;
  const city = "mumbai";

  return (
    <NavLink to={`/movie/${city}/${_id}`}>
      <div className="moviecard">
        <div
          className="movieimg"
          style={{
            backgroundImage: `url(${portraitImgUrl})`,
          }}
        >
          <p className="rating">
            <BsFillStarFill className="star" />
            &nbsp;&nbsp;
            {rating}/10
          </p>
        </div>
        <div className="details">
          <p className="title">{title}</p>
          <p className="type">{genre}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
