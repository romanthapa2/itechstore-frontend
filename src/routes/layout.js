import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar components/Navbar";
import Navabarup from "../components/Navbar components/NavabarUp";
import Footer from "../components/footer components/Footer";
import FooterMuni from "../components/footer components/FooterMuni";

const Layout = () => {
  return (
    <>
      <Navabarup/>
      <Navbar />
      <main className="container-padding">
        <Outlet />
      </main>
      <Footer/>
      <FooterMuni/>
    </>
  );
};

export default Layout;
