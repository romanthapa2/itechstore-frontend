import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowLaptop from "../ShowLaptop";
import Navabarup from "../../Navbar components/Navabarup";
import Navbar from "../../Navbar components/Navbar";
import Footer from "../../footer/Footer";
import Footermuni from "../../footer/Footermuni";
import { laptopError, laptopLoading, laptopdata,category} from "../../../features/Laptopslice";

const LaptopPage = () => {
  // useselctor to get data from slice
  const laptoploadings = useSelector(laptopLoading);
  const laptperror = useSelector(laptopError);
  // get the filtered data i.e laptop from slice
  const laptopdta = useSelector(laptopdata);
  const setcategory = useSelector(category);


  if (laptoploadings) {
    return <div>Loading...</div>;
  }

  if (laptperror) {
    return <div>Error: {laptperror}</div>;
  }
  return (
    <>
      <Navabarup />
      <Navbar />
      <div className="ml-10 mt-10 h-">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl h-10 ">{setcategory}</h1>
        </div>

        <div className="md:grid grid-cols-3 grid-rows-1 gap-2 mt-1">
          {/* loop over the filtred data up to 4  */}
          {laptopdta &&
            laptopdta.map((laptop, index) => {
              return <ShowLaptop key={index} laptop={laptop} />;
            })}
        </div>
      </div>
      <Footer />
      <Footermuni />
    </>
  );
};

export default LaptopPage;
