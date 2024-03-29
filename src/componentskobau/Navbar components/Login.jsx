import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginhoi = (props) => {
  // usenaviagate to redirect to another component
  let history = useNavigate();
  // setting the inital value as blank
  const [value, setvalue] = useState({ email: "", password: "" });
  // when the submit button is clicked this function excutes and sends data to
  // the body of backend and returns the same response
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/auth/login", {
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
      <form className=" w-60" onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control p-1"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            className="form-control p-1"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="p-1 bg-orange-300 rounded-lg mt-3 ml-20">
          Submit
        </button>
      </form>

    </div>
  );
};

export default Loginhoi;