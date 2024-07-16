import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LaptopCard from "../LaptopCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchlaptop, setcategory } from "../../reduxstore/LaptopSlice";

const Desktops = () => {
  const [desktops, setDesktops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDesktop = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/filter/dataByType?type=Desktop`);
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
    navigate("./laptoppage");
  };

  return (
    <div className="mx-6 md:mx-10 md:pl-4 mt-10">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Desktops</h3>
        <h3 className="mr-12  hover:underline text-blue-800" onClick={viewall}>
          View all
        </h3>
      </div>

      <div className="md:grid grid-cols-4 grid-rows-1 gap-3 mt-1">
        {/* loop over the filtred data up to 4  */}
        {Array.isArray(desktops) &&
          desktops.slice(0, 4).map((desktop, index) => {
            return <LaptopCard key={index} laptop={desktop} />;
          })}
      </div>
    </div>
  );
};

export default Desktops;
