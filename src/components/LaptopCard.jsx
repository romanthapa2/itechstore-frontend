import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchlaptop, fetchlaptopbyid } from "../reduxstore/LaptopSlice";
import { Link } from "react-router-dom";
import { url } from "../url";

// Skeleton component for loading state
export const SkeletonCard = () => {
  return (
    <div className="flex flex-col mt-4 bg-white h-[95%] w-80 px-5 py-8 rounded-xl overflow-hidden">
      <div>
        <div className="h-52 rounded-xl bg-gray-200 animate-pulse-skeleton"></div>
      </div>
      <div className="mt-8 space-y-2">
        <div className="h-5 w-24 bg-gray-200 animate-pulse-skeleton rounded-md"></div>
        <div className="h-5 w-48 bg-gray-200 animate-pulse-skeleton rounded-md"></div>
        <div className="h-5 w-20 bg-gray-200 animate-pulse-skeleton rounded-md"></div>
      </div>
    </div>
  );
};

const LaptopCard = ({ laptop }) => {
  const [imageurl, setimageurl] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      try {
        const imageurl = `${url}/${laptop.img}`;
        const response = await fetch(imageurl);

        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        setimageurl(imageurl);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching image:", error);
        setIsLoading(false);
      }
    };
    fetchImage();
  }, [laptop.img]);

  const handleopen = (e) => {
    dispatch(fetchlaptopbyid(laptop._id));
    dispatch(fetchlaptop({ filterType: "type", value: laptop.type }))
    dispatch(fetchlaptop({ filterType: "brand", value: laptop.brand }))
  };

  const words = laptop.name.split(" ");
  const firstWord = words[0].toUpperCase();
  const restOfSentence = words.slice(1).join(" ");

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <Link to={`/product/${laptop.name}`}>
      <div
        className="flex flex-col mt-4 bg-white h-[95%] w-80 px-5 py-8 rounded-xl overflow-hidden"
        onClick={handleopen}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div>
          <img
            className="h-52 rounded-xl transition-transform md:hover:scale-110"
            src={imageurl}
            alt={laptop.name}
          />
        </div>
        <div className="mt-8 space-y-2">
          <h1 className="text-slate-600 font-semibold">{firstWord}</h1>
          <h2
            className={`text-nowrap ${
              isHovering  && restOfSentence.length > 32 ? "animate-text" : ""
            }`}
          >
            {restOfSentence}
          </h2>
          <h2 className="font-semibold">RS.{laptop.price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default LaptopCard;