import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbarupocurrency from "./Navbarupcurrency";

const Navabarup = () => {
  // returns navbar
  let history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("./");
  };

  return (
    <div className="flex h-8 px-6 items-center justify-between bg-black">
      <div className="md:ml-10">
        <Navbarupocurrency />
      </div>
      {/* signup and login component */}
      {!localStorage.getItem("token") ? (
        <div className=" text-white block text-xs md:mr-[25px]">
          <Link to="/signup" className="mx-4">
            Singup
          </Link>
          <Link to="/login" className="">
            Login
          </Link>
        </div>
      ) : (
        <button onClick={handleLogout} className="text-white md:mr-10 text-sm">
          Logout
        </button>
      )}
    </div>
  );
};

export default Navabarup;
