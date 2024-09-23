import React from "react";
import { useSelector } from "react-redux";
import LaptopCard from "./LaptopCard";
import { laptopError, laptopLoading, laptopdata, category } from "../reduxstore/LaptopSlice";

const LaptopPage = () => {
  const laptopLoadingStatus = useSelector(laptopLoading);
  const laptopErrorStatus = useSelector(laptopError);
  const laptopData = useSelector(laptopdata);
  const setcategory = useSelector(category);

  if (laptopLoadingStatus) {
    return <div>Loading...</div>;
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
          {laptopData?.data &&
            laptopData.data.map((laptop, index) => {
              return <LaptopCard key={index} laptop={laptop} />;
            })}
        </div>
      </div>
    </>
  );
};

export default LaptopPage;
