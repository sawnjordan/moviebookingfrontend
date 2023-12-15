import React, { useEffect, useState } from "react";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import logo from "../../../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import axios from "axios";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  const getLoggedInUser = async () => {
    try {
      // const response = await axios.post(`http://localhost:5000/api/v1/order/new`);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/me`,
        {
          withCredentials: true,
        }
      );
      const data = response.data?.data;
      setLoggedInUser(data);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
      // If there's no specific error message in the response, re-throw the original error
      throw error;
    }
  };
  // console.log(loggedInUser);

  const handleLogout = async () => {
    try {
      // const response = await axios.post(`http://localhost:5000/api/v1/order/new`);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/logout`,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      // navigate("/login");
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
      // If there's no specific error message in the response, re-throw the original error
      throw error;
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

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
        {loggedIn ? (
          <>
            <NavLink
              to="/admin/movie/createmovie"
              className="theme_btn1 linkstylenone"
            >
              Create Movie
            </NavLink>
            <NavLink
              to="/admin/movie/createscreen"
              className="theme_btn1 linkstylenone"
            >
              Create Screen
            </NavLink>
            <NavLink
              to="/admin/movie/createschedule"
              className="theme_btn1 linkstylenone"
            >
              Create Schedule
            </NavLink>
            <button className="theme_btn1 linkstylenone" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="theme_btn1 linkstylenone">
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

export default AdminHeader;
