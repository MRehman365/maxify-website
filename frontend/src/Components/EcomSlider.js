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
      className="absolute top-4 right-4 z-10 cursor-pointer text-2xl md:text-3xl text-white bg-[#635ad9] flex justify-center items-center sm:h-8 sm:w-8 md:h-12 md:w-12 rounded-full"
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
      className="absolute top-4 right-20 z-10 cursor-pointer text-2xl md:text-3xl text-[#635ad9] flex justify-center items-center sm:h-8 sm:w-8 md:h-12 md:w-12 rounded-full border border-[#635ad9]"
      onClick={onClick}
    >
      <GoArrowLeft />
    </div>
  );
}

const EcomSlider = () => {
  const caseStudies = [
    {
      title: "Fashion Retailer",
      icone:
        "https://i.ibb.co/KjMs1gpz/fashion-retailer.jpg",
      description:
        "We helped a leading fashion brand launch an e-commerce store that increased their online sales by 200% within the first six months.",
    },
    {
      title: "Electronics Store",
      icone:
        "https://i.ibb.co/s9BHgYrn/electronic-store.jpg",
      description:
        "Our team developed a robust e-commerce platform for an electronics retailer, enabling them to handle high-order volumes during peak shopping seasons.",
    },
    {
      title: "Healthcare Products",
      icone:
        "https://i.ibb.co/qFxFGNVb/Healthcareproduct.jpg",
      description:
        "We designed and developed an e-commerce website for a healthcare company, ensuring compliance with industry regulations while providing a user-friendly shopping experience.",
    },
    {
      title: "Food Delivery Service",
      icone:
        "https://i.ibb.co/cjRbRY2/img6.png",
      description:
        "Developed a scalable and efficient platform for a food delivery service that optimized delivery times and improved user satisfaction.",
    },
    {
      title: "Home Decor Store",
      icone:
        "https://i.ibb.co/j9PhsqXq/BUSINESS-BOOST-REVENUE2.jpg",
      description:
        "Built a visually appealing e-commerce platform for a home decor brand that enhanced their customers' online shopping experience.",
    },
    {
      title: "Sports Goods Store",
      icone:
        "https://i.ibb.co/ynB4nKxd/BUSINESS-BOOST-REVENUE.jpg",
      description:
        "Helped a sports goods retailer streamline their online sales operations and reach a broader audience with a robust e-commerce platform.",
    },
  ];

  const statistics = [
    {
      icon: "https://i.ibb.co/4Z83KLHJ/Group.png",
      number: "1000+",
      text: "Satisfied Clients",
    },
    {
      icon: "https://i.ibb.co/0jg8zqMM/Vector.png",
      number: "600+",
      text: "Finished Projects",
    },
    {
      icon: "https://i.ibb.co/DPbgDVgg/Group-1.png",
      number: "100+",
      text: "Skilled Experts",
    },
    {
      icon: "https://i.ibb.co/v46ZpT94/Group-2.png",
      number: "5,90+",
      text: "Media Posts",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    waitForAnimate: false,
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="bg-image bg-cover w-full">
          <div className="w-[90%] mx-auto py-10">
            <div className="sm:w-[100%] md:w-[70%] mt-5 md:mt-0">
              <h2 className="text-2xl md:text-5xl">
                <span className="gradient-text2 font-bold">
                  Our Portfolio :{" "}
                </span>{" "}
                <span className="font-normal">
                  Success Stories from Leading Brands
                </span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-justify">
                Over the years, Maxify Solutions has had the privilege of
                working with a diverse range of clients, from startups to
                established enterprises. Our portfolio showcases a variety of
                successful e-commerce websites that have helped businesses
                achieve their online goals. As an Ecommerce Website Designing
                Company in Delhi, we have delivered projects that span various
                industries, including fashion, electronics, healthcare, and
                more.
              </p>
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            <div className="card">
              <div className="sm:text-2xl md:text-4xl font-bold">
                <h2 className="gradient-text2">Case Study :</h2>
              </div>
              {/* Display 3 case studies on the first slide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {caseStudies.slice(0, 3).map((study, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-gray-200 rounded-lg shadow-md text-gray-600 hover:bg-[#635AD9] hover:text-white transition duration-300 ease-in-out"
                  >
                    <img
                      className="w-14"
                      src={study.icone}
                      alt="maxify websolution"
                    />
                    <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2 mt-5">
                      {study.title}
                    </h3>
                    <p className="text-sm md:text-base">{study.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex justify-end mt-8">
            <div className="md:w-[90%] w-full">
              <div className="bg-[#635AD9]  sm:py-2 md:py-0 flex sm:flex-col md:flex-row gap-5 justify-between md:pl-10 items-center text-white md:rounded-l-full">
                {statistics.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="text-center flex flex-col items-center"
                  >
                    <img
                      className="w-10 "
                      src={stat.icon}
                      alt="maxify websolution"
                    />
                    <div className="md:text-3xl sm:text-xl font-bold">
                      {stat.number}
                    </div>
                    <div>{stat.text}</div>
                  </div>
                ))}
                <div className="sm:hidden md:block">
                  <img
                    className="w-60 h-[13rem]"
                    src="https://i.ibb.co/DHxrMMCJ/img13.png"
                    alt="maxify websolution"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="bg-image bg-cover w-full">
          <div className="w-[90%] mx-auto py-10">
            <div className="w-[100%]">
              <h2 className="text-2xl md:text-5xl sm:mt-5 md:mt-0 text-center md:text-left">
                <span className="gradient-text font-bold">
                  Customer Reviews :{" "}
                </span>{" "}
                <span className="font-normal">
                  The Things Our Customers Have to Say About Us
                </span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-justify">
                At Maxify Solutions, client satisfaction is our top priority.
                What some of our clients had to say about their interactions
                with us is included below:
              </p>
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            <div className="card">
              <div className="text-2xl md:text-4xl font-bold">
                <h2 className="gradient-text2">Case Studies :</h2>
              </div>
              {/* Display next 3 case studies on the second slide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {caseStudies.slice(3, 6).map((study, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-gray-200 rounded-lg shadow-md text-gray-600 hover:bg-[#635AD9] hover:text-white transition duration-300 ease-in-out"
                  >
                    <img
                      className="w-14"
                      src={study.icone}
                      alt="maxify websolution"
                    />
                    <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-2 mt-5">
                      {study.title}
                    </h3>
                    <p className="text-sm md:text-base text-justify">
                      {study.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <div className="md:w-[90%] w-full">
              <div className="bg-[#635AD9]  sm:py-2 md:py-0 flex sm:flex-col md:flex-row gap-5 justify-between md:pl-10 items-center text-white md:rounded-l-full">
                {statistics.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="text-center flex flex-col items-center"
                  >
                    <img
                      className="w-10 "
                      src={stat.icon}
                      alt="maxify websolution"
                    />
                    <div className="md:text-3xl sm:text-xl font-bold">
                      {stat.number}
                    </div>
                    <div>{stat.text}</div>
                  </div>
                ))}
                <div className="sm:hidden md:block">
                  <img
                    className="w-60 h-[13rem]"
                    src="https://i.ibb.co/DHxrMMCJ/img13.png"
                    alt="maxify websolution"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default EcomSlider;
