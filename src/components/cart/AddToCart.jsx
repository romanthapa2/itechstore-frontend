import React, { useEffect, useMemo, useState,useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cart, deleteCart, addToCart } from "../../reduxstore/CartSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar components/Navbar";
import Navabarup from "../Navbar components/NavabarUp";
import CartItem from "./CartItemCard";
import Footer from "../footer components/Footer";
import Footermuni from "../footer components/FooterMuni";
import cartItem from "./CartItemCard";

const Addtocart = () => {
  console.log(`app rendered ${Math.random()}`)
  // getting the array of laptops detail which is stored in array of reducer
  // like [{name:..,price:...}]
  const cartData = useSelector(cart);
  console.log(cartData)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgUrls, setImgUrls] = useState([]);

  const handleNavigation = useCallback(() => {
    navigate("/checkoutpage");
  },[navigate]);

  // fetch all images cuncurrently
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (cartData && cartData.length > 0) {
      const fetchImages = async () => {
        try {
          const urls = await Promise.all(
            cartData.map(async (data) => {
              console.log(data.img)
              const imageUrl = `http://localhost:5000/${data.img}`;
              const response = await fetch(imageUrl, { signal });
              if (!response.ok) {
                throw new Error("Failed to fetch image");
              }
              return imageUrl;
            })
          );
          setImgUrls(urls);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      fetchImages();
    }
    return () => {
      abortController.abort();
    };
  }, [cartItem]);


  const [price, setprice] = useState(0);
  // calculate total price of all items in the cart
  const totalPrice = useMemo(() => {
    let totalprice = 0;
    cartData.forEach((data) => {
      // console.log(data.data.totalPrice)
      const formattedPrice = data.totalPrice;
      if (!isNaN(formattedPrice)) {
        totalprice += parseInt(formattedPrice);
      } else {
        console.warn("Invalid price for item:", data.name);
      }
    });
    setprice(totalprice);
  }, [cartData]);


  // dispatches the actions to the cartarray
  const hanledeleteitem = (e) => {
    dispatch(deleteCart(e));
  };

  const handleAddCart = (e) => {
    dispatch(addToCart({ ...e, quantity: 1 }));
  };

  const handleMinusCart = (e) => {
    dispatch(addToCart({ ...e, quantity: -1 }));
  };

  return (
    <>
      <Navabarup />
      <Navbar />
      <div className="h-fit py-5 flex flex-col md:flex-row justify-center gap-6 my-3">
        <div className="m-5 md:mb-4">
          <div className="py-3">
            <h5 className="ml-1 md:ml-0 text-2xl font-semibold">Cart Quantity {cartData.length}</h5>
          </div>
          {/* cartitem */}
          {cartData.map((data, index) => (
            <CartItem
              key={index}
              data={data}
              index={index}
              imgUrls={imgUrls}
              handleMinusCart={handleMinusCart}
              handleAddCart={handleAddCart}
              hanledeleteitem={hanledeleteitem}
            />
          ))}
        </div>

        {/* summary of cart items */}
        <div className="md:mt-14 mx-5 md:mx-0">
          <div className=" bg-white p-10 rounded-lg">
            <div className="">
              <h5 className="mb-2 border-b-2 text-lg font-semibold">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="">
                <li className="mb-1 border-0 px-0 pb-0">
                  Products
                  <span className="ml-20">R.S {price}</span>
                </li>
                <li className="mb-1 px-0 border-b-2">
                  Shipping
                  <span className="ml-20">Gratis</span>
                </li>
                <li className="border-0 px-0 mb-3 flex flex-row">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span className="ml-10">
                    <strong>R.S {price}</strong>
                  </span>
                </li>
              </ul>

              <button
                type="button"
                onClick={handleNavigation}
                className="p-3 bg-blue-800 text-white rounded-md">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Footermuni />
    </>
  );
};

export default Addtocart;
