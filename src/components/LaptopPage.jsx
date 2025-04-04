import React from "react";
import { useSelector } from "react-redux";
import LaptopCard from "./LaptopCard";
import { laptopError, laptopLoading, laptopDataByType, category } from "../reduxstore/LaptopSlice";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col bg-white h-[95%] w-full px-5 py-8 rounded-xl overflow-hidden animate-pulse">
      <div className="h-52 rounded-xl bg-gray-200"></div>
      <div className="mt-8 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
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
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-10 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (laptopErrorStatus) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
          Error: {laptopErrorStatus}
        </div>
      </div>
    );
  }

  const hasLaptops = laptopDataByTypes?.data && laptopDataByTypes.data.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{setcategory}</h1>
        <div className="mt-2 h-1 w-20 bg-blue-500 rounded-full"></div>
      </div>

      {hasLaptops ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {laptopDataByTypes.data.map((laptop, index) => (
            <LaptopCard key={index} laptop={laptop} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No laptops found in this category</div>
        </div>
      )}
    </div>
  );
};

export default LaptopPage;
