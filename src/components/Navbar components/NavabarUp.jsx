import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbarupocurrency from "./Navbarupcurrency";
import Cookies from "js-cookie"

const Navabarup = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("accessToken");
    navigate("/");
  };


  return (
    <div className="flex h-8 items-center justify-between bg-black container-padding">
      <div>
        <Navbarupocurrency />
      </div>
      {/* signup and login component */}
      {!Cookies.get("accessToken") ? (
        <div className="text-white block text-xs">
          <Link to="/signup" className="mx-4">
            Signup
          </Link>
          <Link to="/login">
            Login
          </Link>
        </div>
      ) : (
        <button onClick={handleLogout} className="text-white text-sm">
          Logout
        </button>
      )}
    </div>
  );
};

export default Navabarup;
