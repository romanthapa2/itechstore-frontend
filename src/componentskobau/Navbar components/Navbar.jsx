import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faMagnifyingGlass,faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Typeshover from "./Typeshover";
import Bands from "./Bands";

const Navbar = () => {
  return (
    <header className="flex justify-between bg-white h-14 items-center">

      {/* bar icon and topic of the shop */}
      <div className="text-2xl ml-5 md:hidden">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div>
        <h1 className="font-semibold text-2xl ml-[10px] md:ml-[38px]">ShopOnline</h1>
      </div>

      {/* different topics for navbar */}
      <div className="hidden md:block">
        <ul className="flex flex-row">
          <Link to="/" className="mx-4 text-xl">
            Home
          </Link>
          <div className="mx-4">
          <Typeshover/>
          </div>
          <div className="mx-4">
          <Bands/>
          </div>
        </ul>
      </div>

    {/* search and add to cart icon */}
      <div className="mr-[10px] md:mr-[20px]">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-5" />
      <Link to="/addtocart"  ><FontAwesomeIcon icon={faCartPlus} className="mr-6"  /></Link>
      <Link to="/admin" >admin</Link>
        
      </div>

    </header>
  );
};

export default Navbar;
