import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LaptopCard from "../LaptopCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchlaptop, setcategory } from "../../reduxstore/LaptopSlice";
import { url } from "../../url";

const Monitors = () => {
  const [monitors, setMonitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMonitor = async () => {
      try {
        const response = await fetch(`${url}/api/filter/dataByType?type=Monitors`);
        const data = await response.json();
        setMonitors(data.data);
      } catch (error) {
        console.error("Error fetching monitor data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMonitor();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const viewall = () => {
    dispatch(fetchlaptop("Monitors"));
    dispatch(setcategory("Monitors"));
    navigate("./laptops");
  };

  return (
    <div className="mx-6 md:mx-10 md:pl-4 mt-10 ">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Monitors</h3>
        <h3 className="mr-12  hover:underline text-blue-800" onClick={viewall}>
          View all
        </h3>
      </div>

      <div className="md:grid grid-cols-4 justify-center grid-rows-1 gap-3 mt-1">
        {Array.isArray(monitors) &&
          monitors.slice(0, 4).map((monitor, index) => {
            return <LaptopCard key={index} laptop={monitor} />;
          })}
      </div>
    </div>
  );
};

export default Monitors;
