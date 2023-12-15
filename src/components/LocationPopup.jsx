import React, { useState } from "react";

export const LocationPopup = ({ setShowLocationPopup }) => {
  const [cities, setCities] = useState([]);

  const [selectedCity, setSelectedCity] = useState(null);

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

  React.useEffect(() => {
    getcities();
  }, []);

  const handleSave = () => {
    setShowLocationPopup(false);
  };

  return (
    <div className="popup-bg">
      <div className="popup-cont">
        <select
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
