import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const LocationPopup = ({ setShowLocationPopup, address }) => {
  const [cities, setCities] = useState([]);

  const [selectedCity, setSelectedCity] = useState(
    address !== null ? address : null
  );

  const getcities = async () => {
    const indianCities = [
      "Kathmandu",
      "Biratnagar",
      "Nepaljung",
      "Butwal",
      "Narayangarh",
      "Biratamod",
      "Damauli",
      "Itahari",
      "Birjung",
    ];

    const cities = indianCities.map((city) => {
      return {
        label: city,
        value: city,
      };
    });

    setCities(cities);
  };

  useEffect(() => {
    getcities();
  }, []);

  const handleSave = async () => {
    setShowLocationPopup(false);
    // Axios configuration with headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/changeAddress`,
        { address: selectedCity },
        config
      );

      console.log(response);

      toast.success("Address updated.", {
        autoClose: 2000,
      });
      // console.log(response);
      window.location.reload();
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
    <div className="popup-bg">
      <div className="popup-cont">
        <select
          value={selectedCity}
          className="select"
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select your city
          </option>
          {cities.map((city) => {
            return (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            );
          })}
        </select>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
