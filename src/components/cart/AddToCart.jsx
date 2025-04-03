import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cart, deleteCart, addToCart } from "../../reduxstore/CartSlice";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItemCard";
import { url } from "../../url";

const Addtocart = () => {
  const cartData = useSelector(cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgUrls, setImgUrls] = useState([]);
  const [price, setprice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigation = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  // fetch all images concurrently
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (cartData && cartData.length > 0) {
      setIsLoading(true);
      const fetchImages = async () => {
        try {
          const urls = await Promise.all(
            cartData.map(async (data) => {
              const imageUrl = `${url}/${data.img}`;
              const response = await fetch(imageUrl, { signal });
              if (!response.ok) {
                throw new Error("Failed to fetch image");
              }
              return imageUrl;
            })
          );
          setImgUrls(urls);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            console.error("Error fetching images:", error.message);
          }
        } finally {
          setIsLoading(false);
        }
      };
      fetchImages();
    } else {
      setIsLoading(false);
    }
    
    return () => {
      abortController.abort();
    };
  }, [cartData]);

  // calculate total price of all items in the cart
  useMemo(() => {
    let totalprice = 0;
    cartData.forEach((data) => {
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

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-800"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      
      {cartData.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-800 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="lg:w-2/3 space-y-4">
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

          {/* Summary Section */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹ {price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total Amount</span>
                    <span className="text-lg">₹ {price.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-gray-500 text-right">(including VAT)</div>
                </div>
              </div>
              
              <button
                type="button"
                onClick={handleNavigation}
                className="w-full py-3 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                Proceed to Checkout
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="w-full mt-3 py-2 border border-blue-800 text-blue-800 rounded-md font-medium hover:bg-blue-50 transition duration-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addtocart;