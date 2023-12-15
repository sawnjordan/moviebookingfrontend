import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData,
        config
      );

      // console.log(response);

      toast.success("Your are successfully logged in.", {
        autoClose: 2000,
      });
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      // If there's no specific error message in the response, re-throw the original error
      if (error.response?.data) {
        toast.error(error.response.data.message, { autoClose: 2000 });
      }
      throw error;
    }
  };

  return (
    <div className="authout">
      <div className="authin">
        <div className="left">
          <Image src={logo} alt="" className="img" />
        </div>
        <div className="right">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={handleSubmit}
          >
            <div className="forminput_cont">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="formerror">{errors.email}</span>
              )}
            </div>
            <div className="forminput_cont">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="formerror">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="main_button">
              Login
            </button>

            <p className="authlink">
              Don&apos;t have an account?{" "}
              <NavLink to="/register">Register</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
