import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LaptopCard, { SkeletonCard } from "../LaptopCard";
import { useDispatch } from "react-redux";
import { fetchlaptop, setcategory } from "../../reduxstore/LaptopSlice";
import { url } from "../../url";
import { Link } from "react-router-dom";

const Monitors = () => {
  const [monitors, setMonitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMonitor = async () => {
      try {
        const response = await fetch(`${url}/api/filter/dataByFilter?type=Monitors`);
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

  const viewall = () => {
    dispatch(fetchlaptop("Monitors"));
    dispatch(setcategory("Monitors"));
  };

  return (
    <div className="mx-6 md:mx-10 md:pl-4 mt-10 ">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Monitors</h3>
        <Link className="mr-12 hover:underline text-blue-800" to={"/category/Monitors"} onClick={viewall}>
          View all
        </Link>
      </div>

      <div className="md:flex overflow-x-auto gap-4 mt-1">
        {loading ? (
          // Show skeleton cards while loading
          Array(4).fill().map((_, index) => <SkeletonCard key={index} />)
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          // Show actual data when loaded
          Array.isArray(monitors) &&
          monitors.slice(0, 8).map((monitor, index) => {
            return <LaptopCard key={index} laptop={monitor} />;
          })
        )}
      </div>
    </div>
  );
};

export default Monitors;
