import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const AdminCreateMovie = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    portraitImgUrl: "",
    portraitImg: null,
    landscapeImgUrl: "",
    landscapeImg: null,
    rating: 0,
    genre: [],
    duration: 0,
    director: "",
  });
  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Science Fiction",
    "Thriller",
    "Other",
  ];

  const handleGenreChange = (genre) => {
    if (movie.genre.includes(genre)) {
      setMovie({
        ...movie,
        genre: movie.genre.filter((selectedGenre) => selectedGenre !== genre),
      });
    } else {
      setMovie({ ...movie, genre: [...movie.genre, genre] });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const uploadImage = async (image) => {
    // console.log(image, "jere");
    try {
      const formData = new FormData();
      formData.append("myimage", image);
      //   for (const pair of formData.entries()) {
      //     const [fieldName, fieldValue] = pair;
      //     console.log(fieldName, fieldValue, "dskjdjk");
      //   }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/image/uploadimage`,
        formData,
        config
      );
      console.log(response, "in createmovie");

      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log("Image uploaded successfully.", data);
      //     return data.imageUrl;
      //   } else {
      //     console.error("Failed to upload the image.");
      //     return null;
      //   }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };
  const handleCreateMovie = async () => {
    try {
      if (
        movie.title === "" ||
        movie.description === "" ||
        movie.rating === 0 ||
        movie.genre.length === 0 ||
        movie.duration === 0 ||
        movie.director === ""
      ) {
        toast.error("Please fill all the fields", {
          autoClose: 2000,
        });
        return;
      }

      let portraitImgUrl = movie.portraitImgUrl;
      let landscapeImgUrl = movie.landscapeImgUrl;

      if (movie.portraitImg) {
        portraitImgUrl = await uploadImage(movie.portraitImg);
        if (!portraitImgUrl) {
          toast.error("Portrait Image upload failed", {
            autoClose: 2000,
          });
          return;
        }
      }
      if (movie.landscapeImg) {
        landscapeImgUrl = await uploadImage(movie.landscapeImg);
        if (!landscapeImgUrl) {
          toast.error("Landscape Image upload failed", {
            autoClose: 2000,
          });
          return;
        }
      }

      const newMovie = { ...movie, portraitImgUrl, landscapeImgUrl };
      await axios.post(
        `${import.meta.env.VITE_API_URL}/movie/createmovie`,
        formData,
        config
      );
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/movie/createmovie`,
        newMovie,
        config
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Movie creation successful.", data);

        toast.success("Movie Created Successfully", {
          autoClose: 2000,
        });
      } else {
        console.error("Movie creation failed", response.statusText);
        toast.error("Movie Creation Failed", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("An error occurred during movie creation", error);
    }
  };

  return (
    <div className="formpage">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={movie.title}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={movie.description}
        onChange={handleInputChange}
      />
      <br />
      <label>Portrait Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          if (event.target.files && event.target.files.length > 0) {
            setMovie({ ...movie, portraitImg: event.target.files[0] });
          }
        }}
      />
      <br />
      <label>Landscape Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          if (event.target.files && event.target.files.length > 0) {
            setMovie({ ...movie, landscapeImg: event.target.files[0] });
          }
        }}
      />
      <br />

      <label>Rating</label>
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={movie.rating}
        onChange={handleInputChange}
      />
      <br />
      <div>
        <p>Select Genres:</p>
        {genres.map((genre) => (
          <label key={genre}>
            <input
              type="checkbox"
              name="genre"
              checked={movie.genre.includes(genre)}
              onChange={() => handleGenreChange(genre)}
            />
            {genre}
          </label>
        ))}
      </div>

      <br />

      <label>Duration</label>
      <input
        type="number"
        name="duration"
        placeholder="Duration"
        value={movie.duration}
        onChange={handleInputChange}
      />
      <br />
      <label>Director</label>
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={movie.director}
        onChange={handleInputChange}
      />
      <br />

      <button onClick={handleCreateMovie}>Create Movie</button>
    </div>
  );
};
