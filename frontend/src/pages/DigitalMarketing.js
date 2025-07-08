import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-icons/hi"; // Using Heroicons from react-icons
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import SEOComponent from "../Components/SEOComponent";

const DigitalMarketing = () => {
  const slides = [
    "https://i.ibb.co/6c6G4QkX/3.png",
    "https://i.ibb.co/gMdhQKnN/image.png",
    "https://i.ibb.co/bjW2CN8W/Property-1-Frame-179.png",
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[70px]">
      <div>
        <SEOComponent
          title="Branding Digital Marketing Agency in Noida, Maxify Solutions"
          description="Maxify Solutions, Top leading digital marketing and branding agency in Noida, specializes in SEO, SMO, and creative branding strategies. Boost your brand's online presence with our expert solutions!"
          keywords="Home, Digital Marketing, Noida, Delhi NCR, Maxify Web Solutions"
        />
      </div>
      <div className="flex md:flex-row flex-col w-full md:w-[90%] lg:w-[80%] mx-auto p-2 md:p-4 mt-6">
        <div className="md:w-[60%]">
          <h2 className="text-3xl md:text-6xl lg:text-7xl text-[#2334de] font-bold text-center md:px-10">
            <span className="text-black font-medium text-3xl md:text-5xl">
              Grow Your
            </span>{" "}
            Business{" "}
            <span className="text-black font-medium text-3xl md:text-5xl">
              {" "}
              with the
            </span>{" "}
            Best Digital Marketing Company
            <span className="text-black font-medium text-3xl md:text-5xl">
              {" "}
              in{" "}
            </span>
            Noida
          </h2>
        </div>
        <div className="md:w-[40%]  p-4 flex flex-col items-end">
          <p className="text-justify text-gray-500 font-manrope">
            In the current digital world, a strong online presence is necessary
            for any business looking for growth. As the best digital marketing
            company in Noida, we at Maxify Web Solutions are committed to
            helping you achieve your business goals through successful and
            creative digital marketing strategies. Whether you want to improve
            your search engine ranks, increase your social media engagement, or
            generate more traffic with PPC ads, we have you covered.
          </p>
          <Link to="/contact">
               <button
                  className="mt-8 py-3 lg:ml-[20px]  text-[14px] font-[300] px-5 rounded-sm relative text-[white] bg-[#2334DE] isolation-auto z-10 border-2 border-[#2334DE]
                 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2334DE]"
                >
                  Get Started Now
                </button>
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full md:w-[90%] lg:w-[80%] mx-auto p-4">
        <div className="w-full">
          <img
          className="w-full h-[400px] object-cover rounded-2xl"
            src="https://i.ibb.co/rfX8cwrj/Image.png"
            alt="Affordable digital marketing agency in noida delhi ncr"
          />
        </div>
      </div>
      {/* 3rd section */}
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto px-4 py-12">
        <div className="text-sm uppercase tracking-wider text-blue-600 mb-2">
          CHOOSE US
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-[40px] font-[600] mb-6 leading-10">
              Why Choose Us as Your
              <br />
              <span className="text-blue-600 font-bold">
                Digital Marketing Partner?
              </span>
            </h2>
            <ul className="space-y-4 md:w-[80%] font-manrope">
              <li>
                <h3 className="font-semibold">Expertise:</h3>
                <p className="text-gray-600 text-justify">
                  With years of experience in the digital marketing industry, we
                  have the knowledge and skills to craft strategies that deliver
                  results.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Customized Solutions:</h3>
                <p className="text-gray-600 text-justify">
                  We understand that every business is unique. Our team of
                  experts provides you with overall digital marketing strategies
                  that increase your brand awareness.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Proven Results:</h3>
                <p className="text-gray-600 text-justify">
                  We have a track record of helping businesses across various
                  industries grow their online presence and achieve their
                  marketing goals.
                </p>
              </li>
            </ul>
            <Link
              to="/about"
              className="mt-6 inline-block border border-black text-black hover:bg-black hover:text-white px-4 py-2 rounded-2xl transition-colors"
            >
              Learn more
            </Link>
          </div>

          {/* Slider */}
          <div className="relative">
            <Slider {...sliderSettings}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <img
                    src={slide}
                    alt={`altslides ${index + 1}`}
                    className="rounded-lgw-full h-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* section 4th */}
      <section className="max-w-6xl mx-auto px-4 py-16 font-manrope">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
            FEATURES
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Digital Marketing Services
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-[340px] h-full p-6 flex flex-col">
            <img
              src="https://i.ibb.co/XrvdT4Tg/4.png"
              alt="top digital markeing agency in delhi ncr"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="flex flex-col items-center flex-grow">
              <h3 className="text-4xl text-center text-gray-900 mb-2">
                SEO & SMO Services:
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Increases Your Online Visibility
              </p>
              <Link to="/seo-company-in-noida">
                <button className="bg-blue-600 hover:bg-blue-700 text-white  py-2 px-4 rounded-2xl mt-auto">
                  Learn more
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-[340px] min-h-[400px] p-6 flex flex-col">
            <img
              src="https://i.ibb.co/39GpnYd6/5.png"
              alt="ppc for paid advertisement brand promotion"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="flex flex-col items-center justify-between  h-1/2">
              <div>
                <h3 className="text-4xl text-center text-gray-900 mb-2">
                  PPC Ads:
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Drive Immediate Results
                </p>
              </div>
              <Link to="/social-media-agency-in-noida">
                <button className="border border-gray-300 text-gray-800  py-2 px-4 rounded-2xl hover:bg-gray-100 mt-auto">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col-reverse md:flex-row items-center p-3 bg-background rounded-lg mx-auto sm:w-full md:w-[94%] lg:w-[80%]">
        {/* Right side with video */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex sm:justify-center md:justify-start">
          <img
            src="https://i.ibb.co/v6ZY38gb/6.png"
            alt="online marketing agency"
            className="sm:w-full md:w-[80%]"
          />
        </div>
        {/* Left side content */}
        <div className="md:w-1/2">
          {/* <span className="text-sm bg-[#e5e5ff] text-[black] rounded px-3 py-1">
            Why
          </span> */}
          <h3 className="sm:text-3xl md:text-5xl font-[500] text-[black] mt-4 font-manrope">
            Partner with the{" "}
            <span className="text-[#2334de] font-semibold">
              {" "}
              Best Digital Marketing Company
            </span>{" "}
            in Noida
          </h3>
          <p className="mt-4 text-sm md:text-base text-gray-500 leading-6 md:leading-7 text-justify font-manrope">
            Choosing the right digital marketing partner can make all the
            difference in your business's success. As the best Digital Marketing
            company in Noida, MaxifySolutions is committed to helping you
            achieve your marketing goals with our expertise, innovation, and
            dedication. Whether you need{" "}
            <span className="text-black font-[500]">
              {" "}
              SEO & SMM services, PPC ads,
            </span>{" "}
            or a comprehensive digital marketing strategy, we're here to guide
            you every step of the way.
          </p>
          <Link to="/contact">
            <button
              className="mt-8 py-2 text-sm md:text-[14px] font-[300] px-8 rounded-full relative text-[white] bg-[#2563EB] isolation-auto z-10 border-2 border-[#2563EB]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  hover:text-[#2563EB]"
            >
              Get Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
