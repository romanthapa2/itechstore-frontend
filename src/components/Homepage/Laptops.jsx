import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LaptopCard from "../LaptopCard";
import { useNavigate } from "react-router-dom";
import {
  fetchlaptop,
  laptopError,
  laptopLoading,
  laptopdata,
  setcategory,
} from "../../reduxstore/LaptopSlice";

const Laptops = () => {
  const dispatch = useDispatch();
  const laptopLoadingStatus = useSelector(laptopLoading);
  const laptopErrorStatus = useSelector(laptopError);
  // get the filtered data i.e laptop from slice
  const laptopData = useSelector(laptopdata);
  console.log(laptopData.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchlaptop("Laptop"));
    dispatch(setcategory("Laptop"));
  }, [dispatch]);

  // veiwall
  const viewall = () => {
    navigate("./laptoppage");
  };

  if (laptopLoadingStatus) {
    return <div>Loading...</div>;
  }

  if (laptopErrorStatus) {
    return <div>Error: {laptopErrorStatus}</div>;
  }

  return (
    <div className="mx-10 md:pl-4 mt-10 ">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Laptops</h3>
        <h3 className="mr-12  hover:underline text-blue-800" onClick={viewall}>
          View all
        </h3>
      </div>

      <div className="md:grid grid-cols-4 grid-rows-1 gap-2 mt-1">
        {/* loop over the filtred data up to 4  */}
        {Array.isArray(laptopData.data) &&
          laptopData.data.slice(0, 4).map((laptop, index) => {
            return <LaptopCard key={index} laptop={laptop} />;
          })}
      </div>
    </div>
  );
};

export default Laptops;
