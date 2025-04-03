import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { url } from "../../url";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Loginhoi = () => {
  let history = useNavigate();
  const [value, setvalue] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);


  // Function to test toast notifications
  const testToast = () => {
    toast.success("This is a test success message");
    setTimeout(() => {
      toast.error("This is a test error message");
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const newError = { email: false, password: false };
    // if (value.email.length <= 5){
    //   newError.email= true;
    // }
    // if (value.password.length <= 5){
    //   newError.password= true;
    // }
    // setError(newError);

    try {
      
      const response = await fetch(`${url}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: value.email, password: value.password }),
      });
      const json = await response.json();


    if (!response.ok) {
      throw new Error(json.message || 'Login failed');
    }

      if (json.success) {
        Cookies.set("accessToken", json.data.accessToken);
        toast.success("Logged in successfully!");
        history("/");
      }
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // sets the value when user types in the input form
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
        <h1 className="mt-6 text-3xl font-semibold">Sign in to your account</h1>
        <h2 className="ml-12 mt-2">
          Or <Link to={"/signup"}><span className="text-blue-800">create a new account</span></Link>
        </h2>
      </div>
      <div className="mt-12 w-80 rounded-md flex flex-col justify-center items-center">
        <form className=" w-96 space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 bg-white text-sm text-black`}
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              onChange={onChange}
              placeholder="email@example.com"
              className={`border-2   rounded-md px-4 py-2 focus:outline-none w-full border-gray-400`}
              required
              minLength={6}
            />
          </div>

          <div className="relative">
            <label
              className={`absolute -top-2 left-3 px-1 bg-white text-sm text-black`}
            >
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              onChange={onChange}
              placeholder="........"
              className={`border-2 rounded-md px-4 py-2 focus:outline-none w-full justify-center border-gray-400`}
              required
              minLength={6}
            />
          </div>


          <div className="flex">
          <button
            type="submit"
            className="p-2 w-full text-white bg-blue-950 rounded-lg"
            disabled={loading}
          >
            {loading ? "Loggin in..." : "LOGIN"}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginhoi;
