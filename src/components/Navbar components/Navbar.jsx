import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Types from "./Types";
import Bands from "./Bands";

const MemoizeFontAwesomeIcon = React.memo(FontAwesomeIcon);

const Navbar = () => {
  return (
    <header className="flex md:px-16 px-6 justify-between bg-white h-14 items-center">
      {/* bar icon and topic of the shop */}
      <MemoizeFontAwesomeIcon icon={faBars} className="text-2xl md:ml-5 md:hidden" />
      <div>
        <h1 className="font-semibold text-2xl">ShopOnline</h1>
      </div>

      {/* different topics for navbar */}
      <div className="hidden md:block">
        <ul className="flex flex-row">
          <Link to="/" className="mx-4 text-xl">
            Home
          </Link>
          <div className="mx-4">
            <Types />
          </div>
          <div className="mx-4">
            <Bands />
          </div>
        </ul>
      </div>

      {/* search and add to cart icon */}
      <div className="">
        <MemoizeFontAwesomeIcon icon={faMagnifyingGlass} className="mr-5" />
        <Link to="/addtocart">
          <MemoizeFontAwesomeIcon icon={faCartPlus} className="" />
        </Link>
        {/* <Link to="/admin">admin</Link> */}
      </div>
    </header>
  );
};

export default Navbar;
