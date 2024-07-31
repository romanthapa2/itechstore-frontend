import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchlaptop, setcategory } from "../../../reduxstore/LaptopSlice";

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
  const navigate = useNavigate();

  const Handletype = (data) => {
    dispatch(fetchlaptop(data));
    dispatch(setcategory(data));
    navigate("/laptops");
  };
  return (
    <>
      {solutions.map((item) => (
        <div
          key={item.name}
          onClick={() => Handletype(item.name)}
          className="group relative flex gap-x-2 rounded-lg p-1 hover:bg-gray-50">
          <div>
            <a className="font-semibold text-gray-900">
              {item.name}
              <span className="absolute inset-0" />
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default DispatchSelectedBrand;
