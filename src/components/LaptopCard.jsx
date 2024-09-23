import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchlaptopbyid } from "../reduxstore/LaptopSlice";
import { Link } from "react-router-dom";
import { url } from "../url";

const LaptopCard = ({ laptop }) => {
  const [imageurl, setimageurl] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageurl = `${url}/${laptop.img}`;
        const response = await fetch(imageurl);

        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        setimageurl(imageurl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  }, [laptop.img]);

  const handleopen = (e) => {
    dispatch(fetchlaptopbyid(laptop._id));
  };

  const words = laptop.name.split(" ");
  const firstWord = words[0].toUpperCase();
  const restOfSentence = words.slice(1).join(" ");

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