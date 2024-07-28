
import React from "react";
import Slider from "react-slick";
import Image1 from "../../pictures/61insmaQR-S._AC_SL1500_-removebg.png";
import Image2 from "../../pictures/macbook.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Screen Touch",
    title: "Lenovo",
    title2: "360",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Apple",
    title: "Branded",
    title2: "Laptops",
  },

];

const Imageslider = () => {
  const CustomPrevArrow = ({ className, style, onClick }) => (
    <button
    className={className}
    style={{ ...style, left: "0px", zIndex: 1 }}
    onClick={onClick}
    />
  );

  const CustomNextArrow = ({ className, style, onClick }) => (
    <button
    className={className}
    style={{ ...style, right: "0px", zIndex: 1 }}
    onClick={onClick}
    />
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="mx-6 md:mx-16  my-10">
      <div
        className="overflow-hidden rounded-3xl h-[490px] bg-gray-400 flex justify-center items-center
"
      >
        <div className="container px-5">
          {/* Hero section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
               
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data?.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>

                  </div>
                  {/* Img section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt="image"
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Imageslider;
