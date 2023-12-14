import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomePageLayout } from "./pages/home/HomePageLayout";
import { LandingPage } from "./pages/home/LandingPage";
import { NotFound } from "./pages/home/error/NotFound";
import { AuthLogin } from "./pages/auth/AuthLogin";
import { AuthRegister } from "./pages/auth/AuthRegister";
import { MovieDetails } from "./pages/movies/MovieDetails";
import { BuyTickets } from "./pages/movies/BuyTickets";
import { SelectSeats } from "./pages/movies/SelectSeats";

export const Routing = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="register" element={<AuthRegister />} />
            <Route path="login" element={<AuthLogin />} />

            <Route path="movie/:city/:movieId" element={<MovieDetails />} />
            <Route
              path="movie/:city/:movieId/buytickets"
              element={<BuyTickets />}
            />
            <Route
              path="movie/:city/:movieId/buytickets/:screenId"
              element={<SelectSeats />}
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
