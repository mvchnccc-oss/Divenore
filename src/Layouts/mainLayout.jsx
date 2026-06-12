import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="md:pt-22 pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
