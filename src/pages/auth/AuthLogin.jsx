import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const AuthLogin = () => {
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
