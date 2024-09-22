import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LaptopCard from "../LaptopCard";
import {
  fetchlaptop,
  laptopError,
  laptopLoading,
  laptopdata,
  setcategory,
} from "../../reduxstore/LaptopSlice";
import { Link } from "react-router-dom";

const Laptops = () => {
  const dispatch = useDispatch();
  const laptopLoadingStatus = useSelector(laptopLoading);
  const laptopErrorStatus = useSelector(laptopError);
  // get the filtered data i.e laptop from slice
  const laptopData = useSelector(laptopdata);

  useEffect(() => {
    dispatch(fetchlaptop("Laptop"));
    dispatch(setcategory("Laptop"));
  }, []);


  if (laptopLoadingStatus) {
    return <div>Loading...</div>;
  }

  if (laptopErrorStatus) {
    return <div>Error: {laptopErrorStatus}</div>;
  }

  return (
    <div className="mx-6 md:mx-10 md:pl-4 mt-10 ">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Laptops</h3>
        <Link className="mr-12  hover:underline text-blue-800" to={"/category/Laptops"}>
          View all
        </Link>
      </div>

      <div className="md:grid grid-cols-4 grid-rows-1 gap-3 mt-1">
        {/* loop over the filtred data up to 4  */}
        {Array.isArray(laptopData?.data) &&
          laptopData.data.slice(0, 4).map((laptop, index) => {
            return <LaptopCard key={index} laptop={laptop} />;
          })}
      </div>
    </div>
  );
};

export default Laptops;
