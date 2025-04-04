import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LaptopCard, { SkeletonCard } from "../LaptopCard";
import {
  fetchlaptop,
  laptopError,
  laptopLoading,
  laptopDataByType,
  setcategory,
} from "../../reduxstore/LaptopSlice";
import { Link } from "react-router-dom";

const Laptops = () => {
  const dispatch = useDispatch();
  const laptopLoadingStatus = useSelector(laptopLoading);
  const laptopErrorStatus = useSelector(laptopError);
  // get the filtered data i.e laptop from slice
  const laptopDataByTypes = useSelector(laptopDataByType);

  useEffect(() => {
    dispatch(fetchlaptop({ filterType: "type", value: "Laptop" }));
    dispatch(setcategory("Laptop"));
  }, []);

  return (
    <div className=" mt-10 ">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Laptops</h3>
        <Link className="mr-12 hover:underline text-blue-800" to={"/category/Laptops"}>
          View all
        </Link>
      </div>

      <div className="md:flex overflow-x-auto gap-4 mt-1">
        {laptopLoadingStatus ? (
          // Show skeleton cards while loading
          Array(4).fill().map((_, index) => <SkeletonCard key={index} />)
        ) : laptopErrorStatus ? (
          <div>Error: {laptopErrorStatus}</div>
        ) : (
          // Show actual data when loaded
          Array.isArray(laptopDataByTypes?.data) &&
          laptopDataByTypes.data.slice(0, 8).map((laptop, index) => {
            return <LaptopCard key={index} laptop={laptop} flexShrink={0} />;
          })
        )}
      </div>
    </div>
  );
};

export default Laptops;
