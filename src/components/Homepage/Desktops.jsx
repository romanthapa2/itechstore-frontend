import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LaptopCard, { SkeletonCard } from "../LaptopCard";
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
        const response = await fetch(`${url}/api/filter/dataByFilter?type=Desktop`);
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

  const viewall = () => {
    dispatch(fetchlaptop("Desktop"));
    dispatch(setcategory("Desktops"));
  };

  return (
    <div className="mx-6 md:mx-10 md:pl-4 my-10">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Desktops</h3>
        <Link className="mr-12 hover:underline text-blue-800" to={"/category/Desktops"} onClick={viewall}>
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
          Array.isArray(desktops) &&
          desktops.slice(0, 8).map((desktop, index) => {
            return <LaptopCard key={index} laptop={desktop} />;
          })
        )}
      </div>
    </div>
  );
};

export default Desktops;
