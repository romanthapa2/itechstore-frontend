import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import { url } from "../../url";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  let history = useNavigate();
  const [value, setvalue] = useState({email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {email, password } = value;
    try{
    
    const response = await fetch(`${url}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message || "Registration failed");
    }

    if (json.success) {
      toast.success("Registration successful!");
      Cookies.set("accessToken", json.data.accessToken);
      history("/");
    } else {
      throw new Error("Invalid registration data");
    }}catch(error){
      console.log(error?.message);
      toast.error(error?.message || "Registration failed. Please try again.");
    }finally{
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setvalue({ ...value, [e.target.id]: e.target.value });
  };
  return (
    <div className="h-[70vh] flex flex-col items-center bg-white">
      <div className="mt-6">
        <img
          src="/336681712_561790976019717_6382534753008597721_n-removebg-preview.png"
          className="h-12 w-48 ml-8"
          alt=""
        />
        <h1 className="mt-6 text-3xl font-semibold">Register your new account</h1>
        <h2 className="ml-12 mt-2">
          Or <Link to={"/login"}><span className="text-blue-800">login,if already have an account</span></Link>
        </h2>
      </div>
      <div className="mt-12 w-80 rounded-md flex flex-col justify-center items-center">
        <form className=" w-96 space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="absolute -top-2 left-3 px-1 bg-white text-sm text-black">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              onChange={onChange}
              placeholder="email@example.com"
              className={`border-2 border-gray-400  rounded-md px-4 py-2 focus:outline-none w-full`}
              required
              minLength={6}
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 px-1 bg-white text-sm text-gray-600">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              onChange={onChange}
              placeholder="........"
              className={`border-2 border-gray-400  rounded-md px-4 py-2 focus:outline-none w-full justify-center`}
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="p-2 w-full text-white bg-blue-950 rounded-lg"
            disabled={loading}
          >
            {loading ? "Signing in..." : "SIGN IN"}
          </button>
        </form>
      </div>
    </div>


  );
};

export default Signup;
