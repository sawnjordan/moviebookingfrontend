import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";
import { Footer } from "../../../components/Footer";

export const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <Footer />
    </>
  );
};
