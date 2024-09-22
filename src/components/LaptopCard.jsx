import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchlaptopbyid } from "../reduxstore/LaptopSlice";
import { Link } from "react-router-dom";
import { url } from "../url";

// get the laptop as props from parent components
const LaptopCard = ({ laptop }) => {
  const [imageurl, setimageurl] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Construct image URL from backend endpoint and image path
        const imageurl = `${url}/${laptop.img}`;
        const response = await fetch(imageurl);

        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        // Set image URL if response is okay
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

  return (
    <Link to={`/product/${laptop.name}`}>
    <div className="flex flex-col mt-4 bg-white h-[95%] w-72 px-5 py-9 rounded-xl" onClick={handleopen}>
      <div>
        <img className="h-52 rounded-xl transition-transform md:hover:scale-110" src={imageurl} alt={laptop.name} />
      </div>
      <div className="mt-14">
        <h2>{laptop.name}</h2>
        <h2 className="font-semibold">RS.{laptop.price}</h2>
      </div>
    </div>
     </Link>
  );
};

export default LaptopCard;
