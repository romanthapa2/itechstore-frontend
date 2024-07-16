import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let history = useNavigate();
  const [value, setvalue] = useState({ name: "", email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = value;
    const response = await fetch("http://localhost:5000/api/user/registor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      history("/");
    } else {
      return <h1>error</h1>;
    }
  };

  const onChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen text-black flex justify-center flex-col items-center">

      <div className="h-[55%] w-[25%] bg-white rounded-md flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-6">sign up</h1>
        <form onSubmit={handleSubmit} className="w-60 space-y-4 ">
          <div className="flex flex-col border ">
            <input
              name="name"
              type="text"
              className="p-2"
              placeholder="Username"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="flex flex-col border">
            <input
              name="email"
              type="email"
              className=" p-2"
              placeholder="Email"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="flex flex-col border">
            <input
              name="password"
              type="password"
              className="p-2"
              placeholder="Password"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="p-2 w-28 text-white bg-black rounded-lg mt-3 ml-16">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
