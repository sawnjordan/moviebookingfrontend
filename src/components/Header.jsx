import React, { useState, useEffect } from "react";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <nav>
      <div className="left">
        <NavLink to="/">
          <Image src={`${logo}`} alt="Site Logo" srcSet="" />
        </NavLink>

        <div className="searchbox">
          <BiSearch className="searchbtn" />
          <input type="text" placeholder="Search For a Movie" />
        </div>
      </div>
      <div className="right">
        <p className="dropdown">
          {"Select City"}
          <RiArrowDropDownFill className="dropicon" />
        </p>
        {loggedIn ? (
          <button className="theme_btn1 linkstylenone">Logout</button>
        ) : (
          <NavLink to="/register" className="theme_btn1 linkstylenone">
            Login
          </NavLink>
        )}
        <NavLink to="/profile" className="linkstylenone">
          <BiUserCircle className="theme_icon1" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;