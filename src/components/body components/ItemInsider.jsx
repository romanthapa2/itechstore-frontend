import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { laptopError, laptopLoading, laptopdataid} from "../../reduxstore/LaptopSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar components/Navbar";
import { addToCart,cart } from "../../reduxstore/CartSlice";
import Footer from "../footer components/Footer";
import Footermuni from "../footer components/FooterMuni";

// when some laptop is clicked this page is shown
const Iteminsider = () => {
  const [imageurl, setimageurl] = useState("");
  const laptoploadings = useSelector(laptopLoading);
  const laptperror = useSelector(laptopError);
  const laptopdtabyid = useSelector(laptopdataid);
  const carts=useSelector(cart);
  console.log(carts)

  useEffect(() => {
    if (laptopdtabyid && laptopdtabyid.img) {
      const fetchImage = async () => {
        try {
          // Construct image URL from backend endpoint and image path
          const imageUrl = `http://localhost:5000/${laptopdtabyid && laptopdtabyid.img}`;
          // fetching so that we can see the image  in our show page
          const response = await fetch(imageUrl);

          if (!response.ok) {
            throw new Error("Failed to fetch image");
          }
          // Set image URL if response is okay
          setimageurl(imageUrl);
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      };
      fetchImage();
    }
  }, [laptopdtabyid]);


  const dispatch = useDispatch();
  // const [id,setid]=useState(null);
  //  function which will add items into the cart
  // const history=useNavigate();
  const [no, setno] = useState(1);
  const handlecart = () => {
    dispatch(addToCart({...laptopdtabyid,quantity:no,totalPrice:laptopdtabyid.price}));
  };

  // toggle desc when clicked it becomes true  another click false
  const [desc, setdesc] = useState(false);
  const handledesc = () => {
    setdesc(!desc);
  };

  return (
    <>
      <Navbar />
      <div className="md:h-screen bg-slate-100 flex flex-col md:flex-row md:items-center md:justify-center">
        {/* diplay image */}
        <div className="bg-white md:h-5/6 md:w-1/2 md:mr-10 md:ml-20 ">
          {/* Render the image if imageurl is available */}
          {imageurl && <img src={imageurl} alt="Laptop" className=" mt-5 w-full h-full" />}
        </div>
        {/* diplay  details of laptops*/}
        <div className="bg-white  md:h-5/6 md:w-1/2 md:mr-20">
          <div className="ml-11 mr-11">
            <h5 className="mt-12 font-light text-sm">HOME / PRODUCTS / LAPTOPS / LENOVO</h5>
            <h1 className="mt-4 text-2xl font-semibold">{laptopdtabyid && laptopdtabyid.name}</h1>
            <h2 className="mt-4 font-serif text-xl">RS.{laptopdtabyid.price}</h2>
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
                <div className="mr-10 mt-3">
                  {/* Render description here */}
                  <p>{laptopdtabyid.desc}</p>
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
      <Footer />
      <Footermuni />
    </>
  );
};

export default Iteminsider;
