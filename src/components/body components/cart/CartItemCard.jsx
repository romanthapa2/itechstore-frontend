import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const cartItem = React.memo(({data, index, imgUrls, handleMinusCart, handleAddCart, hanledeleteitem }) => {
  return (
    <div className="mb-2 md:flex md:flex-row bg-white p-5 rounded-lg" key={index}>
      <div className=" md:mr-5">
        {imgUrls[index] && <img src={imgUrls[index]} className="w-72" alt="Blue Jeans Jacket" />}
      </div>

      <div className="mb-4 mr-10 text-xl">
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
          <i className="fas fa-trash" onClick={() => hanledeleteitem(index)}>
            <FontAwesomeIcon icon={faTrash} />
          </i>
        </button>
        <button
          type="button"
          className="bg-red-800 p-2 text-white mb-2  rounded-md"
          data-mdb-toggle="tooltip"
          title="Move to the wish list">
          <i className="fas fa-heart">
            <FontAwesomeIcon icon={faHeart} />
          </i>
        </button>
      </div>

      <div className="flex flex-row  mb-4 mr-10">
        <div className="mb-4 flex flex-row" style={{ maxWidth: "300px" }}>
          <button
            disabled={data.quantity === 1}
            onClick={() => handleMinusCart(data)}
            className="p-1 md:h-10 bg-blue-600 px-3 me-2  rounded-md">
            <i>
              <FontAwesomeIcon icon={faMinus} />
            </i>
          </button>
          <div className="">
            <label className="form-label" htmlFor="form1">
              {data.quantity}
            </label>
          </div>
          <button className="p-1 md:h-10 bg-blue-600 px-3 ms-2  rounded-md">
            <i onClick={() => handleAddCart(data)}>
              <FontAwesomeIcon icon={faPlus} />
            </i>
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
