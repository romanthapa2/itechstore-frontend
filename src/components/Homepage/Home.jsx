import React from "react";
import Imageslider from "./ImageSlider";
import Laptops from "./Laptops";
import Footer from "../footer components/Footer";
import Footermuni from "../footer components/FooterMuni";
import Monitors from "./Monitors";
import Desktops from "./Desktops";
import Navabarup from "../Navbar components/NavabarUp";
import Navbar from "../Navbar components/Navbar";

const Home = () => {
  return (
    <>
      <Navabarup />
      <Navbar />
      <Imageslider />
      <Laptops />
      <Monitors />
      <Desktops />
      <Footer />
      <Footermuni />
    </>
  );
};

export default Home;
