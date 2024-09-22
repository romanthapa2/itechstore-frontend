import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar components/Navbar";
import Navabarup from "../components/Navbar components/NavabarUp";
import Footer from "../components/footer components/Footer";
import Footermuni from "../components/footer components/FooterMuni";

const Layout = () => {
  return (
    <div>
      <Navabarup/>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
      <Footermuni/>
    </div>
  );
};

export default Layout;
