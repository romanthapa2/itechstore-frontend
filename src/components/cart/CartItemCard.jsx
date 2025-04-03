import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// carts ko item card
const CartItem = React.memo(({ data, index, imgUrls, handleMinusCart, handleAddCart, hanledeleteitem }) => {
  const onMinusClick = () => handleMinusCart(data);
  const onAddClick = () => handleAddCart(data);
  const onDeleteClick = () => hanledeleteitem(index);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 transition-all duration-300 hover:shadow-md" key={index}>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-36">
          {imgUrls[index] ? (
            <img 
              src={imgUrls[index]} 
              className="w-full h-36 object-contain rounded-md" 
              alt={data.name || "Product image"} 
            />
          ) : (
            <div className="w-full h-36 bg-gray-100 rounded-md flex items-center justify-center">
              <div className="animate-pulse w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-grow flex flex-col">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl text-gray-800">{data.name}</h3>
            <button
              onClick={onDeleteClick}
              className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              aria-label="Remove item">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-1 mb-2">
            {data.brand && <span className="bg-gray-100 px-2 py-1 rounded-md">{data.brand}</span>}
            {data.type && <span className="bg-gray-100 px-2 py-1 rounded-md">{data.type}</span>}
          </div>
          
          <div className="flex items-center justify-between mt-auto">
            {/* Price */}
            <div className="font-bold text-lg text-blue-800">
              ₹ {data.totalPrice.toLocaleString()}
            </div>
            
            {/* Quantity Controls */}
            <div className="flex items-center">
              <button
                disabled={data.quantity === 1}
                onClick={onMinusClick}
                className={`p-2 w-9 h-9 flex items-center justify-center rounded-l-md transition-colors ${
                  data.quantity === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
                aria-label="Decrease quantity">
                <FontAwesomeIcon icon={faMinus} size="sm" />
              </button>
              <div className="w-10 h-9 flex items-center justify-center border-t border-b text-center">
                {data.quantity}
              </div>
              <button 
                onClick={onAddClick}
                className="p-2 w-9 h-9 flex items-center justify-center bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-r-md transition-colors"
                aria-label="Increase quantity">
                <FontAwesomeIcon icon={faPlus} size="sm" />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              className="flex items-center text-gray-500 hover:text-blue-600 transition-colors text-sm"
              aria-label="Move to wishlist">
              <FontAwesomeIcon icon={faHeart} className="mr-1" />
              <span>Save for later</span>
            </button>
            
            <div className="text-sm text-gray-500">
              Total: <span className="font-semibold text-gray-800">₹ {data.totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CartItem;
