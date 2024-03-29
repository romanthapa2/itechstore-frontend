import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const collection = [
  {
    img: require("../../pictureskobau/pictures/macbook_air_m1__dxctrdvvxm4i_large.jpg"),
  },
];

const Imageslider = () => {
  const [current, setCurrent] = useState(0);
  const length = collection.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className=" slider flex items-center justify-center relative mt-10  ml-9 mr-9">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="left-arrow size-10 absolute left-0 md-left-7 hover:text-white"
        onClick={prevSlide}
      />

      {collection.map(({ img}, index) => {
        return (
          <div
            className={`slide ${
              index === current ? "active" : ""
            } transition-opacity duration-500 ease-in-out`}
            key={index}>
            {index === current && <img src={img} alt="" className="h-5/6 rounded-2xl" />}
          </div>
        );
      })}
      <FontAwesomeIcon
        icon={faAngleRight}
        className="right-arrow size-10 absolute right-0 hover:text-white md-8"
        onClick={nextSlide}
      />
    </section>
  );
};

export default Imageslider;
