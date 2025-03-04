import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  laptopLoading,
  laptopError,
  laptopdataid,
  laptopDataByType,
  laptopDataByBrand,
} from "../reduxstore/LaptopSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../reduxstore/CartSlice";
import LaptopCard from "./LaptopCard";
import { url } from "../url";

const ImageViewer = ({ imageUrl }) => (
  <div className="bg-white md:h-5/6 md:w-[48%] rounded-md">
    {imageUrl && <img src={imageUrl} alt="Laptop" className="w-full h-full p-14" />}
  </div>
);

const QuantitySelector = ({ quantity, setQuantity }) => (
  <div className="flex flex-row">
    <button
      className={`text-white pl-3 pr-3 text-lg rounded-tl-md rounded-bl-md ${
        quantity === 1 ? "bg-black bg-opacity-50" : "bg-black"
      }`}
      onClick={() => setQuantity(quantity - 1)}
      disabled={quantity === 1}>
      -
    </button>
    <h3 className="border border-black pl-3 pr-3 text-lg font-semibold">{quantity}</h3>
    <button
      className="bg-slate-950 p-1 text-white pl-3 pr-3 text-lg rounded-tr-md rounded-br-md"
      onClick={() => setQuantity(quantity + 1)}>
      +
    </button>
  </div>
);

const AddToCartButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center bg-black text-white ml-6 p-1 pl-4 pr-4 rounded-md hover:bg-opacity-80 transition duration-300">
    <FontAwesomeIcon icon={faCartPlus} className="mr-2 text-white" />
    Add to Cart
  </button>
);

const ItemDetails = ({ laptop, quantity, setQuantity, handlecart, desc, handledesc }) => (
  <div className="bg-white md:h-auto md:w-[48%] rounded-md overflow-y-auto">
    <div className="ml-11 mr-11">
      <h5 className="mt-12 font-light text-lg">Home / Products / {laptop.type} / {laptop.brand}</h5>
      <h1 className="mt-4 text-2xl font-semibold">{laptop.name}</h1>
      <h2 className="mt-4 font-serif text-xl">RS.{laptop.price}</h2>
      <div className="flex flex-row-1 mt-5">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton onClick={handlecart} />
      </div>
      <section className="mt-8">
        <div className="flex flex-row justify-between mr-10 border-t-2 pt-1 cursor-pointer" onClick={handledesc}>
          <h2 className="text-lg font-sans font-medium">Specifications</h2>
          <span className="text-2xl font-semibold">{desc ? "-" : "+"}</span>
        </div>
        {desc && (
          <div className="mr-10 mt-3">
            <p>{laptop.desc}</p>
          </div>
        )}
        <div className="flex flex-row justify-between mr-10 mt-3 border-t-2 border-b-2 pb-2 pt-2">
          <h3 className="text-lg font-sans font-medium">Reviews</h3>
          <span className="text-2xl font-semibold">+</span>
        </div>
      </section>
    </div>
  </div>
);

const Iteminsider = () => {
  const [imageurl, setimageurl] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [desc, setdesc] = useState(false);

  const laptopLoadingState = useSelector(laptopLoading);
  const laptopErrorState = useSelector(laptopError);
  const laptopById = useSelector(laptopdataid);
  const laptopDataByTypes = useSelector(laptopDataByType);
  const laptopDataByBrands = useSelector(laptopDataByBrand)
  const dispatch = useDispatch();

  useEffect(() => {
    if (laptopById?.data.img) {
      const fetchImage = async () => {
        try {
          const imageUrl = `${url}/${laptopById.data.img}`;
          const response = await fetch(imageUrl);
          if (!response.ok) throw new Error("Failed to fetch image");
          setimageurl(imageUrl);
        } catch (error) {
          console.error("Error fetching image:", error);
        setimageurl(""); // Reset image URL on error
        }
      };
      fetchImage();
    }
  }, [laptopById]);

  const handlecart = () => {
    dispatch(addToCart({ ...laptopById.data, quantity, totalPrice: laptopById.price }));
  };

  const handledesc = () => setdesc(!desc);

  if (laptopLoadingState) return <div>Loading...</div>;
  if (laptopErrorState) return <div>Error: {laptopErrorState}</div>;

  const moreFromBrand = laptopDataByBrands?.data?.filter(
    (laptop) => laptop._id !== laptopById.data._id
  );

  const similarProducts = laptopDataByTypes?.data?.filter(
    (laptop) => laptop._id !== laptopById.data._id
  );

  return (
    <div className="md:h-200vh">
      <div className="bg-slate-200 flex flex-col md:flex-row md:justify-evenly md:p-10 p-5 gap-4">
        <ImageViewer imageUrl={imageurl} />
        <ItemDetails
          laptop={laptopById.data}
          quantity={quantity}
          setQuantity={setQuantity}
          handlecart={handlecart}
          desc={desc}
          handledesc={handledesc}
        />
      </div>
      <div className="ml-12 w-fit">
        <h3 className="text-xl">More from {laptopById?.data?.brand}</h3>
      </div>
      <div className="mx-6 md:mx-10 md:pl-4 mb-10">
        <div className="md:flex overflow-x-auto gap-4">
          {Array.isArray(moreFromBrand) &&
            moreFromBrand.slice(0, 8).map((laptop, index) => (
              <LaptopCard key={index} laptop={laptop} flexShrink={0} />
            ))}
        </div>
      </div>

      <div className="ml-12 w-fit">
        <h3 className="text-xl">Similar Products</h3>
      </div>
      <div className="mx-6 md:mx-10 md:pl-4 mb-10">
        <div className="md:flex overflow-x-auto gap-4">
          {Array.isArray(similarProducts) &&
            similarProducts.slice(0, 8).map((laptop, index) => (
              <LaptopCard key={index} laptop={laptop} flexShrink={0} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Iteminsider;