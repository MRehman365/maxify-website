import React, { useState, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const PricingCard = ({ title, price, features, index, features2, color }) => {
  const [showMore, setShowMore] = useState(null);
  const cardRef = useRef(null); // Ref for the card container
  const featuresRef = useRef(null); // Ref for the features section

  const handleClick = (i) => {
    if (showMore === i) {
      // Scroll to the card's top when collapsing
      cardRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setShowMore(null), 100); // Wait briefly before collapsing
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
      ref={cardRef} // Attach the ref to the card container
      className={`${
        showMore === index ? "h-full" : "h-[28rem]"
      } w-[90%] flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-2xl border border-gray-100 shadow xl:p-8 ${color}`}
    >
      <h3 className="text-3xl font-semibold">{title}</h3>

      <div className="flex justify-center items-baseline my-4">
        <span className="mr-2 text-lg font-semibold">{price}</span>
        <span className="text-gray-300">/month</span>
      </div>
      <div className="mb-2">
        <hr />
      </div>

      {/* Main content with grow */}
      <div className="flex-grow">
        <ul role="list" className="mb-4 space-y-4 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335925/check_p3o63g.svg"
                alt="maxify websolution"
              />
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
                <img
                  src="https://res.cloudinary.com/dzt3r5a2b/image/upload/v1731335925/check_p3o63g.svg"
                  alt="maxify websolution"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center">
        <button
          className="flex justify-center gap-2"
          onClick={() => handleClick(index)}
        >
          <span>{showMore === index ? "View Less" : "View More"}</span>
          <span className="mt-1">
            <FaArrowDown />
          </span>
        </button>

        <a
          href={`https://wa.me/917428309119?text=Hello%20I%20am%20interested%20in%20your%20plan%20${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[black] w-full flex justify-center gap-2 bg-white mt-2 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <span className="text-[black]">Choose This Plan</span>
          <span className="mt-1">
            <FaArrowRightLong />
          </span>
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
