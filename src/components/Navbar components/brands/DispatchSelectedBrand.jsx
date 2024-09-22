import React from "react";
import { useDispatch } from "react-redux";
import { fetchlaptop, setcategory } from "../../../reduxstore/LaptopSlice";
import { Link } from "react-router-dom";

const solutions = [
  { name: "Apple" },
  { name: "Lenovo" },
  { name: "Dell" },
  { name: "Acer" },
  { name: "HP" },
  { name: "Samsung" },
];
const DispatchSelectedBrand = () => {
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
          className="group relative flex gap-x-2 rounded-lg p-1 hover:bg-gray-50"
          to={`/brand/${item.name}`}
          >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default DispatchSelectedBrand;
