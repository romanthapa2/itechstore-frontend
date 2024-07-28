import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faCartPlus , faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TypesIndex from "./categories/Index";
import BrandsIndex from "./brands/index";
import DispatchSelectedCategory from "./categories/DispatchSelectedCategory";

const MemoizeFontAwesomeIcon = React.memo(FontAwesomeIcon);

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="flex md:px-16 px-6 justify-between bg-white h-14 items-center">
      <MemoizeFontAwesomeIcon icon={faBars} onClick={toggleSidebar} className="text-2xl md:ml-5 md:hidden" />
      <div>
        <h1 className="font-semibold text-2xl">itechStore</h1>
      </div>

      {/* different topics for navbar */}
      <div className="hidden md:block">
        <ul className="flex flex-row">
          <Link to="/" className="mx-4 text-xl">
            Home
          </Link>
          <div className="mx-4">
            <TypesIndex />
          </div>
          <div className="mx-4">
            <BrandsIndex />
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

      {sidebarOpen && (
        <div className="fixed inset-0 flex z-50">
          <div className="w-64 bg-white shadow-md p-10">
            <ul className="flex flex-col">
              <div className="flex justify-between">
              <Link to="/" className="mb-2 text-2xl ">
                Home
              </Link>
              <FontAwesomeIcon icon={faXmark} className="text-3xl" onClick={toggleSidebar} />
              </div>
              <div className="mb-4">
                <h1 className="text-2xl mb-2 font-semibold">Categories</h1>
                <DispatchSelectedCategory/>
              </div>
              <div className="mb-4">
                <h1 className="text-2xl mb-2 font-semibold">Brands</h1>
                <DispatchSelectedCategory/>
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
