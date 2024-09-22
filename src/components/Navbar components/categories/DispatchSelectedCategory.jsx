import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchlaptop, setcategory } from "../../../reduxstore/LaptopSlice";


const DispatchSelectedCategory = () => {
  const solutions = [{ name: "Laptop" }, { name: "Desktop" }, { name: "Monitors" }];
    const dispatch = useDispatch();
  
    const Handletype = (data) => {
      dispatch(fetchlaptop(data));
      dispatch(setcategory(data));
    };
  return (
    <>
    {solutions.map((item) => (
      <Link
      key={item.name}
      onClick={() => Handletype(item.name)}
      className="group relative flex gap-x-2 rounded-lg p-1 hover:bg-gray-200"
  to={`/category/${item.name}`}
      >
        {item.name}
    </Link>
      
    ))}
    </>
  )
}

export default DispatchSelectedCategory