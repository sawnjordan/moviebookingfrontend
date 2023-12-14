import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const AuthRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
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

    // console.log(formData)
    setErrors({});

    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.address) {
      validationErrors.address = "Address is required";
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
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="formerror">{errors.name}</span>}
            </div>
            <div className="forminput_cont">
              <label>Email</label>
              <input
                type="email"
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
            <div className="forminput_cont">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Your Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="formerror">{errors.confirmPassword}</span>
              )}
            </div>

            <div className="forminput_cont">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter Your Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className="formerror">{errors.address}</span>
              )}
            </div>

            <button type="submit" className="main_button">
              Register
            </button>
            <p className="authlink">
              Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
