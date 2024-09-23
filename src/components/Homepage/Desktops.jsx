import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LaptopCard from "../LaptopCard";
import { useDispatch } from "react-redux";
import { fetchlaptop, setcategory } from "../../reduxstore/LaptopSlice";
import { url } from "../../url";
import { Link } from "react-router-dom";

const Desktops = () => {
  const [desktops, setDesktops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDesktop = async () => {
      try {
        const response = await fetch(`${url}/api/filter/dataByType?type=Desktop`);
        const data = await response.json();
        setDesktops(data.data);
      } catch (error) {
        console.error("Error fetching monitor data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDesktop();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }




  const viewall = () => {
    dispatch(fetchlaptop("Desktop"));
    dispatch(setcategory("Desktops"));
  };

  return (
    <div className="mx-6 md:mx-10 md:pl-4 my-10">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Desktops</h3>
        <Link className="mr-12  hover:underline text-blue-800" to={"/category/Desktops"} onClick={viewall}>
          View all
        </Link>
      </div>

      <div className="md:flex overflow-x-auto gap-4 mt-1">
        {/* loop over the filtred data up to 4  */}
        {Array.isArray(desktops) &&
          desktops.slice(0, 8).map((desktop, index) => {
            return <LaptopCard key={index} laptop={desktop} />;
          })}
      </div>
    </div>
  );
};

export default Desktops;
