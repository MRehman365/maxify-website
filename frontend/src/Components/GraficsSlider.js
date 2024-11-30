import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Custom Next Arrow Component
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-4 right-4 z-10 cursor-pointer text-3xl text-white bg-[#635ad9] flex justify-center items-center h-12 w-12 rounded-full"
      onClick={onClick}
    >
      <GoArrowRight />
    </div>
  );
}

// Custom Prev Arrow Component
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-4 right-20 z-10 cursor-pointer text-3xl text-[#635ad9] flex justify-center items-center h-12 w-12 rounded-full border border-[#635ad9]"
      onClick={onClick}
    >
      <GoArrowLeft />
    </div>
  );
}

const GraficsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Enable fade effect
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
    waitForAnimate: false,
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}></Slider>
    </div>
  );
};

export default GraficsSlider;
