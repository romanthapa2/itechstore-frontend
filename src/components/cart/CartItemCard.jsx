import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";


// carts ko item card
const MemoizedFontAwesomeIcon = React.memo(FontAwesomeIcon)
const cartItem = React.memo(({data, index, imgUrls, handleMinusCart, handleAddCart, hanledeleteitem }) => {
  const onMinusClick = () => handleMinusCart(data);
  const onAddClick = () => handleAddCart(data);
  const onDeleteClick = () => hanledeleteitem(index);
  console.log(`app rendered 2 ${Math.random()}`)
  
  return (
    <div className="mb-2 md:flex md:flex-row bg-white md:h-64 p-5 rounded-lg" key={index}>
      <div className=" md:mr-5">
        {imgUrls[index] && <img src={imgUrls[index]} className="w-72 size-56" alt="Blue Jeans Jacket" />}
      </div>

      <div className="mb-4 mr-10 text-xl w-72">
        <p className="mb-2">
          <strong>{data.name}</strong>
        </p>
        <p className="mb-2">Color: blue</p>
        <p className="mb-2">Size: 14''</p>
        <button
          type="button"
          className="bg-blue-600 p-2 text-white  me-5 mb-2  rounded-md"
          data-mdb-toggle="tooltip"
          title="Remove item">
            <MemoizedFontAwesomeIcon icon={faTrash} onClick={onDeleteClick} />
        </button>
        <button
          type="button"
          className="bg-red-800 p-2 text-white mb-2  rounded-md"
          data-mdb-toggle="tooltip"
          title="Move to the wish list">
            <MemoizedFontAwesomeIcon icon={faHeart} />
        </button>
      </div>

      <div className="flex flex-row  mb-4 mr-3">
        <div className="mb-4 flex flex-row" style={{ maxWidth: "300px" }}>
          <button
            disabled={data.quantity === 1}
            onClick={onMinusClick}
            className="p-1 md:h-10 bg-blue-600 px-3 me-2  rounded-md">
              <MemoizedFontAwesomeIcon icon={faMinus} />
          </button>
          <div className="">
            <label className="form-label" htmlFor="form1">
              {data.quantity}
            </label>
          </div>
          <button className="p-1 md:h-10 bg-blue-600 px-3 ms-2  rounded-md">
              <MemoizedFontAwesomeIcon icon={faPlus} onClick={onAddClick}/>
          </button>
        </div>

        <p className="text-start ml-9">
          <strong>R.S{data.totalPrice}</strong>
        </p>
      </div>

      <hr className="my-4" />
    </div>
  );
});

export default cartItem;
