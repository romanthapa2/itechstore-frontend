import React from "react";
import { useSelector } from "react-redux";
import LaptopCard from "./LaptopCard";
import { laptopError, laptopLoading, laptopDataByType, category } from "../reduxstore/LaptopSlice";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col mt-4 bg-white h-[95%] w-80 px-5 py-8 rounded-xl overflow-hidden animate-pulse">
      <div className="h-52 rounded-xl bg-gray-300"></div>
      <div className="mt-8 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
};

const LaptopPage = () => {
  const laptopLoadingStatus = useSelector(laptopLoading);
  const laptopErrorStatus = useSelector(laptopError);
  const laptopDataByTypes = useSelector(laptopDataByType);
  const setcategory = useSelector(category);

  if (laptopLoadingStatus) {
    return (
      <div className="mx-6 md:px-8 my-10">
        <div className="flex justify-between">
          <div className="h-10 bg-gray-300 rounded w-1/4 animate-pulse"></div>
        </div>
        <div className="md:grid grid-cols-3 grid-rows-1 gap-2 mt-1">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (laptopErrorStatus) {
    return <div>Error: {laptopErrorStatus}</div>;
  }
  return (
    <>
      <div className="mx-6 md:px-8 my-10">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl h-10 ">{setcategory}</h1>
        </div>

        <div className="md:grid grid-cols-3 grid-rows-1 gap-2 mt-1">
          {laptopDataByTypes?.data &&
            laptopDataByTypes.data.map((laptop, index) => {
              return <LaptopCard key={index} laptop={laptop} />;
            })}
        </div>
      </div>
    </>
  );
};

export default LaptopPage;
