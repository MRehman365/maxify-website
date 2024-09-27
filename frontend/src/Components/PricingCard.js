import React, { useState, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const PricingCard = ({ title, price, features, index, features2, color }) => {
  const [showMore, setShowMore] = useState(null);
  const featuresRef = useRef(null); // Ref for smooth scroll

  const handleClick = (i) => {
    if (showMore === i) {
      setShowMore(null);
    } else {
      setShowMore(i);
      setTimeout(() => {
        // Smooth scroll to the features section
        featuresRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div
      className={`${
        showMore === index ? "h-auto" : "h-[28rem]"
      } w-[90%] flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-2xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white ${color}`}
    >
      <h3 className=" text-2xl font-semibold">{title}</h3>

      <div className="flex justify-center items-baseline my-4">
        <span className="mr-2 text-xl font-semibold">{price}</span>
        <span className="text-gray-300 dark:text-gray-400">/month</span>
      </div>
      <div className="mb-2">
        <hr />
      </div>

      {/* Features List */}
      <ul role="list" className="mb-4 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div
        ref={featuresRef}
        className={showMore === index ? "block" : "hidden"}
      >
        <ul role="list" className="mb-8 space-y-4 text-left">
          {features2?.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="flex justify-center gap-2"
        onClick={() => handleClick(index)}
      >
        <span>{showMore === index ? "view Less" : "View More"}</span>
        <span className="mt-1">
          <FaArrowDown />
        </span>
      </button>

      <a
        href="#"
        className="text-[#2334DE] flex justify-center gap-2 bg-white mt-2 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
      >
        <span>Choose This Plan</span>
        <span className="mt-1">
          <FaArrowRightLong />
        </span>
      </a>
    </div>
  );
};

export default PricingCard;
