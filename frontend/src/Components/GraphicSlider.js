import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import img1 from "../Assets/Graphics/image (6).png";
import img2 from "../Assets/Graphics/image (7).png";
import img3 from "../Assets/Graphics/image (8).png";
import img4 from "../Assets/Graphics/image (9).png";
import img5 from "../Assets/Graphics/image (11).png";
import img6 from "../Assets/Graphics/image (12).png";
import img7 from "../Assets/Graphics/image (13).png";
import img8 from "../Assets/Graphics/image (14).png";
import img9 from "../Assets/Graphics/image (16).png";
import img10 from "../Assets/Graphics/image (17).png";

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

const GraphicSlider = () => {
  const caseStudies = [
    {
      title: false,
      description:
        "Your brand identity is more than just a logo; it’s how your audience perceives you. We assist you in creating a powerful brand identity that appeals to your intended audience.",
    },
    {
      title: "Logo Design",
      description:
        "Creating distinctive memorable logos that capture the spirit of your business.",
    },
    {
      title: "Brand Guidelines",
      description:
        "Creating comprehensive brand guidelines to ensure consistency across all channels.",
    },
    {
      title: "Stationery Crafting",
      description:
        "Making business cards, letterheads, and similar branded items.",
    },
  ];
  const Slid2 = [
    {
      title: false,
      description:
        "Marketing collateral is essential for promoting your products and services. We design visually appealing and persuasive marketing materials that drive engagement and conversions",
    },
    {
      title: "Brochures and Flyers:",
      description:
        "Engaging and informative designs to showcase your offerings.",
    },
    {
      title: "Posters and Banners: ",
      description:
        "Eye-catching posters and banners for events, trade shows, and promotions.",
    },
    {
      title: "Infographics:",
      description:
        " Datadriven infographics that make complex information easy to understand.",
    },
  ];
  const Slid3 = [
    {
      title: false,
      description:
        "Strong visual content is key to enhancing your online presence. We create stunning website and social media graphics that attract and retain your audience.",
    },
    {
      title: "Website Graphics:",
      description:
        " Custom graphics for websites, including banners, icons, and buttons.",
    },
    {
      title: "Social Media Posts: ",
      description:
        " Engaging social media graphics tailored for platforms like Facebook, Instagram, LinkedIn, and more",
    },
    {
      title: "Ad Creatives:",
      description:
        "  Highimpact ad creatives for digital marketing campaigns, including PPC, display ads, and retargeting ads.",
    },
  ];
  const Slid4 = [
    {
      title: false,
      description:
        "A user-centric approach to design is essential for creating intuitive and engaging digital experiences. Our UI/UX design services focus on delivering a seamless user journey.",
    },
    {
      title: "User Interface­ (UI) Creation:",
      description:
        " Enhancing the visual beauty and e­ase of use of interface­s for websites, apps, and software.",
    },
    {
      title: "User Experience (UX) Design:",
      description:
        " Optimizing the user experience through research, wireframing, and prototyping.",
    },
    {
      title: "Interactive Prototypes: ",
      description:
        "Develop interactive prototypes to visualize the final product before development.",
    },
  ];
  const Slid6 = [
    {
      title: false,
      description:
        "E-commerce businesses thrive on compelling visuals that enhance the shopping experience. We specialize in creating graphics that boost conversion rates and customer satisfaction.",
    },
    {
      title: "Product Image Enhancement:",
      description:
        " Enhancing product images to showcase them in the best light.",
    },
    {
      title: "Banner Ads:  ",
      description:
        "Designing attention-grabbing banners for e-commerce websites and marketplaces",
    },
    {
      title: "Category Graphics:",
      description:
        " Custom category graphics to make navigation easier and more visually appealing",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change content every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [caseStudies.length]);

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
      <Slider {...settings}>
        {/* First Slide */}
        <div className="bg-cover w-full">
          <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-3 gap-6 items-end mt-[80px]">
              {/* Left Container (Images) */}
              <div className="flex flex-col justify-center items-center bg-white shadow-md p-1 rounded-xl">
                <p className="text-xl underline text-center mb-4">Build and Identity Design</p>
                <img
                  src={img2}
                  alt=""
                  className="w-[80%] mb-4 h-auto" // Consistent height and width
                />
              </div>

              {/* Center Container (Auto-Changing Content) */}
              <div className="p-6 relative bg-[#37937e] flex flex-col items-start text-white rounded-2xl shadow-md h-[250px]">
                <p className="font-bold text-3xl text-start mb-2">{caseStudies[currentIndex].title}</p>
                <p  className="text-xl">{caseStudies[currentIndex].description}</p>
                {/* Dots or Line indicating current slide */}
                <div className="mt-4 absolute bottom-5 left-1/2 transform -translate-x-[50%]">
                  {caseStudies.map((_, index) => (
                    <span
                      key={index}
                      className={`inline-block w-3 h-3 mx-1 rounded-full ${
                        currentIndex === index ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Container (Images) */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src={img1}
                  alt=""
                  className="w-[80%] h-auto" // Consistent height and width
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="bg-cover w-full">
          <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-3 gap-6 items-end mt-[70px]">
              {/* Left Container (Images) */}
              <div className="flex flex-col justify-center items-center bg-white shadow-md p-1 rounded-xl">
                <p className="text-xl underline text-center mb-4">Marketing Collateral Design</p>
                <img
                  src={img3}
                  alt=""
                  className="w-[80%] mb-4 h-auto" // Consistent height and width
                />
              </div>

              {/* Center Container (Auto-Changing Content) */}
              <div className="p-6 relative bg-[#37937e] flex flex-col items-start text-white rounded-2xl shadow-md h-[250px]">
                <p className="font-bold text-3xl text-start mb-2">{Slid2[currentIndex].title}</p>
                <p className="text-xl">{Slid2[currentIndex].description}</p>
                {/* Dots or Line indicating current slide */}
                <div className="mt-4 absolute bottom-5 left-1/2 transform -translate-x-[50%]">
                  {Slid2.map((_, index) => (
                    <span
                      key={index}
                      className={`inline-block w-3 h-3 mx-1 rounded-full ${
                        currentIndex === index ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Container (Images) */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src={img4}
                  alt=""
                  className="w-[80%] h-auto" // Consistent height and width
                />
              </div>
            </div>
          </div>
        </div>
        {/* 3 Slide */}
        <div className="bg-cover w-full">
          <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-3 gap-6 items-end mt-[70px]">
              {/* Left Container (Images) */}
              <div className="flex flex-col justify-center items-center bg-white shadow-md p-1 rounded-xl">
                <p className="text-xl underline text-center mb-4">Website and Social Media Graphics</p>
                <img
                  src={img5}
                  alt=""
                  className="w-[80%] mb-4 h-auto" // Consistent height and width
                />
              </div>

              {/* Center Container (Auto-Changing Content) */}
              <div className="p-6 relative bg-[#37937e] flex flex-col items-start text-white rounded-2xl shadow-md h-[250px]">
                <p className="font-bold text-3xl text-start mb-2">{Slid3[currentIndex].title}</p>
                <p className="text-xl">{Slid3[currentIndex].description}</p>
                {/* Dots or Line indicating current slide */}
                <div className="mt-4 absolute bottom-5 left-1/2 transform -translate-x-[50%]">
                  {Slid3.map((_, index) => (
                    <span
                      key={index}
                      className={`inline-block w-3 h-3 mx-1 rounded-full ${
                        currentIndex === index ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Container (Images) */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src={img6}
                  alt=""
                  className="w-[80%] h-auto" // Consistent height and width
                />
              </div>
            </div>
          </div>
        </div>
        {/* 4 Slide */}
        <div className="bg-cover w-full">
          <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-3 gap-6 items-end mt-[70px]">
              {/* Left Container (Images) */}
              <div className="flex flex-col justify-center items-center bg-white shadow-md p-1 rounded-xl">
                <p className="text-xl underline text-center mb-4"> UI/UX Design</p>
                <img
                  src={img7}
                  alt=""
                  className="w-[80%] mb-4 h-auto" // Consistent height and width
                />
              </div>

              {/* Center Container (Auto-Changing Content) */}
              <div className="p-6 relative bg-[#37937e] flex flex-col items-start text-white rounded-2xl shadow-md h-[250px]">
                <p className="font-bold text-3xl text-start mb-2">{Slid4[currentIndex].title}</p>
                <p className="text-xl">{Slid4[currentIndex].description}</p>
                {/* Dots or Line indicating current slide */}
                <div className="mt-4 absolute bottom-5 left-1/2 transform -translate-x-[50%]">
                  {Slid4.map((_, index) => (
                    <span
                      key={index}
                      className={`inline-block w-3 h-3 mx-1 rounded-full ${
                        currentIndex === index ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Container (Images) */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src={img8}
                  alt=""
                  className="w-[80%] h-auto" // Consistent height and width
                />
              </div>
            </div>
          </div>
        </div>
        {/* 6 Slide */}
        <div className="bg-cover w-full">
          <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-3 gap-6 items-end mt-[70px]">
              {/* Left Container (Images) */}
              <div className="flex flex-col justify-center items-center bg-white shadow-md p-1 rounded-xl">
                <p className="text-xl underline text-center mb-4">Packaging and Label Design</p>
                <img
                  src={img9}
                  alt=""
                  className="w-[80%] mb-4 h-auto" // Consistent height and width
                />
              </div>

              {/* Center Container (Auto-Changing Content) */}
              <div className="p-6 relative bg-[#37937e] flex flex-col items-start text-white rounded-2xl shadow-md h-[250px]">
                <p className="font-bold text-3xl text-start mb-2">{Slid6[currentIndex].title}</p>
                <p  className="text-xl">{Slid6[currentIndex].description}</p>
                {/* Dots or Line indicating current slide */}
                <div className="mt-4 absolute bottom-5 left-1/2 transform -translate-x-[50%]">
                  {Slid6.map((_, index) => (
                    <span
                      key={index}
                      className={`inline-block w-3 h-3 mx-1 rounded-full ${
                        currentIndex === index ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Container (Images) */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src={img10}
                  alt=""
                  className="w-[80%] h-auto" // Consistent height and width
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default GraphicSlider;
