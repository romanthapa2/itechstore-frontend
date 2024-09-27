import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TypesIndex from "./categories/Index";
import BrandsIndex from "./brands/index";
import DispatchSelectedCategory from "./categories/DispatchSelectedCategory";
import { useSelector } from "react-redux";
import {cart } from "../../reduxstore/CartSlice"

const MemoizeFontAwesomeIcon = React.memo(FontAwesomeIcon);

const Navbar = () => {
  const cartdata = useSelector(cart);
  
  const totalCartQuantity = cartdata.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue.quantity
  },0) 


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
        <ul className="flex flex-row gap-10">
          <Link to="/" className="text-xl font-semibold">
            Home
          </Link>
          <TypesIndex />
          <BrandsIndex />
        </ul>
      </div>

      {/* search and add to cart icon */}
      <div className="flex flex-row">
        <Link to="/search">
        <MemoizeFontAwesomeIcon icon={faMagnifyingGlass} className="mr-5 size-5 text-gray-600 hover:text-black" />
        </Link>
        <Link to="/addtocart" className="relative">
          <MemoizeFontAwesomeIcon icon={faCartPlus} className="size-5" />
          <span className="absolute -right-4 -top-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {totalCartQuantity}
          </span>
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
                <DispatchSelectedCategory />
              </div>
              <div className="mb-4">
                <h1 className="text-2xl mb-2 font-semibold">Brands</h1>
                <DispatchSelectedCategory />
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
