import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomePageLayout } from "./pages/home/HomePageLayout";
import { LandingPage } from "./pages/home/LandingPage";
import { NotFound } from "./pages/home/error/NotFound";
import { AuthLogin } from "./pages/auth/AuthLogin";
import { AuthRegister } from "./pages/auth/AuthRegister";

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

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
