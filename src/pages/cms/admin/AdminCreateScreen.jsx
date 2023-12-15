import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AdminCreateScreen = () => {
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

  useEffect(() => {
    getcities();
  }, []);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const tempseatlayout = [
    {
      // platinum
      type: "platinum",
      rows: [
        {
          // row 2
          rowname: "H",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "G",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          // row 2
          rowname: "F",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 500,
    },
    {
      // gold
      type: "gold",
      rows: [
        {
          // row 2
          rowname: "E",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "D",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          // row 2
          rowname: "C",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 300,
    },
    {
      // silver - 20 objects
      type: "silver",
      rows: [
        {
          rowname: "B",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          // row 2
          rowname: "A",
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
            // col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },

                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 150,
    },
  ];

  const [screen, setScreen] = useState({
    name: "",
    hallName: "",
    seats: tempseatlayout,
    city: "",
    screenType: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setScreen({ ...screen, [name]: value });
  };
  const handleScreenTypeChange = (event) => {
    const { value } = event.target;
    setScreen({ ...screen, screenType: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    screen.city = selectedCity;
    try {
      if (
        screen.name === "" ||
        screen.location === "" ||
        screen.seats.length == 0 ||
        screen.city === "" ||
        screen.screenType === ""
      ) {
        toast.error("Please fill all the fields", {
          autoClose: 2000,
        });
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/movie/createscreen`,
        screen,
        config
      );
      console.log(response);
      const data = response?.data;

      if (data.ok) {
        console.log("Screen creation successful", data);

        toast.success("Screen Created Successfully", {
          autoClose: 2000,
        });
      } else {
        console.error("Screen creation failed", response.statusText);
        toast.error("Screen Creation Failed", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formpage">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={screen.name}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        name="hallName"
        placeholder="Hall Name"
        value={screen.hallName}
        onChange={handleInputChange}
      />
      <br />
      {/* <input
        type="text"
        name="city"
        placeholder="City"
        value={screen.city}
        onChange={handleInputChange}
      /> */}

      <select
        value={selectedCity}
        className="select"
        onChange={(e) => {
          setSelectedCity(e.target.value);
        }}
      >
        <option value="" disabled selected>
          Select City
        </option>
        {cities.map((city) => {
          return (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          );
        })}
      </select>
      <br />
      <div>
        Screen Type:
        <label>
          <input
            type="radio"
            name="screenType"
            value="3D"
            checked={screen.screenType === "3D"}
            onChange={handleScreenTypeChange}
          />
          3D
        </label>
        <label>
          <input
            type="radio"
            name="screenType"
            value="2D"
            checked={screen.screenType === "2D"}
            onChange={handleScreenTypeChange}
          />
          2D
        </label>
        <label>
          <input
            type="radio"
            name="screenType"
            value="4D"
            checked={screen.screenType === "4D"}
            onChange={handleScreenTypeChange}
          />
          4D
        </label>
      </div>
      <br />
      <button onClick={handleSubmit}>Create Screen</button>
    </div>
  );
};
