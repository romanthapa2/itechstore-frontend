import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { laptopError, laptopLoading, laptopdataid } from "../reduxstore/LaptopSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../reduxstore/CartSlice";
import { url } from "../url";
// when some laptop is clicked this page is shown
const Iteminsider = () => {
  const [imageurl, setimageurl] = useState("");
  const laptoploadings = useSelector(laptopLoading);
  const laptperror = useSelector(laptopError);
  const laptopdtabyid = useSelector(laptopdataid);


  useEffect(() => {
    if (laptopdtabyid && laptopdtabyid?.data.img) {
      const fetchImage = async () => {
        try {
          const imageUrl = `${url}/${laptopdtabyid && laptopdtabyid.data.img}`;
          const response = await fetch(imageUrl);

          if (!response.ok) {
            throw new Error("Failed to fetch image");
          }
          setimageurl(imageUrl);
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      };
      fetchImage();
    }
  }, [laptopdtabyid]);

  const dispatch = useDispatch();
  const [no, setno] = useState(1);
  const handlecart = () => {
    dispatch(addToCart({ ...laptopdtabyid.data, quantity: no, totalPrice: laptopdtabyid.price }));
  };

  // toggle desc when clicked it becomes true  another click false
  const [desc, setdesc] = useState(false);
  const handledesc = () => {
    setdesc(!desc);
  };

  return (
    <>
      <div className="md:h-screen bg-slate-200 flex flex-col md:flex-row  md:justify-evenly md:p-10 p-5 gap-4">
        {/* diplay image */}
        <div className="bg-white md:h-5/6 md:w-[40%] rounded-md  ">
          {imageurl && <img src={imageurl} alt="Laptop" className="w-full h-full p-14 " />}
        </div>
        {/* diplay  details of laptops*/}
        <div className="bg-white  md:h-5/6 md:w-[40%] rounded-md overflow-y-auto">
          <div className="ml-11 mr-11">
            <h5 className="mt-12 font-light text-sm">HOME / PRODUCTS / LAPTOPS / LENOVO</h5>
            <h1 className="mt-4 text-2xl font-semibold">{laptopdtabyid && laptopdtabyid.data.name}</h1>
            <h2 className="mt-4 font-serif text-xl">RS.{laptopdtabyid.data.price}</h2>
            <div className=" flex flex-row-1 mt-5">
              <div className="flex flex-row">
                <button
                  className={` text-white pl-3 pr-3 text-lg rounded-tl-md rounded-bl-md ${
                    no === 1 ? "bg-black bg-opacity-50" : "bg-black"
                  }`}
                  onClick={() => {
                    setno(no - 1);
                  }}
                  disabled={no === 1}>
                  -
                </button>
                <h3 className="border border-black pl-3 pr-3 text-lg font-semibold">{no}</h3>
                <button
                  className=" bg-slate-950 p-1 text-white pl-3 pr-3 text-lg rounded-tr-md rounded-br-md"
                  onClick={() => {
                    setno(no + 1);
                  }}>
                  +
                </button>
              </div>
              <button
                onClick={handlecart}
                className="flex items-center bg-black text-white ml-6 p-1 pl-4 pr-4 rounded-md">
                <span>
                  <FontAwesomeIcon icon={faCartPlus} className="mr-2 text-white" />
                  Add to Cart
                </span>
              </button>
            </div>
            <section className="mt-8">
              <div className="flex flex-row justify-between mr-10 border-t-2 pt-1" onClick={handledesc}>
                <h2 className="text-lg font-sans font-medium">Specifications</h2>
                <span className="text-2xl font-semibold">{desc ? "-" : "+"}</span>
              </div>
              {desc && (
                <div className="mr-10 mt-3 ">
                  {/* Render description here */}
                  <p>{laptopdtabyid.data.desc}</p>
                </div>
              )}
              <div className="flex flex-row justify-between mr-10 mt-3 border-t-2 border-b-2 pb-2 pt-2">
                <h3 className="text-lg font-sans font-medium">Reviews</h3>
                <span className="text-2xl font-semibold">+</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Iteminsider;
