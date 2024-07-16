import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginhoi = () => {
  let history = useNavigate();
  const [value, setvalue] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: value.email, password: value.password }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.token);
      history("/");
    } else {
      return <h1>error</h1>
    }
  };
  // sets the value when user types in the input form
  const onChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[55%] w-[25%] bg-white rounded-md flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-6">SIGN IN</h1>
      <form className=" w-60 space-y-3" onSubmit={handleSubmit}>
        <div className="flex flex-col border ">
          <input
            name="email"
            type="email"
            className=" p-2"
            placeholder="Email"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col border ">
          <input
            name="password"
            type="password"
            className=" p-2"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="p-2 w-24 text-white bg-black rounded-lg ml-12">
          SIGN IN 
        </button>
      </form>
      </div>
    </div>
  );
};

export default Loginhoi;