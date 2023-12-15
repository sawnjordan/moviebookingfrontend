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
import { AdminLayout } from "./pages/cms/admin/AdminLayout";
import { AdminDashboard } from "./pages/cms/admin/AdminDashboard";
import { AdminLogin } from "./pages/cms/admin/components/AdminLogin";
import { AdminCreateMovie } from "./pages/cms/admin/AdminCreateMovie";
import { AdminCreateScreen } from "./pages/cms/admin/AdminCreateScreen";
import { AdminCreateSchedule } from "./pages/cms/admin/AdminCreateSchedule";

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
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            {/* Admin Banner Route */}
            <Route path="login" element={<AdminLogin />} />
            <Route path="movie/createmovie" element={<AdminCreateMovie />} />
            <Route path="movie/createscreen" element={<AdminCreateScreen />} />
            <Route
              path="movie/createschedule"
              element={<AdminCreateSchedule />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
